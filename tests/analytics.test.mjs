import test from 'node:test';
import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync,readdirSync} from 'node:fs';
import vm from 'node:vm';
import worker from '../dist/server/index.js';
const origin='https://owsense.test';
const id=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
function env(){const sql=new DatabaseSync(':memory:');for(const f of readdirSync('drizzle').filter(x=>x.endsWith('.sql')))sql.exec(readFileSync('drizzle/'+f,'utf8'));return {ANALYTICS_ADMIN_EMAIL:'owner@example.com',DB:{prepare(text){return {bind(...args){return {text,args}}}},async batch(stmts){return stmts.map(({text,args})=>{const q=sql.prepare(text);return text.startsWith('SELECT')?{results:q.all(...args)}:(q.run(...args),{results:[]})})}},sql};}
const event=(type='question_start',target='cover')=>({id:id(1),visitor:id(2),session:id(3),event:type,target});
const post=e=>new Request(origin+'/api/analytics/events',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json'},body:JSON.stringify(e)});
test('collect, deduplicate, aggregate; admin and test isolation',async()=>{
 const e=env();for(let i=0;i<2;i++)assert.equal((await worker.fetch(post(event()),e)).status,204);
 assert.equal((await worker.fetch(post({...event('question_complete'),id:id(4)}),e)).status,204);
 await worker.fetch(post({...event('question_start'),id:id(5),test:true}),e);
 assert.equal(e.sql.prepare('SELECT COUNT(*) n FROM analytics_events').get().n,3);
 assert.equal((await worker.fetch(new Request(origin+'/api/analytics/stats'),e)).status,401);
 assert.equal((await worker.fetch(new Request(origin+'/api/analytics/stats',{headers:{'oai-authenticated-user-email':'outsider@example.com','oai-authenticated-user-id':'other'}}),e)).status,403);
 const r=await worker.fetch(new Request(origin+'/api/analytics/stats?days=30',{headers:{'oai-authenticated-user-email':'owner@example.com','oai-authenticated-user-id':'owner'}}),e);assert.equal(r.status,200);const d=await r.json();assert.equal(d.visitors,1);assert.equal(d.questions[0].starts,1);assert.equal(d.questions[0].completes,1);
});
test('reject untrusted origin, malformed and unknown payloads',async()=>{
 const e=env();assert.equal((await worker.fetch(new Request(origin+'/api/analytics/events',{method:'POST',headers:{Origin:'https://elsewhere.test','Content-Type':'application/json'},body:JSON.stringify(event())}),e)).status,403);
 assert.equal((await worker.fetch(post({...event(),target:'not-a-question'}),e)).status,400);
 assert.equal((await worker.fetch(post({...event(),event:'private_info'}),e)).status,400);
 assert.equal((await worker.fetch(post({...event(),id:'bad'}),e)).status,400);
 assert.equal(e.sql.prepare('SELECT COUNT(*) n FROM analytics_events').get().n,0);
});
test('client deduplicates within session and honors optout',()=>{
 const memory=()=>{const m=new Map();return {getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,v),removeItem:k=>m.delete(k)}};
 const sent=[],ctx={window:{},crypto,Date,URLSearchParams,localStorage:memory(),sessionStorage:memory(),navigator:{},location:{protocol:'https:'},fetch:(u,o)=>{sent.push(JSON.parse(o.body));return Promise.resolve({ok:true})}};vm.createContext(ctx);vm.runInContext(readFileSync('dist/client/analytics.js','utf8'),ctx);
 const a=ctx.window.owAnalytics;a.route('home');a.route('home');a.questionStart('cover');a.questionStart('cover');a.questionComplete('cover',2);a.questionComplete('cover',2);a.questionComplete('cooldown',2);a.analysis();
 assert.equal(sent.filter(e=>e.event==='visit').length,1);assert.equal(sent.filter(e=>e.event==='question_start'&&e.target==='cover').length,1);assert.equal(sent.filter(e=>e.event==='question_complete'&&e.target==='cover').length,1);assert.equal(sent.filter(e=>e.event==='practice_complete').length,1);
 const n=sent.length;ctx.localStorage.setItem('owsense-analytics-optout','1');a.analysis();assert.equal(sent.length,n);
 assert(!sent.some(e=>'ip' in e || 'email' in e || 'url' in e));
});
