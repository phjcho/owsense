const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const app={innerHTML:''},input={};const ctx={document:{querySelector:s=>s==='#app'?app:input,querySelectorAll:()=>[],addEventListener:()=>{}},localStorage:{getItem:()=>null},fetch:()=>new Promise(()=>{}),location:{hash:'#practice'},window:{scrollTo:()=>{}}};
vm.createContext(ctx);vm.runInContext(fs.readFileSync('app.js','utf8'),ctx);vm.runInContext('questions='+fs.readFileSync('questions.json','utf8')+';guide='+fs.readFileSync('guide.json','utf8'),ctx);
for(const cat of ['인원수','엄폐','스킬','궁극기','구도']){vm.runInContext(`filter='${cat}';difficultyFilter='응용';practice()`,ctx);assert.equal((app.innerHTML.match(/class="card"/g)||[]).length,2);}
ctx.probe={id:'safe-id',title:'<img src=x onerror=alert(1)>',cat:'<script>bad</script>',context:'<b>context</b>',facts:['<img onerror=x>'],difficulty:'응용'};
const html=vm.runInContext('card(probe)',ctx);assert(!html.includes('<script>'));assert(!html.includes('<img src=x'));assert(html.includes('&lt;'));
for(let i=0;i<5;i++){vm.runInContext(`reader(5,'${i}')`,ctx);assert(app.innerHTML.includes('chapter-subnav'));assert(!app.innerHTML.includes('undefined'));}
const query="sliceGuideSection(guide[5].blocks,'기본 포맷 3/2','바퀴벌레론 실전에 적용하기').map(b=>b.text||b.src)";
const before=vm.runInContext(query,ctx);vm.runInContext("guide[5].blocks.splice(2,0,{type:'paragraph',text:'insertion test'})",ctx);assert.deepEqual(vm.runInContext(query,ctx),before);
for(const q of JSON.parse(fs.readFileSync('questions.json','utf8'))){ctx.probe=q;const h=vm.runInContext('scene(probe)',ctx);assert(h.includes('topic-art'));assert(!h.includes('지금, 어떤 판단이 필요할까?'));}
const menu=fs.readFileSync('index.html','utf8');assert(menu.indexOf('>초보자 가이드</a>')<menu.indexOf('>역할별 체크</a>'));assert(menu.indexOf('>역할별 체크</a>')<menu.indexOf('>판단 연습</a>'));console.log('PASS: filters, escaping, five shared topic illustrations, chapter routes and insertion-stable boundaries.');
