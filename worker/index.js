const IDS = new Set(/*QUESTION_IDS*/[]);
const EVENTS = new Set(['visit','page_view','practice_start','question_start','question_complete','practice_complete','analysis_use']);
const PAGES = new Set(['home','guide','practice','question','roles','review','check']);
const uuid = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
const html=(body,status=200)=>new Response(body,{status,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','Referrer-Policy':'same-origin','X-Robots-Tag':'noindex'}});
const isAdmin=(request,env)=>!!env.ANALYTICS_ADMIN_EMAIL && request.headers.get('oai-authenticated-user-email')?.toLowerCase()===env.ANALYTICS_ADMIN_EMAIL.toLowerCase();
export function validEvent(e){
 if(!e || !uuid.test(e.id||'') || !uuid.test(e.visitor||'') || !uuid.test(e.session||'') || !EVENTS.has(e.event) || typeof e.target!=='string')return false;
 if(e.event.startsWith('question_'))return IDS.has(e.target);
 if(e.event==='page_view')return PAGES.has(e.target);
 return e.target==='';
}
export default {
 async fetch(request,env){
  const url=new URL(request.url),path=url.pathname;
  try{
   if(path==='/api/analytics/events'){
    if(request.method!=='POST')return json({error:'method'},405);
    if(request.headers.get('Origin')!==url.origin || !request.headers.get('Content-Type')?.startsWith('application/json'))return json({error:'origin'},403);
    if(Number(request.headers.get('Content-Length')||0)>2048)return json({error:'size'},413);
    const body=await request.text();if(body.length>2048)return json({error:'size'},413);
    let e;try{e=JSON.parse(body)}catch{return json({error:'json'},400)}
    if(!validEvent(e))return json({error:'event'},400);
    if(!env.DB)return json({error:'unavailable'},503);
    const now=Date.now(),day=new Date(now+9*3600*1000).toISOString().slice(0,10);
    const test=e.test===true?1:0;
    const dedupe=['visit','practice_start','practice_complete','question_start','question_complete'].includes(e.event);
    const id=dedupe?`${e.session}:${e.event}:${e.target}:${test}`:e.id;
    const statements=[env.DB.prepare('INSERT OR IGNORE INTO analytics_events (id,visitor,session,event,target,day,created_at,test) VALUES (?,?,?,?,?,?,?,?)').bind(id,e.visitor,e.session,e.event,e.target,day,now,test),env.DB.prepare('DELETE FROM analytics_events WHERE created_at < ?').bind(now-90*86400000)];
    await env.DB.batch(statements);
    return new Response(null,{status:204,headers:{'Cache-Control':'no-store'}});
   }
   if(path==='/stats' || path==='/api/analytics/stats'){
    if(!isAdmin(request,env)){
     const signedIn=request.headers.has('oai-authenticated-user-id');
     if(path.startsWith('/api/'))return json({error:signedIn?'forbidden':'signin'},signedIn?403:401);
     return html(`<html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>관리자 통계</title><main style="font:18px/1.7 system-ui;max-width:600px;margin:80px auto;padding:20px"><h1>관리자 전용 통계</h1><p>${signedIn?'이 계정에는 통계를 볼 권한이 없어요.':'사이트 소유자의 ChatGPT 계정으로 로그인해주세요.'}</p><a target="_top" href="/signin-with-chatgpt?return_to=%2Fstats">ChatGPT로 로그인</a><p><a href="/">사이트로 돌아가기</a></p></main></html>`,signedIn?403:200);
    }
    if(path==='/stats')return html(/*STATS_HTML*/'');
    if(request.method!=='GET')return json({error:'method'},405);
    const days=Number(url.searchParams.get('days')||30);if(![7,30,90].includes(days))return json({error:'days'},400);
    const cutoff=new Date(Date.now()+9*3600*1000-(days-1)*86400000).toISOString().slice(0,10);
    const results=await env.DB.batch([
     env.DB.prepare('SELECT COUNT(DISTINCT visitor) AS count FROM analytics_events WHERE test=0 AND day>=?').bind(cutoff),
     env.DB.prepare('SELECT event,COUNT(*) AS count FROM analytics_events WHERE test=0 AND day>=? GROUP BY event').bind(cutoff),
     env.DB.prepare("SELECT day, COUNT(DISTINCT visitor) AS visitors,SUM(event='visit') AS visits,SUM(event='question_start') AS starts,SUM(event='question_complete') AS completes,SUM(event='analysis_use') AS analyses FROM analytics_events WHERE test=0 AND day>=? GROUP BY day ORDER BY day DESC").bind(cutoff),
     env.DB.prepare("SELECT target,SUM(event='question_start') AS starts,SUM(event='question_complete') AS completes FROM analytics_events WHERE test=0 AND day>=? AND event IN ('question_start','question_complete') GROUP BY target ORDER BY starts DESC").bind(cutoff)
    ]);
    return json({asof:new Date().toISOString(),visitors:results[0].results[0].count,events:results[1].results,daily:results[2].results,questions:results[3].results});
   }
   if(path==='/privacy')return html(`<html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>이용 통계 안내</title><main style="font:17px/1.8 system-ui;max-width:700px;margin:50px auto;padding:20px"><h1>이용 통계 안내</h1><p>서비스 개선을 위해 방문, 화면 조회, 판단 연습 시작·채점 완료, 32문제 전체 완료, 조합 분석 실행을 집계합니다. 임의의 브라우저·세션 식별자와 문제 ID를 사용하며 이름·이메일·IP 주소·선택한 조합·답안은 통계에 저장하지 않습니다. 이벤트는 90일 보관합니다. 관리자만 통계를 볼 수 있습니다.</p><p>브라우저의 추적 방지(Do Not Track) 설정을 존중합니다. 아래 버튼으로 이 브라우저의 수집을 중단하거나 다시 허용할 수 있습니다. 기존 기록과 학습 기록은 이 설정으로 삭제되지 않습니다.</p><p id="status"></p><button id="off">이 브라우저 통계 수집 중단</button> <button id="on">다시 허용</button><p><a href="/">사이트로</a></p></main><script>const show=()=>document.querySelector('#status').textContent=localStorage.getItem('owsense-analytics-optout')==='1'?'현재 수집 중단 상태예요.':'현재 수집 허용 상태예요.';document.querySelector('#off').onclick=()=>{localStorage.setItem('owsense-analytics-optout','1');show()};document.querySelector('#on').onclick=()=>{localStorage.removeItem('owsense-analytics-optout');show()};show();</script></html>`);
   if(env.ASSETS)return env.ASSETS.fetch(request);
   return new Response('Not found',{status:404});
  }catch(error){console.error('analytics_error',error?.name||'Error');return json({error:'unavailable'},503)}
 }
};
