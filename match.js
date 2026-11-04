const matchHeroes = [
  {
    id: "ana",
    name: "아나",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/985b06beae46b7ba3ca87d1512d0fc62ca7f206ceca58ef16fc44d43a1cc84ed.png",
  },
  {
    id: "anran",
    name: "안란",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2c38b41d79a1ce9a08b9ad8eb7edf3ff819bd448af16a5815be8c7fdb7203aa0.png",
  },
  {
    id: "ashe",
    name: "애쉬",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4076bbaa2eb52a0bfe612434071e56e7702d5454473dbbea2f9e392a9d997a94.png",
  },
  {
    id: "baptiste",
    name: "바티스트",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4e6f1ca45d9f88fa89260787397f141a6f007b14e5b26698883b6a17bab9680.png",
  },
  {
    id: "bastion",
    name: "바스티온",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4ede795c2a681aaccfa72d0c901cba0cb8a2c292fd6a97b2ba9faed161c2d184.png",
  },
  {
    id: "brigitte",
    name: "브리기테",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/795fba91376d87d441a7f359ae12a3175dfa95825ccc4414cc6b95b129fc4cb0.png",
  },
  {
    id: "cassidy",
    name: "캐서디",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9240cd64cc8ef58df9acbf55204ab1b5d8578f743fda5931f0dbccbd75ab841b.png",
  },
  {
    id: "dmon",
    name: "D.Mon",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a46c60b8562fdbd0b8308396d0808f7606fba208bc67cccf3f82fe56d2c73b9d.png",
  },
  {
    id: "doctrine",
    name: "독트린",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2492a15c575c12314907d0d77501ec337b4d56796bc7f03e5dfb50d415612bae.png",
  },
  {
    id: "domina",
    name: "도미나",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1161c112292c56c052c0ae711792fcde06e3251b98bc9709e582dd7585b5dcd6.png",
  },
  {
    id: "doomfist",
    name: "둠피스트",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ff5c54f43ad253c7faeda9c4ed31d42582ea6b19205d197866f3dd0c0aa14c16.png",
  },
  {
    id: "dva",
    name: "D.Va",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/df5a5532862d9292634fb3dc0e51a4705aa601de65e5e815513ccc663d84de56.png",
  },
  {
    id: "echo",
    name: "에코",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4f2d5b0c2b7e82d61353186c5f23152ccba9d3569b50839aa580dca3e9114ba.png",
  },
  {
    id: "emre",
    name: "엠레",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c51e2f698138861c0e3b6cfab3c3ca9d67fd709be175e7c397aa6f2649712a30.png",
  },
  {
    id: "freja",
    name: "프레야",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/811963897c352d9f178bec882d94bd0281074feee7c429c5145b6b8ea8ebe862.png",
  },
  {
    id: "genji",
    name: "겐지",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/156b12c20b1aea872c1eeb5bb37a7de1047b2ab30ecefd0663a8925badde1ea8.png",
  },
  {
    id: "hanzo",
    name: "한조",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/78b61c3e806fb26b02b8980fba62189155074fc15bd865b0883268e546030be5.png",
  },
  {
    id: "hazard",
    name: "해저드",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca48b96dbae6ea7f58ce8a5e73513c8c62b1685bdbf258020fb78bb21a008b5f.png",
  },
  {
    id: "illari",
    name: "일리아리",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce42d1455e03e79f321345fea84b27a8918b5db8bd7ab9b2ca9e569606ede9e4.png",
  },
  {
    id: "jetpack-cat",
    name: "제트팩 캣",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/03a184cd0de27091e0099ac22635ad9615a8f6997881a5c25cc5f2444764f729.png",
  },
  {
    id: "junker-queen",
    name: "정커퀸",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/06eeecb359f311f43a8f5121d4f9f3a93c565d70b30e94ef543c05596c9a39dc.png",
  },
  {
    id: "junkrat",
    name: "정크랫",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7660b9fc6f25f30858fdd8797fe0d52b2306f1e78fef99843f58a274e69af046.png",
  },
  {
    id: "juno",
    name: "주노",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c0167d251e57b0aa2b1e16c37d87f0e7c77263db9dd0503d77b5f2589bf3e4a0.png",
  },
  {
    id: "kiriko",
    name: "키리코",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/408603fe037e8576078eaac5eab2fb251489ced4003b11f5f522776d43d0b83d.png",
  },
  {
    id: "lifeweaver",
    name: "라이프위버",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3376515cebed0904012e67e956f6d1b9c12e03da642845eeaf787b7e4c7b339d.png",
  },
  {
    id: "lucio",
    name: "루시우",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/040bb13f5123ab93faad2f95627ba184608aef4b2469a4d3003859c7087df044.png",
  },
  {
    id: "mauga",
    name: "마우가",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/33d39bb439c08975197fc52eff4874716839711b5356c4fdc174f9c24bac1d0e.png",
  },
  {
    id: "mei",
    name: "메이",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a55ced3bd597fb08e0fde9dc007f8543ac616ba98ca3db9b0e4d871a8ae17f8.png",
  },
  {
    id: "mercy",
    name: "메르시",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3bfb8bd8ec827e53d870f1238ab73d8aa1f5dbfbcfaaf7f96ffcd35b5c6102ab.png",
  },
  {
    id: "mizuki",
    name: "미즈키",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a9733c2367e0cbd70b9316fd2e1e17028653ec56d0051ea6ff098531dc4f99fc.png",
  },
  {
    id: "moira",
    name: "모이라",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f48f8485056d5d00dad195859188d23e50f7126b8b08b5646f46ef1b42f5e1de.png",
  },
  {
    id: "orisa",
    name: "오리사",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a73958a28551f5254f3ab3f97c5f5f8d698a95c0b6a515d1a2b1caac169205a6.png",
  },
  {
    id: "pharah",
    name: "파라",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/60ac2d5de4a6d34644d8872233da402f1436c87f804bb11a21661bb30bf4a51f.png",
  },
  {
    id: "ramattra",
    name: "라마트라",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ddef7c9fb8ce4256e8508196b486f81950efe7aaa6cf27fec4668beb4cd15774.png",
  },
  {
    id: "reaper",
    name: "리퍼",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dc6ff07ac790c00dc95a40882449617bb6e0e38906b353a630cffe0c815270a9.png",
  },
  {
    id: "reinhardt",
    name: "라인하르트",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/551fbe070c16fdfcc17f7f1de63af22c53e7d2f1340fc2f3172441504527bc4e.png",
  },
  {
    id: "roadhog",
    name: "로드호그",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/89ddf07e4b619ed96169042e296a1b8856d102746f35add88284b44a9a5a6a03.png",
  },
  {
    id: "shion",
    name: "시온",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/070481cf871590a2b45a51d1335f9fe3d65eb4e4d361ecdd998b34fae2ed65d5.png",
  },
  {
    id: "sierra",
    name: "시에라",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4bfd3d8b95844231115cb5bf4db03344c71bc3e865189c52403b2dc51438e63a.png",
  },
  {
    id: "sigma",
    name: "시그마",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a4c032fa466c9a6d9c6974747635d7ef910027f91cd58892af0c899db565f92d.png",
  },
  {
    id: "sojourn",
    name: "소전",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/82b8c1b8765dcb9a0ba16e343c3516bf324c771ac81e9878473280216e70a889.png",
  },
  {
    id: "soldier-76",
    name: "솔저: 76",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c93b5f0a528c40473188f77cc2a267aee7d5b6cf5c9e104105d634b4388674e2.png",
  },
  {
    id: "sombra",
    name: "솜브라",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/47727b02a16e3bd7b2447d86ae1edf11587bc320b2aecb4f2f16a7ca4ad4e8a0.png",
  },
  {
    id: "symmetra",
    name: "시메트라",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ebec57e8bd68b3d4383edfeb34f8f52dd0b94a6467d594c2fee722e8a97c32aa.png",
  },
  {
    id: "torbjorn",
    name: "토르비욘",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce17118cedc29b0d2ac1e059666bed36b9531c85079b0b894bb402d12c917ba9.png",
  },
  {
    id: "tracer",
    name: "트레이서",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4504f6f15cb3feaa92ecd38e01dcf751cb5abdac2e0bb52d0555727e53277502.png",
  },
  {
    id: "vendetta",
    name: "벤데타",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cf8ffb52b6f315546d5e94e9d6defad5a2c570798776956de23f47536f9529da.png",
  },
  {
    id: "venture",
    name: "벤처",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dcab9123f5f55df22e54d4e797de43c71b917e0149dd059a7fd6136f48464cd0.png",
  },
  {
    id: "widowmaker",
    name: "위도우메이커",
    role: "damage",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e4702b45f196aaf51555cf57327322721f45458b17f5f0643ed008a88378259.png",
  },
  {
    id: "winston",
    name: "윈스턴",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/46a10db3aa908c590ddc4e7606376a88143d1f1306ecfbea043263040f9529a5.png",
  },
  {
    id: "wrecking-ball",
    name: "레킹볼",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ef1d58867136e0b26f928d896000b9dab216118f6e2f59e53f2e975e1e27afa.png",
  },
  {
    id: "wuyang",
    name: "우양",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4959500b495b35c0908be2abda56b53f2601b2c5cc39a1cfde8df1bffd38d66d.png",
  },
  {
    id: "zarya",
    name: "자리야",
    role: "tank",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9b6f63cc66ddf9d5e0862173c733cc0d2e574c5c89357798d91b93b2f95a7080.png",
  },
  {
    id: "zenyatta",
    name: "젠야타",
    role: "support",
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d1546b1541a8afc39353f9337a408d6275a141b0432b7e560ef61579996b0fc.png",
  },
];
const matchMaps = [
  { id: "aatlis", name: "아틀리스", mode: "플래시포인트", sided: false },
  { id: "antarctic-peninsula", name: "남극 반도", mode: "쟁탈", sided: false },
  { id: "blizzard-world", name: "블리자드 월드", mode: "혼합", sided: true },
  { id: "busan", name: "부산", mode: "쟁탈", sided: false },
  { id: "circuit-royal", name: "서킷 로얄", mode: "호위", sided: true },
  { id: "colosseo", name: "콜로세오", mode: "밀기", sided: false },
  { id: "dorado", name: "도라도", mode: "호위", sided: true },
  { id: "eichenwalde", name: "아이헨발데", mode: "혼합", sided: true },
  { id: "esperanca", name: "이스페란사", mode: "밀기", sided: false },
  { id: "grimsvotn", name: "그림스뵈튼", mode: "호위", sided: true },
  { id: "havana", name: "하바나", mode: "호위", sided: true },
  { id: "hollywood", name: "할리우드", mode: "혼합", sided: true },
  { id: "ilios", name: "일리오스", mode: "쟁탈", sided: false },
  { id: "junkertown", name: "쓰레기촌", mode: "호위", sided: true },
  { id: "lijiang-tower", name: "리장 타워", mode: "쟁탈", sided: false },
  { id: "kings-row", name: "왕의 길", mode: "혼합", sided: true },
  { id: "midtown", name: "미드타운", mode: "혼합", sided: true },
  { id: "nepal", name: "네팔", mode: "쟁탈", sided: false },
  { id: "neon-junction", name: "네온 교차로", mode: "혼합", sided: true },
  {
    id: "new-junk-city",
    name: "뉴 정크 시티",
    mode: "플래시포인트",
    sided: false,
  },
  {
    id: "new-queen-street",
    name: "뉴 퀸 스트리트",
    mode: "밀기",
    sided: false,
  },
  { id: "numbani", name: "눔바니", mode: "혼합", sided: true },
  { id: "oasis", name: "오아시스", mode: "쟁탈", sided: false },
  { id: "paraiso", name: "파라이수", mode: "혼합", sided: true },
  { id: "rialto", name: "리알토", mode: "호위", sided: true },
  { id: "route-66", name: "66번 국도", mode: "호위", sided: true },
  { id: "runasapi", name: "루나사피", mode: "밀기", sided: false },
  { id: "samoa", name: "사모아", mode: "쟁탈", sided: false },
  {
    id: "shambali-monastery",
    name: "샴발리 수도원",
    mode: "호위",
    sided: true,
  },
  { id: "suravasa", name: "수라바사", mode: "플래시포인트", sided: false },
  {
    id: "watchpoint-gibraltar",
    name: "감시 기지: 지브롤터",
    mode: "호위",
    sided: true,
  },
];
const matchSlots = [
  { role: "tank", label: "탱커" },
  { role: "damage", label: "딜러 1" },
  { role: "damage", label: "딜러 2" },
  { role: "support", label: "힐러 1" },
  { role: "support", label: "힐러 2" },
];
const matchStorageKey = "owsense-match-draft-v1";
let matchBackgroundPromise;
function emptyMatch() {
  return {
    map: "",
    side: "",
    mine: null,
    ally: ["", "", "", "", ""],
    enemy: ["", "", "", "", ""],
  };
}
function cleanMatch(raw) {
  const state = emptyMatch();
  if (!raw || typeof raw !== "object") return state;
  const map = matchMaps.find((m) => m.id === raw.map);
  state.map = map?.id || "";
  state.side =
    map?.sided && ["attack", "defense"].includes(raw.side) ? raw.side : "";
  for (const team of ["ally", "enemy"]) {
    const used = new Set();
    matchSlots.forEach((slot, i) => {
      const value = Array.isArray(raw[team]) ? raw[team][i] : "";
      if (
        matchHeroes.some((h) => h.id === value && h.role === slot.role) &&
        !used.has(value)
      ) {
        state[team][i] = value;
        used.add(value);
      }
    });
  }
  state.mine =
    Number.isInteger(raw.mine) &&
    raw.mine >= 0 &&
    raw.mine < 5 &&
    state.ally[raw.mine]
      ? raw.mine
      : null;
  return state;
}
function matchErrors(state) {
  const errors = [];
  for (const team of ["ally", "enemy"]) {
    const label = team === "ally" ? "우리 팀" : "상대 팀";
    if (
      state[team].some(
        (id, i) =>
          !matchHeroes.some(
            (h) => h.id === id && h.role === matchSlots[i].role,
          ),
      )
    )
      errors.push(`${label} 영웅 5명을 선택해주세요.`);
    const ids = state[team].filter(Boolean);
    if (new Set(ids).size !== ids.length)
      errors.push(`${label}에 같은 영웅을 두 번 선택할 수 없어요.`);
  }
  if (!Number.isInteger(state.mine) || !state.ally[state.mine])
    errors.push("우리 팀에서 내가 플레이할 영웅에 ‘나’를 표시해주세요.");
  const map = matchMaps.find((m) => m.id === state.map);
  if (map?.sided && !["attack", "defense"].includes(state.side))
    errors.push("우리 팀 기준으로 공격·수비를 선택해주세요.");
  return errors;
}
function matchPage() {
  let state;
  try {
    state = cleanMatch(
      JSON.parse(localStorage.getItem(matchStorageKey) || "null"),
    );
  } catch {
    state = emptyMatch();
  }
  const heroName = (id) =>
    matchHeroes.find((h) => h.id === id)?.name || "미선택";
  const options = (role) =>
    matchHeroes
      .filter((h) => h.role === role)
      .sort((a, b) => a.name.localeCompare(b.name, "ko"))
      .map((h) => `<option value="${h.id}">${esc(h.name)}</option>`)
      .join("");
  const teamHTML = (team) =>
    `<section class="match-team ${team}" aria-labelledby="${team}-title"><div class="match-team-heading"><div><span class="eyebrow">${team === "ally" ? "OUR TEAM" : "OPPONENTS"}</span><h2 id="${team}-title">${team === "ally" ? "우리 팀" : "상대 팀"}</h2></div><span class="match-team-count" id="${team}-count">0 / 5</span></div>${matchSlots.map((slot, i) => `<div class="match-slot"><label for="${team}-${i}" class="match-slot-label">${slot.label}</label><div class="match-hero-field"><span class="match-portrait" id="portrait-${team}-${i}" aria-hidden="true">${slot.role === "tank" ? "◆" : slot.role === "damage" ? "▥" : "+"}</span><select id="${team}-${i}" data-team="${team}" data-slot="${i}"><option value="">영웅 선택</option>${options(slot.role)}</select></div>${team === "ally" ? `<label class="match-me"><input type="radio" name="match-me" value="${i}" aria-label="내 영웅: ${slot.label}"><span>나</span></label>` : ""}</div>`).join("")}<p class="match-team-note">${team === "ally" ? "내가 플레이할 영웅 옆에 ‘나’를 표시하세요." : "우리 팀과 같은 영웅도 선택할 수 있어요."}</p></section>`;
  app.innerHTML = `<div class="page-title match-page-title"><div class="eyebrow">MATCH PLANNER / 운영과 복기 <span class="match-beta">BETA</span></div><h1>이번 판, 어떤 조합인가요?</h1><p class="lead">맵과 양 팀의 영웅을 골라 이번 판을 정리해보세요.</p><p class="match-beta-note">지금은 정보 입력 단계만 사용할 수 있어요. 조합별 운영 안내와 복기는 준비 중이에요.</p></div><form id="match-form" novalidate><section class="match-map-stage" aria-labelledby="match-map-title"><div class="match-map-content"><div><span class="eyebrow">01 / BATTLEGROUND</span><h2 id="match-map-title">이번 판의 맵은?</h2><p id="match-map-caption">맵은 나중에 선택해도 괜찮아요.</p></div><div class="match-map-controls"><label for="match-map">맵 <small>선택 사항</small></label><select id="match-map"><option value="">맵 선택 안 함</option>${[
    "혼합",
    "호위",
    "쟁탈",
    "밀기",
    "플래시포인트",
  ]
    .map(
      (mode) =>
        `<optgroup label="${mode}">${matchMaps
          .filter((m) => m.mode === mode)
          .sort((a, b) => a.name.localeCompare(b.name, "ko"))
          .map((m) => `<option value="${m.id}">${esc(m.name)}</option>`)
          .join("")}</optgroup>`,
    )
    .join(
      "",
    )}</select><fieldset id="match-side-wrap" hidden><legend>우리 팀은?</legend><div class="match-side-options"><label><input type="radio" name="match-side" value="attack"><span>공격</span></label><label><input type="radio" name="match-side" value="defense"><span>수비</span></label></div></fieldset><p id="match-no-side" class="match-no-side" hidden>이 모드는 공격·수비 구분이 없어요.</p></div></div></section><div class="match-lineup-title"><span class="eyebrow">02 / LINEUP</span><p>양 팀의 영웅을 선택하세요. 딜러·힐러 순서는 자유예요.</p></div><div class="match-arena"><div class="match-map-photo" id="match-map-photo" aria-hidden="true"></div><div class="match-teams">${teamHTML("ally")}<div class="match-versus"><span aria-hidden="true">VS</span><p id="match-arena-map">YOUR MATCH</p></div>${teamHTML("enemy")}</div></div><div id="match-errors" class="match-errors" role="alert"></div><div class="match-bottom"><div><p id="match-draft-status" role="status">입력 내용은 이 브라우저에 자동 저장돼요.</p><small>맵 선택은 생략할 수 있어요.</small></div><div class="actions"><button type="button" class="btn light" id="match-clear">입력 초기화</button><button type="submit" class="btn orange">입력 내용 확인 →</button></div></div></form><section id="match-summary" class="match-summary" hidden aria-labelledby="match-summary-title"></section><p class="match-image-credit">전장·영웅 이미지 © Blizzard Entertainment · 전장 이미지 제공: <a href="https://overfast-api.tekrop.fr/" target="_blank" rel="noopener noreferrer">OverFast API</a></p>`;
  const form = document.querySelector("#match-form");
  const summary = document.querySelector("#match-summary");
  const errorBox = document.querySelector("#match-errors");
  const mapInput = document.querySelector("#match-map");
  const writeDraft = () => {
    try {
      localStorage.setItem(matchStorageKey, JSON.stringify(state));
      document.querySelector("#match-draft-status").textContent =
        "입력 내용을 이 브라우저에 저장했어요.";
    } catch {
      document.querySelector("#match-draft-status").textContent =
        "브라우저에 저장하지 못했어요. 이 화면에서는 계속 입력할 수 있어요.";
    }
    summary.hidden = true;
    errorBox.textContent = "";
  };
  const syncTeams = () => {
    for (const team of ["ally", "enemy"]) {
      document.querySelector(`#${team}-count`).textContent =
        `${state[team].filter(Boolean).length} / 5`;
      state[team].forEach((id, i) => {
        const select = document.querySelector(`#${team}-${i}`);
        select.value = id;
        Array.from(select.options).forEach((option) => {
          option.disabled = Boolean(
            option.value &&
              option.value !== id &&
              state[team].includes(option.value),
          );
        });
        const portrait = document.querySelector(`#portrait-${team}-${i}`);
        const hero = matchHeroes.find((h) => h.id === id);
        if (portrait.dataset.hero === id) return;
        portrait.dataset.hero = id;
        portrait.textContent =
          matchSlots[i].role === "tank"
            ? "◆"
            : matchSlots[i].role === "damage"
              ? "▥"
              : "+";
        if (hero) {
          const img = document.createElement("img");
          img.src = hero.portrait;
          img.alt = "";
          img.loading = "lazy";
          img.onerror = () => img.remove();
          portrait.appendChild(img);
        }
      });
    }
    form.querySelectorAll('input[name="match-me"]').forEach((input) => {
      const i = Number(input.value);
      input.disabled = !state.ally[i];
      input.checked = state.mine === i;
      input.setAttribute(
        "aria-label",
        `내 영웅: ${state.ally[i] ? heroName(state.ally[i]) : matchSlots[i].label}`,
      );
      input.closest(".match-slot").classList.toggle("is-me", state.mine === i);
    });
  };
  const syncMap = () => {
    const map = matchMaps.find((m) => m.id === state.map);
    const photo = document.querySelector("#match-map-photo");
    photo.style.backgroundImage = "none";
    mapInput.value = state.map;
    document.querySelector("#match-side-wrap").hidden = !map?.sided;
    document.querySelector("#match-no-side").hidden = !map || map.sided;
    document.querySelector("#match-arena-map").textContent = map
      ? map.name
      : "YOUR MATCH";
    document.querySelector("#match-map-caption").textContent = map
      ? `${map.name} · ${map.mode}`
      : "맵은 나중에 선택해도 괜찮아요.";
    form
      .querySelectorAll('input[name="match-side"]')
      .forEach((input) => (input.checked = state.side === input.value));
    if (!map) return;
    if (!matchBackgroundPromise)
      matchBackgroundPromise = fetch("match-backgrounds.json")
        .then((r) => {
          if (!r.ok) throw new Error("Background unavailable");
          return r.json();
        })
        .catch(() => {
          matchBackgroundPromise = null;
          return {};
        });
    matchBackgroundPromise.then((backgrounds) => {
      if (state.map === map.id && photo.isConnected && backgrounds[map.id])
        photo.style.backgroundImage = `url("${backgrounds[map.id]}")`;
    });
  };
  form.querySelectorAll("[data-team]").forEach(
    (select) =>
      (select.onchange = () => {
        const team = select.dataset.team,
          i = Number(select.dataset.slot);
        if (
          select.value &&
          state[team].some((id, j) => j !== i && id === select.value)
        ) {
          select.value = state[team][i];
          return;
        }
        state[team][i] = select.value;
        if (team === "ally" && state.mine === i && !select.value)
          state.mine = null;
        syncTeams();
        writeDraft();
      }),
  );
  form.querySelectorAll('input[name="match-me"]').forEach(
    (input) =>
      (input.onchange = () => {
        state.mine = Number(input.value);
        syncTeams();
        writeDraft();
      }),
  );
  mapInput.onchange = () => {
    state.map = mapInput.value;
    state.side = "";
    syncMap();
    writeDraft();
  };
  form.querySelectorAll('input[name="match-side"]').forEach(
    (input) =>
      (input.onchange = () => {
        state.side = input.value;
        writeDraft();
      }),
  );
  document.querySelector("#match-clear").onclick = () => {
    state = emptyMatch();
    form.reset();
    syncMap();
    syncTeams();
    summary.hidden = true;
    errorBox.textContent = "";
    try {
      localStorage.removeItem(matchStorageKey);
    } catch {}
    document.querySelector("#match-draft-status").textContent =
      "입력 내용을 초기화했어요.";
    mapInput.focus();
  };
  form.onsubmit = (event) => {
    event.preventDefault();
    const errors = matchErrors(state);
    if (errors.length) {
      errorBox.innerHTML = `<p>조금만 더 입력해주세요.</p><ul>${errors.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>`;
      errorBox.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const map = matchMaps.find((m) => m.id === state.map);
    const side = state.side === "attack" ? "공격" : "수비";
    summary.innerHTML = `<span class="eyebrow">MATCH READY</span><h2 id="match-summary-title" tabindex="-1">이번 판 정보가 준비됐어요.</h2><p class="match-summary-map">${map ? `${esc(map.name)} · ${map.mode}${map.sided ? " · 우리 팀 " + side : ""}` : "맵 미선택"}</p><div class="match-summary-teams">${["ally", "enemy"].map((team) => `<div><h3>${team === "ally" ? "우리 팀" : "상대 팀"}</h3><ul>${state[team].map((id, i) => `<li><span>${matchSlots[i].label}</span><b>${esc(heroName(id))}${team === "ally" && state.mine === i ? " <em>나</em>" : ""}</b></li>`).join("")}</ul></div>`).join("")}</div><p class="match-beta-note">조합별 운영 안내와 상황 복기는 준비 중이에요. 입력한 조합은 이 브라우저에 남아 있어요.</p>`;
    summary.hidden = false;
    document
      .querySelector("#match-summary-title")
      .focus({ preventScroll: true });
    summary.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  syncTeams();
  syncMap();
}
