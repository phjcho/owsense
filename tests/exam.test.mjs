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
