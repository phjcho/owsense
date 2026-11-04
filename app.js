let questions = [];
let guide = [],
  filter = "전체",
  difficultyFilter = "전체",
  selected = null,
  answered = false;
let saved;
try {
  saved = JSON.parse(localStorage.getItem("owsense-progress") || "{}");
} catch {
  saved = {};
}
const app = document.querySelector("#app");
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function persist() {
  try {
    localStorage.setItem("owsense-progress", JSON.stringify(saved));
  } catch {}
}
function scene(q) {
  const art = {
    인원수:
      '<g transform="translate(76 66)"><circle cy="-14" r="10" fill="#fffdf8"/><path d="M-14 21v-8a14 14 0 0128 0v8" fill="#fffdf8"/></g><g transform="translate(120 53)"><circle cy="-14" r="10" fill="#fffdf8"/><path d="M-14 21v-8a14 14 0 0128 0v8" fill="#fffdf8"/></g><g transform="translate(164 66)"><circle cy="-14" r="10" fill="#fffdf8"/><path d="M-14 21v-8a14 14 0 0128 0v8" fill="#fffdf8"/></g><path d="M49 94q71 28 142 0" stroke-dasharray="3 7"/>',
    엄폐: '<path d="M125 31h31v81h-31z" fill="#d7dfcf"/><g transform="translate(100 76)"><circle cy="-14" r="10" fill="#fffdf8"/><path d="M-14 21v-8a14 14 0 0128 0v8" fill="#fffdf8"/></g><path d="M180 49h22m-22 20h13" stroke="#d6ab8b" stroke-dasharray="5 5"/>',
    스킬: '<circle cx="120" cy="70" r="39" stroke="#c5d6d7"/><path d="M124 42l-22 32h19l-5 25 25-36h-20z" fill="#fffdf8"/><path d="M153 39l8 5 3-10"/>',
    궁극기:
      '<circle cx="120" cy="68" r="46" stroke="#e8debd" stroke-width="13"/><circle cx="120" cy="68" r="44" stroke="#c38230" stroke-width="6"/><text x="120" y="69" dy=".35em" text-anchor="middle" fill="#513d24" stroke="none" font-family="Arial,sans-serif" font-size="52" font-weight="700">Q</text><path d="M109 125h22" stroke="#c38230" stroke-width="5"/>',
    구도: '<path d="M55 109h42V84h43V56h46v53" fill="#dce3d3"/><path d="M55 109h42V84h43V56h46"/><g transform="translate(162 37)"><circle cy="-14" r="10" fill="#fffdf8"/><path d="M-14 21v-8a14 14 0 0128 0v8" fill="#fffdf8"/></g><path d="M174 43l34 17m-34-17 31 37" stroke-dasharray="3 6" stroke="#b6c4ae"/>',
  };
  return `<div class="topic-art"><svg viewBox="0 0 240 140" aria-hidden="true" focusable="false" fill="none" stroke="#607867" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${art[q.cat] || art["구도"]}</svg><span>TOPIC / ${esc(q.cat)}</span></div>`;
}
function card(q) {
  return `<a class="card" href="#question/${q.id}">${scene(q)}<div class="card-body"><span class="tag">${esc(q.cat)}</span> <span class="tag difficulty-tag">${esc(q.difficulty || "기본")}</span><h3>${esc(q.title)}</h3><p>${esc(q.context.slice(0, 65))}…</p><div class="meta"><span>${saved[q.id] ? "✓ 해설 확인 완료" : "상황 판단 · 약 1분"}</span><b>연습하기 ↗</b></div></div></a>`;
}
function home() {
  let count = Object.keys(saved).filter((k) =>
    questions.some((q) => q.id === k),
  ).length;
  let art = guide[0].blocks.find((b) => b.type === "image");
  app.innerHTML = `<section class="hero"><div><div class="eyebrow">OVERWATCH · GAME SENSE LAB</div><h1>보는 눈이 달라지면,<br><em>플레이가 달라진다.</em></h1><p class="lead">영웅과 스킬은 알지만, 무엇을 해야 할지 막막하다면.<br>한 장면씩 판단하고, 다음 한타에서 써먹어보자.</p><div class="actions"><a class="btn orange" href="#question/${questions.find((q) => !saved[q.id])?.id || "regroup"}">판단 연습 시작하기 <span>↗</span></a><a class="btn light" href="#guide/0">가이드 먼저 읽기</a></div></div><div class="hero-art"><div class="art-label"><span>TEAMWORK STARTS HERE</span><span>01 / 기본기</span></div><img src="${art.src}" alt="다섯 역할의 계급과 역할을 보여주는 가이드 삽화"><div class="stamp">에임 너머의 오버워치</div></div></section><section><div class="sectionhead"><div><h2>지금, 당신의 판단은?</h2><p>상황을 읽고 → 선택하고 → 판단의 근거를 확인하세요.</p></div><a class="textlink" href="#practice">모든 연습 보기 ↗</a></div><div class="grid">${questions.slice(0, 3).map(card).join("")}</div></section><section><div class="sectionhead"><div><h2>판단의 바탕이 되는 7개 장</h2><p>함께 만든 초보자 가이드, 그림과 함께 읽어보세요.</p></div><a class="textlink" href="#guide/0">가이드 열기 ↗</a></div><div class="guide-strip">${guide.map((c) => `<a class="chapter" href="#guide/${c.id}"><span>0${c.id}</span><b>${c.title}</b></a>`).join("")}</div></section><div class="dashboard-bottom"><div class="large-num">${count}<span style="font-size:20px;color:#8c9984"> / ${questions.length}</span></div><div><b>하나씩 쌓이는 판단의 기준</b><p>학습 기록은 이 브라우저에 저장돼요. 틀린 상황도 다시 풀어볼 수 있어요.</p></div><a class="btn light" href="#practice">내 연습 이어가기 →</a></div>`;
}
function visibleQuestions() {
  return questions
    .filter(
      (q) =>
        difficultyFilter === "전체" ||
        (q.difficulty || "기본") === difficultyFilter,
    )
    .filter(
      (q) =>
        filter === "전체" ||
        q.cat === filter ||
        (filter === "오답 복습" && saved[q.id]?.correct === false),
    );
}
// 풀이 화면의 번호와 '다음 상황'이 따르는 목록. 연습 목록의 필터를 유지하고,
// 필터에 없는 문제(직접 링크 등)는 전체 목록을 따른다.
function questionSequence(q) {
  const list = visibleQuestions();
  return list.includes(q) ? list : questions;
}
function showError(message, detail) {
  app.innerHTML = `<p class="empty" role="alert">${esc(message)}${detail ? `<br><small>${esc(detail)}</small>` : ""}</p>`;
}
function practice() {
  app.innerHTML =`<div class="page-title"><div class="eyebrow">PRACTICE / 판단 연습</div><h1>한 장면, 하나의 판단.</h1><p class="lead">주어진 조건 안에서 가장 알맞은 선택을 찾아보세요. 선택 뒤에는 판단의 근거가 기다립니다.</p></div><div class="chips">${["전체", "인원수", "엄폐", "스킬", "궁극기", "구도", "오답 복습"].map((x) => `<button class="chip ${filter === x ? "active" : ""}" data-filter="${x}">${x}</button>`).join("")}</div><div class="difficulty-picker"><b>난이도</b><div class="chips" aria-label="난이도 선택">${["전체", "기본", "응용"].map((x) => `<button class="chip ${difficultyFilter === x ? "active" : ""}" data-level="${x}" aria-pressed="${difficultyFilter === x}">${x}</button>`).join("")}</div><small>기본 · 한 가지 기준 익히기 / 응용 · 여러 단서의 우선순위 판단하기</small></div><div class="grid">${
    visibleQuestions().map(card).join("") ||
    '<p class="empty">선택한 조건에 맞는 문제가 없어요. 주제나 난이도를 바꿔보세요.</p>'
  }</div>`;
  document.querySelectorAll("[data-filter]").forEach(
    (b) =>
      (b.onclick = () => {
        filter = b.dataset.filter;
        practice();
      }),
  );
  document.querySelectorAll("[data-level]").forEach(
    (b) =>
      (b.onclick = () => {
        difficultyFilter = b.dataset.level;
        practice();
      }),
  );
}
function participationMap(q) {
  const d = q.diagram;
  if (!d || d.type !== "participation") return scene(q);
  const unit = (team, n) =>
    Array.from(
      { length: n },
      () =>
        `<span class="map-unit ${team}" aria-hidden="true">${team === "ally" ? "아" : "적"}</span>`,
    ).join("");
  const ready = d.allies.main + d.allies.side;
  const description = `상대 ${d.enemies}명 준비. 아군 ${d.allies.main}명 정면 준비${d.allies.side ? `, 다른 위치 ${d.allies.side}명 공격 준비` : ""}${d.allies.joining ? `, ${d.allies.joining}명 합류 중이며 아직 공격과 지원 불가` : ""}. 실제 맵과 거리를 나타내지 않는 개념도.`;
  return `<section class="participation-map" aria-label="현재 배치"><div class="map-heading"><span>현재 배치</span><small>개념도 · 실제 거리와 무관</small></div><div class="map-field" role="img" aria-label="${esc(description)}"><div class="map-enemies"><span class="map-label">상대 팀 · 준비됨</span><div class="map-group">${unit("enemy", d.enemies)}</div></div><div class="map-zone" aria-hidden="true">교전 구역</div><div class="map-main"><span class="map-label">우리 팀 · 준비됨</span><div class="map-group">${unit("ally", d.allies.main)}</div></div>${d.allies.joining ? `<div class="map-route" aria-hidden="true"></div><div class="map-joining"><div class="map-group">${unit("ally", d.allies.joining)}</div><span class="map-label">합류 중<br>아직 공격·지원 불가</span></div>` : ""}${d.allies.side ? `<div class="map-side"><div class="map-group">${unit("ally", d.allies.side)}</div><span class="map-label">다른 위치<br>공격 준비됨</span></div>` : ""}</div><div class="map-legend"><span><i class="map-key ally"></i>아군</span><span><i class="map-key enemy"></i>상대</span>${d.allies.joining ? "<span>점선 · 합류 경로</span>" : ""}</div><p class="map-explanation" hidden>지금 참여할 수 있는 인원은 <strong>아군 ${ready}명 · 상대 ${d.enemies}명</strong>이에요.${d.allies.side ? " 서로 다른 위치라도 같은 싸움에 기여할 수 있어요." : " 합류 중인 아군은 아직 이 싸움에 기여할 수 없어요."}</p></section>`;
}

