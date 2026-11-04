const fs = require("node:fs"),
  vm = require("node:vm"),
  assert = require("node:assert/strict");
const app = { innerHTML: "" },
  input = {};
const ctx = {
  document: {
    querySelector: (s) => (s === "#app" ? app : input),
    querySelectorAll: () => [],
    addEventListener: () => {},
  },
  localStorage: { getItem: () => null },
  fetch: () => new Promise(() => {}),
  location: { hash: "#practice" },
  console: { error() {} },
  window: { scrollTo: () => {} },
};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("app.js", "utf8"), ctx);
vm.runInContext(
  "questions=" +
    fs.readFileSync("questions.json", "utf8") +
    ";guide=" +
    fs.readFileSync("guide.json", "utf8"),
  ctx,
);
for (const cat of ["인원수", "엄폐", "스킬", "궁극기", "구도"]) {
  vm.runInContext(`filter='${cat}';difficultyFilter='응용';practice()`, ctx);
  assert.equal((app.innerHTML.match(/class="card"/g) || []).length, 2);
}
ctx.probe = {
  id: "safe-id",
  title: "<img src=x onerror=alert(1)>",
  cat: "<script>bad</script>",
  context: "<b>context</b>",
  facts: ["<img onerror=x>"],
  difficulty: "응용",
};
const html = vm.runInContext("card(probe)", ctx);
assert(!html.includes("<script>"));
assert(!html.includes("<img src=x"));
assert(html.includes("&lt;"));
for (let i = 0; i < 5; i++) {
  vm.runInContext(`reader(5,'${i}')`, ctx);
  assert(app.innerHTML.includes("chapter-subnav"));
  assert(!app.innerHTML.includes("undefined"));
}
const query =
  "sliceGuideSection(guide[5].blocks,'기본 포맷 3/2','바퀴벌레론 실전에 적용하기').map(b=>b.text||b.src)";
const before = vm.runInContext(query, ctx);
vm.runInContext(
  "guide[5].blocks.splice(2,0,{type:'paragraph',text:'insertion test'})",
  ctx,
);
assert.deepEqual(vm.runInContext(query, ctx), before);
for (const q of JSON.parse(fs.readFileSync("questions.json", "utf8"))) {
  ctx.probe = q;
  const h = vm.runInContext("scene(probe)", ctx);
  assert(h.includes("topic-art"));
  assert(!h.includes("지금, 어떤 판단이 필요할까?"));
}
vm.runInContext("filter='엄폐';difficultyFilter='전체'", ctx);
const covers = vm.runInContext("visibleQuestions().map(q=>q.id)", ctx),
  firstCover = covers[0];
assert(covers.length > 1);
vm.runInContext(`question('${firstCover}')`, ctx);
assert(app.innerHTML.includes(`SCENARIO 01 / ${covers.length}`));
assert.equal(
  vm.runInContext(
    `questionSequence(questions.find(q=>q.id==='${firstCover}')).length`,
    ctx,
  ),
  covers.length,
);
assert.equal(
  vm.runInContext(
    "questionSequence(questions.find(q=>q.cat!=='엄폐')).length===questions.length",
    ctx,
  ),
  true,
);
vm.runInContext("filter='전체';difficultyFilter='전체'", ctx);
vm.runInContext("showError('<b>x</b>','<i>y</i>')", ctx);
assert(app.innerHTML.includes('role="alert"'));
assert(!app.innerHTML.includes("<b>x</b>"));
assert(!app.innerHTML.includes("<i>y</i>"));
ctx.location.hash = "#guide/5";
vm.runInContext("guide=[];render()", ctx);
assert(app.innerHTML.includes('role="alert"'));
vm.runInContext("guide=" + fs.readFileSync("guide.json", "utf8"), ctx);
ctx.location.hash = "#practice";
const menu = fs.readFileSync("index.html", "utf8");
assert(menu.indexOf(">초보자 가이드</a>") < menu.indexOf(">역할별 체크</a>"));
assert(menu.indexOf(">역할별 체크</a>") < menu.indexOf(">판단 연습</a>"));
console.log(
  "PASS: filters, escaping, five shared topic illustrations, chapter routes and insertion-stable boundaries.",
);

vm.runInContext("guide=" + fs.readFileSync("guide.json", "utf8"), ctx);
const titles = vm.runInContext("searchGuide('궁')", ctx),
  all = vm.runInContext("searchGuide('궁',true)", ctx);
assert(titles.length < all.length);
assert(titles.every((x) => x.title.includes("궁")));
assert.equal(new Set(all.map((x) => x.href)).size, all.length);
assert.equal(vm.runInContext("searchGuide('  ').length", ctx), 0);
assert.equal(vm.runInContext("searchGuide('<img onerror=x>').length", ctx), 0);
for (const hit of vm.runInContext(
  "guide.flatMap(ch=>ch.blocks.filter(b=>b.type==='heading').flatMap(b=>searchGuide(b.text)))",
  ctx,
)) {
  const [page, id, part, anchor] = hit.href.slice(1).split("/");
  if (page === "guide") {
    vm.runInContext(`reader('${id}','${part || ""}')`, ctx);
    if (anchor)
      assert(app.innerHTML.includes('id="' + anchor + '"'), hit.title);
  }
  if (page === "roles" && id !== undefined) {
    ctx.location.hash = hit.href;
    vm.runInContext("rolePage()", ctx);
    if (part)
      assert(
        (app.innerHTML + input.innerHTML).includes('id="' + part + '"'),
        hit.title,
      );
  }
}
console.log(
  "PASS: title-only search, grouped body search, empty/HTML queries and all guide/role result destinations.",
);
