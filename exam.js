/* One answer per question; multiple defensible choices can be accepted. */
(() => {
  const data = window.owExamData;
  const KEY = 'owsense-operating-check-v1';
  const areas = {
    position: {name:'조합·거리·고지대',description:'조합의 거리, 지원 시야, 고지대 활용'},
    participation: {name:'진입·지원·리그룹',description:'공격 타이밍, 실제 참여 인원, 아군의 생존 자원'},
    ultimate: {name:'궁극기 투자·대응·교환',description:'궁 교환, 맞궁, 현재와 다음 한타의 투자'},
    macro: {name:'인원·거점·남은 시간',description:'철수, 접촉, 우위 유지, 시간에 맞춘 진입'}
  };
  const categories = [
    ['common','오버워치 공통','조합과 궁극기, 그에 따른 운영을 함께 점검해요.'],
    ['tank','탱커','진입·유지·후퇴와 공간 확보'],
    ['off-damage','서브딜러','측면 압박·진입·아군 보호'],
    ['main-damage','메인딜러','공격 위치·대상 전환·화력 지원'],
    ['flex-support','서브힐러','본대 유지·지원 시야·스킬 투자'],
    ['main-support','메인힐러','아군 보호·사이드 지원·유틸리티']
  ];
  const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let memory = null, root, guide, sectionRoute;
  function clean(raw) {
    if (!raw || raw.version!==data.version || !raw.answers || typeof raw.answers!=='object') return null;
    const answers={};
    for(const q of data.questions) if(Number.isInteger(raw.answers[q.id]) && raw.answers[q.id]>=0 && raw.answers[q.id]<5) answers[q.id]=raw.answers[q.id];
    const firstMissing=data.questions.findIndex(q=>!Number.isInteger(answers[q.id]));
    return {version:data.version,answers,current:raw.submitted===true && firstMissing>=0 ? firstMissing : Number.isInteger(raw.current) && raw.current>=0 && raw.current<data.questions.length ? raw.current : 0,submitted:raw.submitted===true && firstMissing===-1};
  }
  function read() {
    if(memory) return memory;
    try { memory=clean(JSON.parse(localStorage.getItem(KEY))); } catch {}
    return memory;
  }
  function save(state) {
    memory=state;
    try { localStorage.setItem(KEY,JSON.stringify(state));return true; } catch { return false; }
  }
  function evaluate(answers) {
    const rows=data.questions.map(q=>({q,choice:answers[q.id],complete:Number.isInteger(answers[q.id]) && answers[q.id]>=0 && answers[q.id]<5,accepted:q.accepted.includes(answers[q.id])}));
    return {rows,complete:rows.every(r=>r.complete),accepted:rows.filter(r=>r.accepted).length,areas:Object.entries(areas).map(([id,a])=>({...a,id,total:rows.filter(r=>r.q.area===id).length,misses:rows.filter(r=>r.q.area===id && r.complete && !r.accepted)}))};
  }
  function decisionPatterns(answers) {
    return data.patterns.map(p=>{
      const eligible=Object.keys(p.opportunities).filter(id=>Number.isInteger(answers[id]) && answers[id]>=0 && answers[id]<5);
      const hits=eligible.filter(id=>p.opportunities[id].includes(answers[id]));
      return {...p,hits,total:eligible.length,count:hits.length,percent:eligible.length?Math.round(hits.length/eligible.length*100):0};
    }).filter(p=>p.count>0).sort((a,b)=>b.count-a.count || b.percent-a.percent);
  }
  function coachingSummary(answers) {
    return decisionPatterns(answers).slice(0,2).map(p=>({
      id:p.id,title:p.coaching.title,action:p.coaching.action,description:p.description,count:p.count,total:p.total,percent:p.percent,
      evidence:p.hits.map(id=>{const q=data.questions.find(q=>q.id===id);return {number:data.questions.indexOf(q)+1,feedback:q.feedback[answers[id]]};})
    }));
  }
  function coachingMarkup(answers) {
    const goals=coachingSummary(answers);
    if(!goals.length)return `<section class="exam-coaching"><div class="eyebrow">종합 해설</div><h2>이번에 짚은 판단 기준을 실전에서도 이어가세요</h2><p>이번 문항에서는 개선이 필요한 선택이 나타나지 않았어요. 교전 전 우리 조합의 거리, 아군의 참여 조건, 궁을 쓸 이유를 함께 확인하는 기준을 유지하세요.</p></section>`;
    return `<section class="coaching-results" aria-label="종합 해설">${goals.map((g,i)=>`<article class="exam-coaching ${i?'secondary-goal':'primary-goal'}"><div class="coaching-copy"><div class="eyebrow">${i?'함께 보완할 판단':'먼저 보완할 판단'}</div><h2>${esc(g.title)}</h2><p class="coaching-consequence">${esc(g.description)}</p><p class="coaching-action"><b>다음 게임에서는</b>${esc(g.action)}</p><button type="button" class="btn light" data-coaching-review="${g.evidence.map(e=>e.number).join(',')}">관련 문항과 해설 보기 (${g.evidence.map(e=>e.number+'번').join(' · ')})</button></div><figure class="coaching-chart"><div class="coaching-donut" role="img" aria-label="개선이 필요한 선택 비율 ${g.percent}%, 관련 ${g.total}문항 중 ${g.count}회" style="--decision-percent:${g.percent}%"><div><strong>${g.percent}<small>%</small></strong><span>개선이 필요한 선택</span></div></div><figcaption><b>관련 ${g.total}문항 중 ${g.count}회 · ${g.percent}%</b><span>낮을수록 좋아요</span></figcaption></figure><p class="coaching-chart-note">${g.count===1?'한 문항에서 확인된 내용으로, 반복되는 습관을 뜻하지는 않아요.':'이번 답안에서 같은 판단 기준을 놓친 문항들을 모았어요.'}</p></article>`).join('')}<p class="exam-meta">이번 답안에서 보완할 내용을 정리했어요. 관련 선택 횟수가 많은 항목부터 최대 두 가지를 안내하며, 실제 플레이 전체를 판정하지 않아요.</p></section>`;
  }

  function reviewLink(q) {
    const chapter=guide.find(c=>c.id===q.chapter);
    const index=chapter?.blocks.findIndex(b=>b.type==='heading' && b.text===q.section);
    return chapter && index>=0 ? sectionRoute(chapter,index) : '#guide/'+q.chapter;
  }
  function landing() {
    const state=read();
    root.innerHTML=`<section class="exam-shell"><div class="eyebrow">CHECK YOUR DECISIONS</div><h1>운영 판단 점검</h1><p class="lead">조합과 궁극기, 인원과 남은 시간을 보고 지금 할 일을 골라보세요.<br>놓친 조건을 찾아 다음 게임의 판단 기준으로 연결해요.</p><div class="exam-categories">${categories.map(([id,name,desc],i)=>`<article class="exam-category ${i===0?'available':''}"><span class="eyebrow">${String(i+1).padStart(2,'0')} / ${i===0?'지금 풀 수 있어요':'준비 중'}</span><h2>${name}</h2><p>${desc}</p>${i===0?`<p class="exam-meta">${data.questions.length}문제 · 5지선다 · 제출 후 해설</p><button class="btn orange" id="exam-start">${state?.submitted?'결과 다시 보기':state?'이어서 풀기':'문제 풀기 시작!'} →</button>`:'<span class="exam-coming">문제를 준비하고 있어요</span>'}</article>`).join('')}</div><aside class="exam-note"><b>어떤 판단을 놓쳤는지 확인해요.</b><p>네 분야를 4문항씩 점검해요. 문제마다 가장 먼저 할 행동 하나를 선택하세요. 타당한 답이 여러 개인 문항은 어느 쪽을 골라도 인정해요. 결과는 이번 문항에서의 판단을 정리하며, 실제 실력이나 플레이 성향을 판정하지 않아요.</p><p>답안과 최근 결과는 이 브라우저에 저장돼요. 역할 구분은 초보자 가이드의 설명 기준이에요.</p></aside></section>`;
    root.querySelector('#exam-start').onclick=()=>{
      if(!read())save({version:data.version,answers:{},submitted:false});
      location.hash=read().submitted?'check/common/result':'check/common/run';
    };
  }
  function updateProgress() {
    const answers=read().answers, count=Object.keys(answers).length;
    root.querySelector('#exam-progress').textContent=`${count} / ${data.questions.length}문제 선택`;
    root.querySelector('#exam-meter').value=count;
    root.querySelectorAll('[data-jump]').forEach(b=>{
      const i=Number(b.dataset.jump), filled=Number.isInteger(answers[data.questions[i].id]);
      b.classList.toggle('filled',filled);const active=i===(read().current||0);b.classList.toggle('current',active);if(active)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');b.setAttribute('aria-label',`${i+1}번으로 이동${active?' · 현재 문제':''} · ${filled?'선택 완료':'미응답'}`);
    });
  }
  function run() {
    if(!read())save({version:data.version,answers:{},submitted:false});
    if(read().submitted){result();return;}
    root.innerHTML=`<section class="exam-shell"><a class="back" href="#check">← 운영 판단 점검</a><div class="eyebrow">오버워치 공통 · ${data.questions.length}문제</div><h1>지금, 어떤 선택을 하겠어요?</h1><p>문제마다 행동 하나를 고르세요. 다음 문제 버튼으로 이동하고, 마지막에 답안을 제출하면 해설을 확인할 수 있어요.</p><p class="exam-meta" id="exam-save-note">답안은 자동 저장돼요. 중간에 나가도 이어서 풀 수 있어요. 기존 10문항을 풀었다면 추가된 6문항부터 이어집니다.</p><div class="exam-toolbar"><div><b id="exam-progress" aria-live="polite"></b><progress id="exam-meter" max="${data.questions.length}" value="0" aria-label="답안 선택 진행률"></progress></div><div class="exam-jumps" aria-label="문제 바로 가기">${data.questions.map((q,i)=>`<button type="button" data-jump="${i}">${i+1}</button>`).join('')}</div></div><form id="exam-form" novalidate>${data.questions.map((q,i)=>`<fieldset class="exam-question" id="exam-q-${i}" tabindex="-1"><legend><span>QUESTION ${String(i+1).padStart(2,'0')}</span> ${i+1}번</legend><p class="exam-meta">${esc(areas[q.area].name)}</p><p class="exam-context">${esc(q.context)}</p><div class="facts">${q.facts.map(f=>`<span class="fact">${esc(f)}</span>`).join('')}</div><p><b>가장 먼저 실행할 행동은?</b></p><div class="exam-options">${q.options.map((o,j)=>`<label class="exam-option"><input type="radio" name="${q.id}" value="${j}" ${read().answers[q.id]===j?'checked':''}><span class="exam-option-number">${j+1}</span><span>${esc(o)}</span></label>`).join('')}</div></fieldset>`).join('')}<div class="exam-page-actions"><button class="btn light" type="button" id="exam-prev">← 이전 문제</button><span id="exam-current-label" aria-live="polite"></span><button class="btn orange" type="button" id="exam-next">다음 문제 →</button></div><div class="exam-submit" id="exam-submit-area"><p id="exam-validation" role="alert"></p><button class="btn orange" type="submit">답안 제출하고 결과 보기 →</button><p class="exam-meta">제출 전까지 답을 바꿀 수 있어요.</p></div></form></section>`;
    function showQuestion(index, focus=true) {
      const state=read();state.current=Math.max(0,Math.min(data.questions.length-1,index));save(state);
      root.querySelectorAll('.exam-question').forEach((el,i)=>{el.hidden=i!==state.current;});
      root.querySelector('#exam-prev').disabled=state.current===0;
      root.querySelector('#exam-next').hidden=state.current===data.questions.length-1;
      root.querySelector('#exam-submit-area').hidden=state.current!==data.questions.length-1;
      root.querySelector('#exam-current-label').textContent=`${state.current+1} / ${data.questions.length} 문제`;
      updateProgress();
      if(focus){const target=root.querySelector('#exam-q-'+state.current);target.focus({preventScroll:true});target.scrollIntoView({behavior:'smooth',block:'start'});}
    }
    root.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>showQuestion(Number(b.dataset.jump)));
    root.querySelector('#exam-prev').onclick=()=>showQuestion((read().current||0)-1);
    root.querySelector('#exam-next').onclick=()=>showQuestion((read().current||0)+1);
    root.querySelector('#exam-form').onchange=e=>{
      if(e.target.type!=='radio')return;
      const state=read();state.answers[e.target.name]=Number(e.target.value);
      if(!save(state))root.querySelector('#exam-save-note').textContent='이 브라우저에서 저장을 사용할 수 없어요. 페이지를 닫기 전에 제출해주세요.';
      root.querySelector('#exam-validation').textContent='';updateProgress();
    };
    root.querySelector('#exam-form').onsubmit=e=>{
      e.preventDefault();const state=read(),score=evaluate(state.answers);
      if(!score.complete){const first=score.rows.findIndex(r=>!r.complete);root.querySelector('#exam-validation').textContent=`아직 선택하지 않은 문제가 있어요. ${first+1}번부터 확인해주세요.`;showQuestion(first);root.querySelector('#exam-submit-area').hidden=false;return;}
      state.submitted=true;save(state);location.hash='check/common/result';
    };
    showQuestion(read().current||0,false);
  }
  function result() {
    const state=read();
    if(!state?.submitted || !evaluate(state.answers).complete){run();return;}
    const report=evaluate(state.answers), missed=report.rows.filter(r=>!r.accepted);
    root.innerHTML=`<section class="exam-shell"><a class="back" href="#check">← 카테고리 선택</a><div class="eyebrow">오버워치 공통 · 점검 결과</div><h1>${missed.length?'지금 보완하면 좋은 운영 판단':'이번 문제의 판단 기준을 잘 짚었어요'}</h1><p class="exam-result-intro">${missed.length?'놓친 조건을 확인하고, 다음 게임에서 바꿔볼 행동을 정해보세요.':'모든 문항에서 타당한 선택을 골랐어요.'}</p>${coachingMarkup(state.answers)}<div class="coaching-score"><span>${data.questions.length}문항 중 <b>${report.accepted}문항</b> 타당한 선택</span><span>다시 볼 문항 <b>${missed.length}개</b></span></div><button class="btn orange decision-details-button" id="exam-details-toggle" aria-expanded="false" aria-controls="exam-details">문항별 선택과 해설 보기 ↓</button><div id="exam-details" hidden><h2>문항별 선택과 해설</h2><p>선택한 답의 근거와 다른 타당한 선택을 확인할 수 있어요.</p>${[...report.rows].sort((a,b)=>Number(a.accepted)-Number(b.accepted)).map(r=>{const i=data.questions.indexOf(r.q);return `<details class="exam-review" id="exam-review-${i+1}" ${!r.accepted?'open':''}><summary><span>${i+1}번 · ${r.accepted?'타당한 선택':'다시 확인할 선택'}</span><span>내 답 ${r.choice+1}번</span></summary><div class="exam-review-body"><p>${esc(r.q.context)}</p><div class="facts">${r.q.facts.map(f=>`<span class="fact">${esc(f)}</span>`).join('')}</div><p class="exam-selected"><b>내 선택 ${r.choice+1}.</b> ${esc(r.q.options[r.choice])}</p><p>${esc(r.q.feedback[r.choice])}</p><p><b>기억할 기준</b><br>${esc(r.q.cue)}</p><a class="textlink" href="${reviewLink(r.q)}">초보자 가이드 · ${esc(r.q.section)} ↗</a><details class="exam-alternatives"><summary>다섯 보기의 판단 근거</summary>${r.q.options.map((o,j)=>`<div><b>${j+1}. ${esc(o)}</b><span class="exam-verdict">${r.q.accepted.includes(j)?'타당한 선택':'이 조건에서는 재검토'}</span><p>${esc(r.q.feedback[j])}</p></div>`).join('')}</details></div></details>`;}).join('')}</div><div class="actions"><button class="btn light" id="exam-restart">다시 풀기</button><a class="btn light" href="#check">다른 카테고리 보기</a></div><div id="exam-reset-confirm" hidden class="exam-note"><p>현재 답안과 결과를 지우고 다시 풀까요? 기존 판단 연습 기록은 유지돼요.</p><button class="btn orange" id="exam-reset-yes">새로 시작</button> <button class="btn light" id="exam-reset-no">취소</button></div></section>`;
    root.querySelector('#exam-details-toggle').onclick=()=>{const panel=root.querySelector('#exam-details'),button=root.querySelector('#exam-details-toggle');panel.hidden=!panel.hidden;button.setAttribute('aria-expanded',String(!panel.hidden));button.textContent=panel.hidden?'문항별 선택과 해설 보기 ↓':'문항별 선택과 해설 접기 ↑';};
    root.querySelectorAll('[data-coaching-review]').forEach(button=>button.onclick=()=>{
      root.querySelector('#exam-details').hidden=false;
      const toggle=root.querySelector('#exam-details-toggle');toggle.setAttribute('aria-expanded','true');toggle.textContent='문항별 선택과 해설 접기';
      const numbers=button.dataset.coachingReview.split(',');
      numbers.forEach(n=>{root.querySelector('#exam-review-'+n).open=true;});
      const target=root.querySelector('#exam-review-'+numbers[0]);target.setAttribute('tabindex','-1');target.focus({preventScroll:true});target.scrollIntoView({behavior:'smooth',block:'start'});
    });
    root.querySelector('#exam-restart').onclick=()=>{root.querySelector('#exam-reset-confirm').hidden=false;root.querySelector('#exam-reset-yes').focus();};
    root.querySelector('#exam-reset-no').onclick=()=>{root.querySelector('#exam-reset-confirm').hidden=true;root.querySelector('#exam-restart').focus();};
    root.querySelector('#exam-reset-yes').onclick=()=>{save({version:data.version,answers:{},submitted:false});location.hash='check/common/run';};
  }
  window.owExam={evaluate,clean,decisionPatterns,coachingSummary,mount(element,category,mode,chapters,route){root=element;guide=chapters;sectionRoute=route;if(category==='common' && mode==='run')run();else if(category==='common' && mode==='result')result();else landing();}};
})();