function question(id) {
  const q = questions.find((x) => x.id === id);
  if (!q) {
    location.hash = "practice";
    return;
  }
  const sequence = questionSequence(q);
  const position = sequence.indexOf(q);
  const nextQuestion = sequence[(position + 1) % sequence.length];
  app.innerHTML = `<section class="practice"><a class="back" href="#practice">← 판단 연습 목록</a><div class="sectionhead"><span class="eyebrow">SCENARIO ${String(position + 1).padStart(2, "0")} / ${sequence.length}</span><span class="tag">${esc(q.cat)}</span> <span class="tag difficulty-tag">${esc(q.difficulty || "기본")}</span></div><div class="question">${q.diagram ? participationMap(q) : ""}<h1>${esc(q.title)}</h1><p class="lead">${esc(q.context)}</p><div class="facts">${q.facts.map((x) => `<span class="fact">${esc(x)}</span>`).join("")}</div><b>지금 가장 알맞은 판단은?</b><div class="options" role="group" aria-label="답 선택">${q.options.map((x, i) => `<button class="option" data-option="${i}" aria-pressed="false"><span>0${i + 1}</span>${esc(x)}</button>`).join("")}</div><button id="check" class="btn orange" disabled style="opacity:.45">판단 확인하기 →</button><div id="question-feedback" aria-live="polite"></div></div></section>`;
  const buttons = [...document.querySelectorAll("[data-option]")],
    check = document.querySelector("#check"),
    feedback = document.querySelector("#question-feedback");
  function updateSelection() {
    buttons.forEach((b, i) => {
      b.classList.toggle("selected", selected === i);
      b.setAttribute("aria-pressed", String(selected === i));
    });
    check.disabled = selected === null;
    check.style.opacity = selected === null ? ".45" : "1";
  }
  buttons.forEach(
    (b, i) =>
      (b.onclick = () => {
        if (answered) return;
        selected = i;
        updateSelection();
      }),
  );
  check.onclick = () => {
    if (answered || selected === null) return;
    answered = true;
    saved[id] = { choice: selected, correct: selected === q.answer };
    persist();
    const mapNote = document.querySelector(".map-explanation");
    if (mapNote) mapNote.hidden = false;
    buttons.forEach((b, i) => {
      b.disabled = true;
      b.classList.toggle("correct", q.answer === i);
    });
    check.disabled = true;
    check.textContent = "판단 확인 완료";
    feedback.innerHTML = `<div class="feedback"><h3 tabindex="-1">${selected === q.answer ? "좋아요. 중요한 단서를 찾았어요." : "이 단서를 다시 살펴보세요."}</h3><b>${esc(q.cue)}</b><p>${selected !== q.answer ? esc(q.wrong) + " " : ""}${esc(q.why)}</p><a class="textlink" href="#guide/${q.chapter}">관련 가이드 · ${q.chapter}장 ${esc(guide[q.chapter].title)} ↗</a><br><small>제시된 상황을 위한 연습입니다. 실제 판단은 거리, 지형, 남은 자원에 따라 달라집니다.</small></div><div class="actions"><button id="retry" class="btn light">다시 풀기</button><a class="btn" href="#question/${nextQuestion.id}">다음 상황 →</a></div>`;
    feedback.querySelector("h3").focus({ preventScroll: true });
    document.querySelector("#retry").onclick = () => {
      const previous = selected;
      selected = null;
      answered = false;
      buttons.forEach((b) => {
        b.disabled = false;
        b.classList.remove("correct");
      });
      feedback.innerHTML = "";
      const mapNote = document.querySelector(".map-explanation");
      if (mapNote) mapNote.hidden = true;
      check.textContent = "판단 확인하기 →";
      updateSelection();
      buttons[previous].focus({ preventScroll: true });
    };
  };
}
const chapterFiveParts = [
  ["바퀴벌레론 이해하기", "바퀴벌레론 이해하기", "기본 포맷 3/2"],
  ["배치와 침투·방역", "기본 포맷 3/2", "바퀴벌레론 실전에 적용하기"],
  ["실전에 적용하기", "바퀴벌레론 실전에 적용하기", "기본 역할군 가이드"],
  [
    "역할별 가이드",
    "기본 역할군 가이드",
    "지금 영웅으로 그 역할을 할 수 있을까",
  ],
  ["부록 · 중복 포지션", "참고 · 중복 포지션 조합의 강점과 비용", null],
];
function sliceGuideSection(blocks, startTitle, endTitle) {
  const locate = (title) => {
    const matches = blocks
      .map((b, i) => (b.type === "heading" && b.text === title ? i : -1))
      .filter((i) => i >= 0);
    if (matches.length !== 1)
      throw new Error("가이드 구분 제목을 확인하세요: " + title);
    return matches[0];
  };
  const start = locate(startTitle),
    end = endTitle === null ? blocks.length : locate(endTitle);
  if (end <= start) throw new Error("가이드 소단원 순서가 올바르지 않습니다.");
  return blocks.slice(start, end);
}
function reader(id, part) {
  let c = guide[+id] || guide[0];
  const isFive = c.id === 5;
  const partIndex = isFive && /^[0-4]$/.test(part || "") ? Number(part) : 0;
  const original = c;
  if (isFive) {
    const p = chapterFiveParts[partIndex];
    let blocks = sliceGuideSection(original.blocks, p[1], p[2]);
    if (partIndex === 2)
      blocks = blocks.concat(
        sliceGuideSection(
          original.blocks,
          "지금 영웅으로 그 역할을 할 수 있을까",
          "참고 · 중복 포지션 조합의 강점과 비용",
        ),
      );
    if (partIndex === 3)
      blocks = [
        {
          type: "paragraph",
          text: "내 역할을 선택해 기본 가이드, 그림, 놓치기 쉬운 점과 이번 한타의 체크리스트를 함께 확인하세요.",
        },
      ];
    c = { ...c, title: p[0], blocks };
  }
  app.innerHTML = `<div class="reader"><aside class="sidebar"><div class="eyebrow">THE BEGINNER'S GUIDE</div><p><b>오버워치 초보자 가이드</b></p><input id="search" type="search" placeholder="가이드에서 검색" aria-label="가이드 검색"><div class="sidebar-links">${guide.map((x) => `<a class="${c.id === x.id ? "active" : ""}" href="#guide/${x.id}">${x.id}장 · ${x.title}</a>${isFive && x.id === 5 ? `<div class="chapter-subnav">${chapterFiveParts.map((p, i) => `<a class="${i === partIndex ? "active" : ""}" href="#guide/5/${i}" ${i === partIndex ? 'aria-current="page"' : ""}>${p[0]}</a>`).join("")}</div>` : ""}`).join("")}</div></aside><article class="article" id="article"><div class="eyebrow">CHAPTER 0${c.id}</div><h1>${c.title}</h1>${isFive && partIndex === 3 ? '<div class="actions"><a class="btn orange" href="#roles">내 역할 선택하기 →</a></div>' : ""}${c.blocks.map((b, i) => (b.type === "image" ? `<img src="${b.src}" alt="${esc(b.alt)}" loading="lazy">` : b.type === "table" ? `<table>${b.rows.map((row) => "<tr>" + row.map((t) => `<td>${esc(t)}</td>`).join("") + "</tr>").join("")}</table>` : b.type === "heading" ? (i === 0 ? "" : `<h2>${esc(b.text)}</h2>`) : `<p>${esc(b.text)}</p>`)).join("")}<div class="actions"><a class="btn orange" href="#practice">배운 내용으로 연습하기 ↗</a>${isFive ? `${partIndex > 0 ? `<a class="btn light" href="#guide/5/${partIndex - 1}">← 이전 · ${chapterFiveParts[partIndex - 1][0]}</a>` : ""}${partIndex < 4 ? `<a class="btn light" href="#guide/5/${partIndex + 1}">다음 · ${chapterFiveParts[partIndex + 1][0]} →</a>` : '<a class="btn light" href="#guide/6">다음 장 · 궁극기 →</a>'}` : c.id < 6 ? `<a class="btn light" href="#guide/${c.id + 1}">다음 장 →</a>` : ""}</div></article></div>`;
  document.querySelector("#search").oninput = (e) => {
    let term = e.target.value.trim();
    if (!term) {
      reader(id, part);
      document.querySelector("#search").focus();
      return;
    }
    let hits = guide.flatMap((ch) =>
      ch.blocks.filter((b) => b.text?.includes(term)).map((b) => ({ ch, b })),
    );
    document.querySelector("#article").innerHTML =
      `<h1>검색 결과</h1><p>“${esc(term)}” · ${hits.length}개</p>` +
      hits
        .slice(0, 40)
        .map(
          ({ ch, b }) =>
            `<a class="search-result" href="#guide/${ch.id}"><span class="tag">${ch.id}장 ${ch.title}</span><p>${esc(b.text)}</p></a>`,
        )
        .join("");
  };
}
const roles = [
  [
    "탱커",
    "팀이 싸울 공간을 만든다",
    [
      "내가 확보하려는 공간은 지금 필요한 곳인가?",
      "메인딜의 사선과 섭힐의 지원이 연결되는가?",
      "우리 팀을 두고 혼자 밀고 있지는 않은가?",
    ],
  ],
  [
    "메인딜",
    "좋은 자리에서 화력을 성과로 바꾼다",
    [
      "사거리·사선·엄폐·아군 지원이 좋은 자리인가?",
      "킬만 노리느라 상대 탱커 압박을 놓치지 않는가?",
      "팀이 만든 기회를 유효타와 킬로 연결하고 있는가?",
    ],
  ],
  [
    "섭딜",
    "침투와 방역으로 싸움의 조건을 바꾼다",
    [
      "우리 팀이 싸우는 타이밍에 나도 영향을 주고 있는가?",
      "상대의 체력과 주요 스킬을 소모시키고 있는가?",
      "나를 제외한 아군만 4대5로 싸우고 있지는 않은가?",
    ],
  ],
  [
    "섭힐",
    "팀을 유지하며 스킬로 기회를 만든다",
    [
      "탱커뿐 아니라 메인딜에게도 힐이 연결되는가?",
      "섭딜과 메인힐의 상태도 확인하는가?",
      "궁을 사용하는 아군이 죽지 않도록 케어하고 있는가?",
    ],
  ],
  [
    "메인힐",
    "사이드 지원과 황족 케어를 연결한다",
    [
      "본대가 안전해진 뒤에도 계속 본대에만 있지는 않은가?",
      "섭딜의 사이드 싸움을 적극적으로 돕고 있는가?",
      "힐만 보느라 방역과 공간 확보를 놓치지 않는가?",
    ],
  ],
];
function rolePage() {
  const labels = ["탱커", "메인딜", "서브딜", "서브힐", "메인힐"];
  const icons = [
    '<svg viewBox="0 0 48 48" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false" style="display:block"><path d="M24 3C17 3 10 5 6 7v15c0 9 9 18 18 23 9-5 18-14 18-23V7c-4-2-11-4-18-4Z"/></svg>',
    '<svg viewBox="0 0 48 48" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false" style="display:block"><path d="M7 2C3 6 2 10 2 16v21h11V16c0-6-1-10-6-14Zm17 0c-4 4-5 8-5 14v21h11V16c0-6-1-10-6-14Zm17 0c-4 4-5 8-5 14v21h10V16c0-6-1-10-5-14Z"/><path d="M2 41h11v6H2zm17 0h11v6H19zm17 0h10v6H36z"/></svg>',
    '<svg viewBox="0 0 48 48" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false" style="display:block"><path d="M7 2C3 6 2 10 2 16v21h11V16c0-6-1-10-6-14Zm17 0c-4 4-5 8-5 14v21h11V16c0-6-1-10-6-14Zm17 0c-4 4-5 8-5 14v21h10V16c0-6-1-10-5-14Z"/><path d="M2 41h11v6H2zm17 0h11v6H19zm17 0h10v6H36z"/></svg>',
    '<svg viewBox="0 0 48 48" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false" style="display:block"><path d="M18 3h12a3 3 0 0 1 3 3v9h9a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-9v9a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3v-9H6a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3h9V6a3 3 0 0 1 3-3Z"/></svg>',
    '<svg viewBox="0 0 48 48" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false" style="display:block"><path d="M18 3h12a3 3 0 0 1 3 3v9h9a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-9v9a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3v-9H6a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3h9V6a3 3 0 0 1 3-3Z"/></svg>',
  ];
  const descriptions = [
    "상성과 아군의 위치를 보고 공간 만들기",
    "좋은 자리에서 압박과 킬 만들기",
    "침투와 방역으로 싸움의 조건 바꾸기",
    "팀을 살리며 주요 스킬로 기회 만들기",
    "사이드 지원과 황족 케어 연결하기",
  ];
  const raw = location.hash.split("/")[1] || "";
  const idx = /^[0-4]$/.test(raw) ? Number(raw) : null;
  app.innerHTML = `<div class="page-title"><div class="eyebrow">ROLE CHECK / 역할별 체크</div><h1>당신의 역할은?</h1><p class="lead">내 역할을 고르면 기본 가이드와 이번 한타에서 확인할 일을 함께 볼 수 있어요.</p></div><div class="role-picker">${labels.map((label, i) => `<a class="role-choice ${idx === i ? "active" : ""}" href="#roles/${i}" ${idx === i ? 'aria-current="page"' : ""}><span class="role-icon">${icons[i]}</span><b>${label}</b><small>${descriptions[i]}</small></a>`).join("")}</div><div id="role-content"></div>`;
  if (idx === null) {
    document.querySelector("#role-content").innerHTML =
      '<div class="role-intro"><span class="eyebrow">KNOW YOUR ROLE</span><h2>무엇을 해야 할지, 내 역할부터.</h2><p>위에서 역할을 선택하세요. 가이드에서 사용하는 서브딜·서브힐은 섭딜·섭힐과 같은 뜻이에요.</p></div>';
    return;
  }
  const blocks = guide[5].blocks;
  let start = blocks.findIndex(
    (b) =>
      b.type === "heading" && new RegExp("^" + (idx + 1) + " ").test(b.text),
  );
  let end = start + 1;
  while (
    end < blocks.length &&
    !(
      blocks[end].type === "heading" &&
      (/^[1-5] /.test(blocks[end].text) ||
        blocks[end].text === "지금 영웅으로 그 역할을 할 수 있을까")
    )
  )
    end++;
  const content = blocks.slice(start + 1, end);
  const r = roles[idx];
  document.querySelector("#role-content").innerHTML =
    `<div class="role-detail"><section class="article role-guide"><span class="eyebrow">01 / 역할군 가이드</span><h2>${labels[idx]} — ${r[1]}</h2>${content.map((b) => (b.type === "image" ? `<img src="${b.src}" alt="${esc(b.alt)}" loading="eager" fetchpriority="high" decoding="async">` : b.type === "heading" ? `<h3>${esc(b.text)}</h3>` : `<p>${esc(b.text || "")}</p>`)).join("")}</section><aside class="role-tasks card"><div class="card-body"><span class="eyebrow">02 / 이번 한타</span><h2>이번 한타, 내 할 일은?</h2><p>싸우기 전과 싸운 뒤, 하나씩 확인해보세요.</p>${r[2].map((t, j) => `<label class="check"><input type="checkbox" data-check="role-${idx}-${j}" ${saved["role-" + idx + "-" + j] ? "checked" : ""}><span>${t}</span></label>`).join("")}<small>체크는 이 브라우저에 남아요. 다음 한타 전 새로 시작하세요.</small><button id="new-fight" class="btn light" style="margin-top:16px">새 한타 시작</button><p id="fight-reset-status" role="status" style="font-size:12px"></p><div class="actions"><a class="btn light" href="#guide/5">바퀴벌레론 읽기 ↗</a></div></div></aside></div>`;
  document.querySelectorAll("[data-check]").forEach(
    (x) =>
      (x.onchange = () => {
        saved[x.dataset.check] = x.checked;
        persist();
      }),
  );
  document.querySelector("#new-fight").onclick = () => {
    r[2].forEach((_, j) => {
      delete saved["role-" + idx + "-" + j];
    });
    document.querySelectorAll("[data-check]").forEach((x) => {
      x.checked = false;
    });
    persist();
    document.querySelector("#fight-reset-status").textContent =
      labels[idx] + " 체크를 초기화했어요. 새로운 한타를 준비하세요.";
  };
}
function render() {
  selected = null;
  answered = false;
  let [page, id, part] = (location.hash.slice(1) || "home").split("/");
  document
    .querySelectorAll("nav a")
    .forEach((a) =>
      a.classList.toggle(
        "active",
        a.hash === "#" + page ||
          (page === "question" && a.hash === "#practice") ||
          (page === "guide" && a.hash === "#guide/0"),
      ),
    );
  try {
    if (page === "guide") reader(id, part);
    else if (page === "practice") practice();
    else if (page === "question") question(id);
    else if (page === "roles") rolePage();
    else home();
  } catch (error) {
    console.error(error);
    showError(
      "화면을 불러오는 중 문제가 생겼어요. 페이지를 새로고침해주세요.",
      error.message,
    );
  }
  window.scrollTo(0, 0);
}
const loadJson = (url) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error(`${url} 불러오기 실패 (${r.status})`);
    return r.json();
  });
Promise.all([loadJson("guide.json"), loadJson("questions.json")])
  .then(([d, q]) => {
    guide = d;
    questions = q;
    addEventListener("hashchange", render);
    render();
  })
  .catch((error) => {
    console.error(error);
    showError(
      "가이드를 불러오지 못했어요. 페이지를 새로고침해주세요.",
      error.message,
    );
  });
document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (
    a &&
    a.getAttribute("href") === location.hash &&
    location.hash.startsWith("#guide/")
  ) {
    e.preventDefault();
    render();
  }
});
