import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync,existsSync} from 'node:fs';
const base=existsSync('questions.json')?'.':'dist';
const sandbox={window:{},localStorage:{getItem:()=>null,setItem:()=>{}},location:{hash:''}};
vm.createContext(sandbox);
for(const file of ['exam-data.js','exam.js'])vm.runInContext(readFileSync(`${base}/${file}`,'utf8'),sandbox);
const {owExam:exam,owExamData:data}=sandbox.window;
const guide=JSON.parse(readFileSync(`${base}/guide.json`));
test('ten unique five-option items with exact guide-section references',()=>{
 assert.equal(data.questions.length,10);
 assert.equal(new Set(data.questions.map(q=>q.id)).size,10);
 for(const q of data.questions){assert.equal(q.options.length,5);assert.equal(q.feedback.length,5);assert.ok(q.accepted.length>0&&q.accepted.length<5);assert.equal(new Set(q.accepted).size,q.accepted.length);assert.ok(q.accepted.every(i=>Number.isInteger(i)&&i>=0&&i<5));assert.ok(q.feedback.every(s=>s.length>15));assert.equal(guide.find(c=>c.id===q.chapter).blocks.filter(b=>b.type==='heading'&&b.text===q.section).length,1,q.section);}
});
test('every accepted alternative counts equally; omissions cannot complete',()=>{
 const answers=Object.fromEntries(data.questions.map(q=>[q.id,q.accepted[0]]));
 assert.equal(exam.evaluate(answers).accepted,10);assert.equal(exam.evaluate(answers).complete,true);
 for(const q of data.questions)for(const a of q.accepted){const changed={...answers,[q.id]:a};assert.equal(exam.evaluate(changed).accepted,10);assert.equal(exam.evaluate(changed).areas.reduce((s,a)=>s+a.misses.length,0),0);}
 delete answers[data.questions[0].id];assert.equal(exam.evaluate(answers).complete,false);
});
test('missteps map to their own area, invalid persisted answers never submit',()=>{
 const answers=Object.fromEntries(data.questions.map(q=>[q.id,q.accepted[0]]));
 const q=data.questions[8];answers[q.id]=2;
 const result=exam.evaluate(answers);assert.equal(result.accepted,9);assert.equal(result.areas.find(a=>a.id==='ultimate').misses[0].q.id,q.id);
 answers[q.id]='2';assert.equal(exam.clean({version:1,answers,submitted:true}).submitted,false);
 assert.equal(exam.clean({version:0,answers,submitted:true}),null);
 assert.equal(exam.clean({version:1,answers:{bad:2},submitted:true}).submitted,false);
});
test('selection patterns cover each nonaccepted choice and never label accepted alternatives',()=>{
 for(const q of data.questions)for(let choice=0;choice<5;choice++){
   const hits=exam.decisionPatterns({[q.id]:choice});
   assert.equal(hits.length,q.accepted.includes(choice)?0:1,`${q.id} choice ${choice}`);
 }
});
test('same score with different choices produces different evidence and valid denominators',()=>{
 const answers=Object.fromEntries(data.questions.map(q=>[q.id,q.accepted[0]]));
 answers['defense-ult-plan']=4;answers['numbers-versus-ults']=2;
 const delayed=exam.decisionPatterns(answers).find(p=>p.id==='late-defense');
 assert.equal(delayed.count,2);assert.equal(delayed.total,2);assert.equal(delayed.percent,100);
 answers['defense-ult-plan']=3;
 assert.equal(exam.decisionPatterns(answers).find(p=>p.id==='late-defense').count,1);
 assert.equal(exam.decisionPatterns(answers).find(p=>p.id==='invest').count,1);
 assert.equal(exam.decisionPatterns({}).length,0);
 assert.equal(exam.decisionPatterns(Object.fromEntries(data.questions.map(q=>[q.id,q.accepted[0]]))).length,0);
});
test('result leads with coaching, keeps percentages small and opens related explanations',()=>{
 const answers=Object.fromEntries(data.questions.map(q=>[q.id,q.accepted[0]]));answers['numbers-versus-ults']=2;
 const ctx={window:{},location:{hash:''},localStorage:{getItem:()=>JSON.stringify({version:1,answers,submitted:true}),setItem:()=>{}}};vm.createContext(ctx);
 for(const file of ['exam-data.js','exam.js'])vm.runInContext(readFileSync(`${base}/${file}`,'utf8'),ctx);
 const reviewButton={dataset:{coachingReview:'9'}};const elements=new Map();const root={innerHTML:'',querySelectorAll(){return [reviewButton];},querySelector(s){if(!elements.has(s))elements.set(s,{hidden:true,setAttribute(k,v){this[k]=v;},focus(){this.focused=true;},scrollIntoView(){this.scrolled=true;}});return elements.get(s);}};
 ctx.window.owExam.mount(root,'common','result',guide,()=> '#guide');
 assert.doesNotMatch(root.innerHTML,/decision-patterns|role="meter"/);assert.match(root.innerHTML,/관련 2문항 중 1회 · 50%/);assert.ok(root.innerHTML.indexOf('다음 게임에서는')<root.innerHTML.indexOf('coaching-chart'));assert.match(root.innerHTML,/--decision-percent:50%/);assert.match(root.innerHTML,/aria-label="개선이 필요한 선택 비율 50%, 관련 2문항 중 1회"/);assert.match(root.innerHTML,/<div id="exam-details" hidden>/);
 assert.ok(root.innerHTML.indexOf('<span>9번 · 다시 확인할 선택')<root.innerHTML.indexOf('<span>1번 · 타당한 선택'));
 root.querySelector('#exam-details-toggle').onclick();assert.equal(root.querySelector('#exam-details').hidden,false);
 root.querySelector('#exam-details-toggle').onclick();assert.equal(root.querySelector('#exam-details').hidden,true);reviewButton.onclick();assert.equal(root.querySelector('#exam-details').hidden,false);assert.equal(root.querySelector('#exam-review-9').open,true);assert.equal(root.querySelector('#exam-review-9').focused,true);
});
test('coaching follows selected evidence, limits goals and invents no weakness',()=>{
 const answers=Object.fromEntries(data.questions.map(q=>[q.id,q.accepted[0]]));
 assert.equal(exam.coachingSummary(answers).length,0);
 answers['focus-or-front']=2;
 let goals=exam.coachingSummary(answers);
 assert.equal(goals.length,1);assert.equal(goals[0].id,'delay');assert.equal(goals[0].count,1);
 assert.equal(goals[0].evidence[0].feedback,data.questions[3].feedback[2]);
 answers['unused-highground']=0;
 goals=exam.coachingSummary(answers);assert.equal(goals[0].count,2);
 answers['range-or-point']=0;answers['primal-or-nano']=3;
 assert.equal(exam.coachingSummary(answers).length,2);
 answers['focus-or-front']=data.questions[3].accepted[0];answers['unused-highground']=data.questions[2].accepted[0];
 assert.ok(exam.coachingSummary(answers).every(g=>g.id!=='delay'));
});

test('ambiguous ult follow-up is accepted and defensive timing stays separate',()=>{
 assert.ok(data.questions[6].accepted.includes(0));
 assert.equal(exam.decisionPatterns({'bait-transcendence':0}).length,0);
 const goals=exam.coachingSummary({'focus-or-front':2,'numbers-versus-ults':2});
 assert.equal(goals.length,2);assert.ok(goals.some(g=>g.id==='delay'));assert.ok(goals.some(g=>g.id==='late-defense'));
 for(const g of goals)assert.equal(g.evidence.length,1);
});
