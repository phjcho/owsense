import {readFileSync,writeFileSync,mkdirSync,cpSync,readdirSync,rmSync,existsSync} from 'node:fs';
const hosting=JSON.parse(readFileSync(existsSync('.openai/hosting.json') ? '.openai/hosting.json' : 'hosting.example.json'));
const sourceRoot = existsSync('questions.json') ? '.' : 'dist';
for(const dir of ['dist/client','dist/server','dist/.openai']){rmSync(dir,{recursive:true,force:true});mkdirSync(dir,{recursive:true});}
for(const entry of ['index.html','app.js','match.js','style.css','questions.json','guide.json','match-backgrounds.json','analytics.js','assets'])cpSync(sourceRoot+'/'+entry,'dist/client/'+entry,{recursive:true});
const qs=JSON.parse(readFileSync(sourceRoot+'/questions.json'));
const stats=readFileSync('worker/stats.html','utf8').replace('__QUESTION_NAMES__',JSON.stringify(Object.fromEntries(qs.map(q=>[q.id,q.title]))).replaceAll('<','\\u003c'));
writeFileSync('dist/server/index.js',readFileSync('worker/index.js','utf8').replace('/*QUESTION_IDS*/[]',JSON.stringify(qs.map(q=>q.id))).replace("/*STATS_HTML*/''",JSON.stringify(stats)));
writeFileSync('dist/server/wrangler.json',JSON.stringify({name:'owsense',main:'index.js',compatibility_date:'2026-01-01',assets:{directory:'../client',binding:'ASSETS',run_worker_first:['/api/*','/stats','/privacy']},d1_databases:[{binding:'DB',database_name:'owsense-analytics',database_id:'local-placeholder'}]},null,2));
writeFileSync('dist/.openai/hosting.json',JSON.stringify(hosting,null,2));
console.log('Built analytics Worker and existing site assets');
