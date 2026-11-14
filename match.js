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
const matchRoleIcons = {
  "tank": "<svg viewBox=\"0 0 48 48\" width=\"32\" height=\"32\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\" style=\"display:block\"><path d=\"M24 3C17 3 10 5 6 7v15c0 9 9 18 18 23 9-5 18-14 18-23V7c-4-2-11-4-18-4Z\"/></svg>",
  "damage": "<svg viewBox=\"0 0 48 48\" width=\"32\" height=\"32\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\" style=\"display:block\"><path d=\"M7 2C3 6 2 10 2 16v21h11V16c0-6-1-10-6-14Zm17 0c-4 4-5 8-5 14v21h11V16c0-6-1-10-6-14Zm17 0c-4 4-5 8-5 14v21h10V16c0-6-1-10-5-14Z\"/><path d=\"M2 41h11v6H2zm17 0h11v6H19zm17 0h10v6H36z\"/></svg>",
  "support": "<svg viewBox=\"0 0 48 48\" width=\"32\" height=\"32\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\" style=\"display:block\"><path d=\"M18 3h12a3 3 0 0 1 3 3v9h9a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-9v9a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3v-9H6a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3h9V6a3 3 0 0 1 3-3Z\"/></svg>"
};
const matchSlots = [
  { role: "tank", label: "탱커" },
  { role: "damage", label: "딜러 1" },
  { role: "damage", label: "딜러 2" },
  { role: "support", label: "힐러 1" },
  { role: "support", label: "힐러 2" },
];
// Guide-specific rules agreed with the guide author; not a live patch tier list.
const matchHealingTiers = [
  ["ana", "kiriko", "doctrine", "juno", "baptiste", "moira"],
  ["wuyang", "jetpack-cat", "illari", "mercy"],
  ["lifeweaver", "lucio", "sombra", "mizuki", "brigitte"],
  ["zenyatta"],
];
const matchSnipers = ["widowmaker", "hanzo"];
const matchMainDamage = ["sojourn", "soldier-76", "cassidy", "ashe", "freja", "sierra", "emre", "bastion", ...matchSnipers];
const matchInfiltrators = ["genji", "tracer", "venture", "echo", "shion", "anran", "vendetta", "reaper", "jetpack-cat"];
const matchTankThreats = ["mei", "symmetra", "vendetta"];
const matchTankFirepower = ["reaper", "bastion", "mauga"];
// [advantaged tank, disadvantaged tank]. Unlisted pairs have no assigned verdict.
const matchTankAdvantages = [
  ["winston", "zarya"], ["zarya", "dva"], ["dva", "winston"],
  ["orisa", "reinhardt"], ["orisa", "ramattra"], ["orisa", "doomfist"],
  ["mauga", "winston"], ["roadhog", "doomfist"],
  ["reinhardt", "zarya"], ["reinhardt", "sigma"], ["reinhardt", "domina"],
  ["ramattra", "reinhardt"], ["ramattra", "sigma"], ["ramattra", "domina"],
  ["orisa", "roadhog"], ["junker-queen", "winston"],
  ["orisa", "hazard"], ["ramattra", "dva"],
];
function matchHealingDuty(ids) {
  const tiers = ids.map(id => matchHealingTiers.findIndex(tier => tier.includes(id)));
  if (tiers.some(tier => tier < 0)) return { kind: "unknown", ids };
  if (tiers.every(tier => tier === 0)) {
    if (ids.includes("kiriko")) return { kind: "split", main: ids.find(id => id !== "kiriko"), side: "kiriko", tiers, kirikoException: true };
    return { kind: "doubleFlex", ids };
  }
  if (tiers[0] === tiers[1]) return { kind: "shared", ids, tiers };
  const lead = tiers[0] < tiers[1] ? 0 : 1;
  return { kind: "split", main: ids[lead], side: ids[1 - lead], tiers };
}
function matchAnalysis(state) {
  const me = matchHeroes.find(h => h.id === state.ally[state.mine]);
  const vulnerable = me?.role === "support" || matchMainDamage.includes(me?.id);
  const alerts = [];
  const add = (kind, pool) => {
    const ids = state.enemy.filter(id => pool.includes(id));
    if (ids.length) alerts.push({ kind, ids });
  };
  const supports = state.ally.slice(3, 5);
  if (supports.every(id => id && !matchHealingTiers[0].includes(id))) {
    alerts.push({ kind: "lowHealing", ids: supports });
  }
  const healing = matchHealingDuty(supports);
  const mainSupport = me?.role === "support" && (healing.kind === "split"
    ? healing.side === me.id
    : healing.kind === "shared");
  if (mainSupport) {
    const enemyRoles = teamDuties(state.enemy).roles;
    const infiltratingSupports = ["jetpack-cat", "kiriko", "sombra"].filter(id => enemyRoles.get(id) === "메인힐");
    add("protect", [...matchInfiltrators.filter(id => matchHeroes.some(hero => hero.id === id && hero.role === "damage")), ...infiltratingSupports]);
  }
  else if (vulnerable) add("infiltration", matchInfiltrators);
  add("sniper", matchSnipers);
  add("ranged", ["freja"]);
  if (me?.role === "tank") {
    add("firepower", matchTankFirepower);
    add("tank", matchTankThreats);
  }
  let targets = null;
  if (me?.role === "damage" && !matchMainDamage.includes(me.id)) {
    const enemyBackSupport = teamDuties(state.enemy).backSupport;
    targets = state.enemy.filter(id => matchMainDamage.includes(id) || matchHealingTiers[0].includes(id) || enemyBackSupport.includes(id));
  }
  const ally = state.ally[0], enemy = state.enemy[0];
  const tank = ally === enemy ? "mirror" :
    matchTankAdvantages.some(([a, b]) => a === ally && b === enemy) ? "advantage" :
    matchTankAdvantages.some(([a, b]) => a === enemy && b === ally) ? "disadvantage" : "unlisted";
  return { alerts, tank, healing, targets };
}
function teamDuties(team) {
  const damage = team.slice(1, 3);
  const supports = team.slice(3);
  const healing = matchHealingDuty(supports);
  const split = healing.kind === "split";
  const mainDamage = damage.filter(id => matchMainDamage.includes(id));
  const sideDamage = damage.filter(id => !matchMainDamage.includes(id));
  const backSupport = split ? [healing.main] : supports;
  const sideSupport = split ? [healing.side] : [];
  const backLabel = healing.kind === "shared" || healing.kind === "unknown" ? "힐러 분담"
    : split && !matchHealingTiers[0].includes(healing.main) ? "본대 힐" : "섭힐";
  const roles = new Map([[team[0], "탱커"]]);
  for (const [ids, label] of [[mainDamage, "메인딜"], [sideDamage, "섭딜"], [backSupport, backLabel], [sideSupport, "메인힐"]]) {
    for (const id of ids) roles.set(id, label);
  }
  if (supports.includes("mercy")) roles.set("mercy", "메인힐");
  return { tank: team[0], damage, mainDamage, sideDamage, backSupport, sideSupport, roles };
}

function planPortraits(ids, duties, side, priority = [], healingLead = []) {
  if (!ids.length) return "";
  return `<div class="plan-heroes ${side}"><span class="plan-team">${side === "ally" ? "우리" : "상대"}</span>${ids.map(id => {
    const hero = matchHeroes.find(h => h.id === id);
    const important = priority.includes(id);
    return `<span class="plan-chip${important ? " priority" : ""}${healingLead.includes(id) ? " healing-lead" : ""}"><img src="${hero.portrait}" alt="" onerror="this.hidden=true"><span><b>${esc(hero.name)}</b><small>${important ? "우선 · " : ""}${duties.roles.get(id)}</small></span>${healingLead.includes(id) ? '<em>본대 힐</em>' : ""}</span>`;
  }).join("")}</div>`;
}

function defaultFormation(team) {
  const duties = teamDuties(team);
  let back = duties.backSupport, supportSide = duties.sideSupport;
  const shared = ["shared", "unknown"].includes(matchHealingDuty(team.slice(3)).kind);
  if (shared) {
    const [first, second] = [...back].sort();
    back = [first];
    supportSide = [second];
  }
  const mercyCore = duties.mainDamage.length > 0 && team.includes("mercy");
  if (mercyCore) {
    back = [...new Set([...back, "mercy"])];
    supportSide = supportSide.filter(id => id !== "mercy");
  }
  return {
    duties, shared, mercyCore,
    core: [duties.tank, ...duties.mainDamage, ...back],
    side: [...duties.sideDamage, ...supportSide],
  };
}

function formationHTML(state) {
  const teams = ["ally", "enemy"].map(key => ({
    key, label: key === "ally" ? "아군" : "상대팀", ...defaultFormation(state[key]),
  }));
  const rows = teams.map(({ key, label, core, side, duties }) => {
    const cell = ids => `<td>${ids.length ? planPortraits(ids, duties, key) : '<span class="formation-empty">배정된 영웅 없음</span>'}</td>`;
    const direction = core.length > side.length ? "본대에 더 많은 인원" : "사이드에 더 많은 인원";
    return `<tr><th scope="row">${label}<small>본대 ${core.length} · 사이드 ${side.length}</small></th>${cell(core)}<td class="formation-balance" aria-label="${direction}"><span aria-hidden="true">${core.length > side.length ? "&gt;" : "&lt;"}</span><small>인원수</small></td>${cell(side)}</tr>`;
  }).join("");
  let comparison = "";
  if (teams.some(team => team.core.length !== 3)) {
    const focus = teams.map(({ label, core }) => label + (core.length > 3 ? "은 본대에 더 힘을 실었어요." :
      core.length < 3 ? "은 사이드에 더 힘을 실었어요." : "은 기본 3대2 배치예요.")).join(" ");
    comparison = `<div class="formation-read"><b>기본 3대2와 비교하면</b><p>${focus}</p><p>각 팀의 부등호에서 벌어진 쪽이 인원수가 더 많은 구역이에요. 실제 교전은 영웅 상성과 합류 타이밍에 따라 달라져요.</p></div>`;
  }
  const loneSupport = teams.some(team => team.side.length === 1 && team.duties.sideSupport.includes(team.side[0]));
  const loneNote = loneSupport ? "<p><strong>사이드로 표시된 영웅도 실제로는 본대와 함께 움직일 수 있어요.</strong> 이 표는 역할에 따른 기본 배치예요. 상대를 판단할 때는 실제로 어디에 있는지도 함께 확인하세요.</p>" : "";
  const kirikoTeams = teams.filter(team => matchHealingDuty(state[team.key].slice(3)).kirikoException);
  const kirikoNote = kirikoTeams.length ? "<p><strong>예외 · 키리코는 메인힐로도 사용할 수 있어요.</strong> " + kirikoTeams.map(team => team.label).join("·") + "의 키리코는 사이드 지원을 맡는 메인힐로 배치했어요.</p>" : "";
  const mercyTeams = teams.filter(team => team.mercyCore);
  const mercyNote = mercyTeams.length ? "<p><strong>메르시 · 메인딜 화력 강화</strong> " + mercyTeams.map(team => team.label).join("·") + "의 메르시는 메인딜의 화력을 강화하기 위해 본대에 배치했어요. 지원할 아군에 따라 사이드에서도 움직일 수 있어요.</p>" : "";
  const sharedNote = teams.some(team => team.shared && !team.mercyCore) ? "<p>‘힐러 분담’인 두 영웅은 한 명씩 나눈 예시예요. 서로 자리를 바꿔도 돼요.</p>" : "";
  return `<section class="match-advice-card formation" aria-labelledby="formation-title"><h3 id="formation-title">양 팀의 본대와 사이드</h3>
    <p class="formation-note"><strong>이 표는 한타 전 떠올려 볼 기본 배치예요.</strong> 실제로는 맵과 교전 상황에 따라 본대에 합류하거나 사이드로 빠질 수 있어요.</p>
    <div class="formation-table-scroll" role="region" aria-label="양 팀 배치 비교" tabindex="0"><table aria-labelledby="formation-title"><thead><tr><th scope="col">팀</th><th scope="col">본대</th><th scope="col" class="formation-balance" aria-label="팀 내 인원 비교"></th><th scope="col">사이드</th></tr></thead><tbody>${rows}</tbody></table></div>
    <div class="formation-read"><b>기본 배치 · 본대 3명 / 사이드 2명</b><p>본대는 탱커·메인딜·섭힐, 사이드는 섭딜·메인힐로 나눠요. 본대가 앞의 공간과 딜·힐을 유지하는 동안, 사이드는 우리 메인딜·섭힐을 보호하거나 상대 메인딜·섭힐을 압박해요.</p></div>
    ${comparison}${loneNote}${sharedNote}${kirikoNote}${mercyNote}</section>`;
}

function compositionNotesHTML(state) {
  const duties = teamDuties(state.ally);
  const healing = matchHealingDuty(state.ally.slice(3));
  const notes = [];
  if (duties.mainDamage.length === 2) {
    notes.push(["투메인딜 · 사이드 싸움을 의식하세요", duties.mainDamage,
      "본대의 화력은 늘지만 사이드에서 싸울 섭딜이 없어져요. 사이드로 들어오는 상대를 의식적으로 확인하고, 누가 견제하고 보호할지 나누세요."]);
  }
  if (duties.sideDamage.length === 2) {
    notes.push(["투섭딜 · 침투와 본대 압박을 함께 보세요", duties.sideDamage,
      "둘이 침투하면 상대 딜러·힐러를 더 강하게 흔들지만, 본대의 탱커 압박은 줄어들 수 있어요."
      + (duties.sideDamage.includes("reaper") ? " 리퍼는 본대에서 탱커를 압박하는 역할도 맡을 수 있어요." : "")]);
  }
  if (healing.kind === "doubleFlex" || healing.kirikoException) {
    notes.push(["투섭힐 · 한 명은 사이드와 보호를 챙기세요", state.ally.slice(3),
      healing.kirikoException
        ? "두 명 모두 탱커만 보면 사이드와 아군 보호가 비어요. 다만 키리코는 메인힐로도 사용할 수 있어요. 다른 힐러가 본대 힐을 맡고, 키리코는 사이드 지원의 메인힐로 사용해주세요. 딜러를 챙기고 공격과 스킬로 상대를 압박하며, 침투하는 적도 막아주세요."
        : "두 명 모두 탱커만 보면 사이드와 아군 보호가 비어요. 한 명이 본대 힐을 맡는 동안 다른 한 명은 메인힐 역할을 맡아 딜러를 챙기고, 공격과 스킬로 상대를 압박하면서 침투하는 적도 막아주세요. 표에서는 두 명 모두 본대로 표시하지만, 실제 역할은 상황에 맞춰 나누세요."]);
  }
  return notes.map(([title, ids, copy]) => {
    const kirikoVisual = healing.kirikoException && title.startsWith("투섭힐");
    const originalDuties = { ...duties, roles: new Map(duties.roles).set("kiriko", "섭힐") };
    const heroes = kirikoVisual
      ? `<div class="kiriko-duties"><div><b>본대 힐 담당</b>${planPortraits([healing.main], duties, "ally")}</div><div><b>사이드 지원 담당 · 키리코 예외</b><div class="kiriko-change"><div><small>기본 분류</small>${planPortraits([healing.side], originalDuties, "ally")}</div><span class="kiriko-arrow" aria-label="역할 전환">→</span><div><small>이 조합에서의 역할</small>${planPortraits([healing.side], duties, "ally")}</div></div></div></div>`
      : planPortraits(ids, duties, "ally");
    return `<article class="match-advice-card warning"><span class="eyebrow">우리 팀 조합의 주의점</span><h3>${title}</h3>${heroes}<p>${copy}</p>${kirikoVisual ? '<small><strong>예외 · 키리코는 메인힐로도 사용할 수 있어요.</strong></small>' : ""}</article>`;
  }).join("");
}


function enemyHealingHTML(state) {
  const enemySupports = state.enemy.slice(3);
  const enemyLow = enemySupports.every(id => !matchHealingTiers[0].includes(id));
  if (!enemyLow) return "";
  const allySupports = state.ally.slice(3);
  const allyLow = allySupports.every(id => !matchHealingTiers[0].includes(id));
  const title = allyLow ? "양 팀 모두 본대 힐이 부족해요" : "상대의 부족한 본대 힐을 공략하세요";
  const copy = allyLow
    ? "상대도 우리도 섭힐이 없는 조합이에요. 양 팀 모두 받은 피해를 회복하며 버티기 어려울 수 있어요. 엄폐물을 끼고 먼저 체력을 깎고, 체력이 빠진 상대에게 함께 공격을 집중하세요. 우리 체력이 먼저 빠지면 엄폐해서 회복한 뒤 다시 싸우세요."
    : "상대는 섭힐이 없어 본대의 피해를 회복하는 힘이 부족해요. 우리는 섭힐의 회복을 받으면서 교전을 걸고 압박을 이어가세요. 상대 탱커와 앞으로 나온 적의 체력을 꾸준히 깎고, 상대가 힐로 버티지 못하는 순간 함께 공격해 처치를 노리세요. 아군이 함께 싸울 수 있는 자리와 인원수를 갖추고 시작하세요.";
  const allyPortraits = planPortraits(allySupports, teamDuties(state.ally), "ally");
  return `<article class="match-advice-card"><span class="eyebrow">양 팀의 본대 회복력</span><h3>${title}</h3>${allyPortraits}${planPortraits(enemySupports, teamDuties(state.enemy), "enemy")}<p>${copy}</p></article>`;
}


function planAction(title, portraits, copy) {
  return `<div class="plan-action"><h4>${title}</h4>${portraits}<p>${copy}</p></div>`;
}

function fightPlanHTML(state) {
  const mode = matchMaps.find(map => map.id === state.map)?.mode;
  const objective = { "쟁탈": "거점", "플래시포인트": "거점", "호위": "화물", "밀기": "로봇", "혼합": "거점·화물" }[mode] || "목표 지점";
  const ally = teamDuties(state.ally), enemy = teamDuties(state.enemy);
  const me = state.ally[state.mine], role = ally.roles.get(me);
  const hero = matchHeroes.find(h => h.id === me);
  const ours = (ids, priority) => planPortraits(ids, ally, "ally", priority);
  const theirs = ids => planPortraits(ids, enemy, "enemy");
  const supports = state.ally.slice(3);
  const lowHealing = supports.every(id => !matchHealingTiers[0].includes(id));
  const switchCopy = state.mine >= 3
    ? "현재 힐러 조합은 본대의 회복이 부족해요. 둘 중 한 명은 섭힐(아나·키리코·독트린·주노·바티스트·모이라)로 변경해주세요. 섭힐이 탱커와 메인딜의 회복을 맡고, 남은 메인힐은 사이드 지원과 아군 보호를 맡아주세요."
    : "현재 힐러 조합은 본대의 회복이 부족하다는 점을 염두에 두세요. 우리 힐러 중 한 명이 섭힐(아나·키리코·독트린·주노·바티스트·모이라)로 변경하도록 요청해주세요. 변경이 어렵다면 엄폐물로 받는 피해를 줄이고, 아군이 충분히 회복할 시간을 확보하며 싸우세요.";
  const switchTitle = state.mine >= 3
    ? "힐러 한 명은 섭힐로 변경해주세요!"
    : "우리 팀의 본대 회복이 부족한 점을 염두에 두세요";
  const switchCard = lowHealing ? `<article class="match-advice-card warning plan-goal"><span class="eyebrow">우리 팀 힐러 조합</span><h3>${switchTitle}</h3>${ours(supports)}<p>${switchCopy}</p></article>` : "";
  const defense = state.side === "defense", attack = state.side === "attack";
  const core = [...ally.mainDamage, ...ally.backSupport];
  const backline = [...enemy.mainDamage, ...enemy.backSupport];
  const guards = [...enemy.sideDamage, ...enemy.sideSupport].filter(id => id !== "mercy" || !enemy.mainDamage.length);
  const enemyHighTargets = enemy.mainDamage.length ? [...enemy.mainDamage, ...state.enemy.filter(id => id === "mercy")] : enemy.damage;
  const enemyHigh = theirs(enemyHighTargets);
  const allyHigh = ours(ally.mainDamage.length ? ally.mainDamage : ally.damage);
  const deny = enemy.mainDamage.length ? "" : "상대는 투섭딜이에요. ";
  const highGroundNote = " 상황에 따라 고지대를 사용하지 않아도 괜찮아요. 내 사거리와 아군 지원에 맞는 위치에서 싸우세요.";
  let use = role === "메인딜" ? "아군이 확보한 고지대를 사용해 상대를 압박하세요." + highGroundNote
    : ally.mainDamage.length ? "확보한 고지대를 우리 메인딜이 활용할 수 있게 지원하세요." : "탱커와 섭딜이 고지대의 상대를 밀어내고, 상대가 다시 올라와 쏘지 못하게 해주세요. 고지대를 확보한 뒤에는 각자 공격하기 좋은 거리와 각도로 이동해 압박하세요.";
  let allyGoal = role === "메인딜" ? "고지대를 사용하세요!"
    : ally.mainDamage.length === 0 ? "고지대를 확보해 상대가 쓰지 못하게 하세요"
    : "이 아군이 편하게 공격할 공간을 만들어주세요";
  const enemyGoal = attack ? "상대를 고지대에서 밀어내세요" : "상대에게 고지대를 내주지 마세요";
  const enemyAdvice = attack ? `수비팀은 2층을 먼저 잡고 있을 수 있어요. 자리 잡은 상대를 밀어내고, ${objective}을 내려다보며 편하게 쏘지 못하게 하세요.`
    : "상대를 고지대에서 몰아내고, 다시 자리 잡지 못하게 계속 견제하세요.";
  if (defense) {
    if (role === "메인딜") {
      use = "교전 전에 2층을 먼저 잡고, 자리 우위를 살려 계속 공격하세요." + highGroundNote;
    } else {
      allyGoal = ally.mainDamage.length ? "우리 메인딜이 고지대에서 계속 공격하게 지켜주세요" : "먼저 잡은 고지대를 지켜주세요";
      use = ally.mainDamage.length
        ? "수비는 2층을 먼저 잡을 수 있어요. 우리 메인딜이 자리 잡으면 밀려나지 않게 보호해주세요."
        : "교전 전에 2층을 먼저 확보하고, 상대가 빼앗아 쓰지 못하게 지켜주세요.";
    }
  }
  const defenseEnemyCard = defense ? `<div class="plan-action"><h4>고지대를 빼앗기지 않게 막으세요</h4>
    <div class="protection-group"><h5>고지대를 지킬 때 먼저 경계할 상대</h5>${theirs([enemy.tank, ...enemy.sideDamage])}<p>${role === "메인딜" ? "나에게 접근하는 상대를 견제하고, 아군의 보호를 받으며 공격을 이어가세요." : ally.mainDamage.length ? "우리 메인딜에게 접근하는 상대를 견제해, 고지대에서 계속 공격할 수 있게 해주세요." : "고지대의 아군에게 접근하는 상대를 견제해, 확보한 공간을 지켜주세요."}</p></div>
    ${enemy.mainDamage.length ? `<div class="protection-group"><h5>고지대를 내주면 안 되는 상대</h5>${theirs(enemyHighTargets)}<p>${state.enemy.includes("mercy") ? "메인딜과 이를 강화하는 메르시가 고지대에서 편하게 싸우지 못하게 하세요." : "이 상대가 올라와 편하게 공격하지 못하게 하세요."}</p></div>` : ""}
  </div>` : "";
  const mercyEnemyNote = enemy.mainDamage.length && state.enemy.includes("mercy")
    ? " 메르시가 메인딜의 화력을 강화할 수 있어요." : "";
  const goal = planAction(allyGoal, allyHigh, use) +
    (defense ? defenseEnemyCard : planAction(enemyGoal, enemyHigh, deny + enemyAdvice + mercyEnemyNote));
  const tankPressureAction = planAction("상대 탱커를 압박해 우리 탱커를 도우세요", theirs([enemy.tank]),
        "상대 탱커가 우리 탱커와 맞붙으면 함께 공격하세요. 상대가 편하게 앞으로 나오지 못하게 밀어내고, 물러나면 우리 탱커가 공간을 잡도록 도와주세요.");
  let actions;
  if (role === "탱커") {
    actions = planAction("이 아군을 내 등 뒤에 두세요", ours(core), "코너를 돌기 전에 뒤를 보세요. 아군 딜러가 쏠 수 있고 힐러가 나를 볼 수 있는 곳에서 앞을 잡으세요.")
      + planAction(defense ? "고지대로 올라오는 길을 막으세요" : "함께 고지대로 가는 길을 여세요", ours(ally.sideDamage),
        defense ? "입구를 지키다가 상대가 물러나면 우리 딜러 앞에 다시 서세요." : "상대가 2층에 있으면 정면과 옆에서 함께 밀어내세요. 우리 뒷라인이 따라올 시간을 주세요.");
  } else if (role === "메인딜") {
    actions = planAction(defense ? "이 아군이 지키는 고지대에서 쏘세요" : "이 아군이 열어준 자리와 고지대를 사용하세요", ours([ally.tank, ...ally.sideDamage]), "앞에서 공간을 만들어준 동안 그 자리에서 화력을 내세요." + highGroundNote)
      + planAction("이 힐러와 함께 움직이세요", ours(ally.backSupport), "다음 자리로 옮길 때 힐러의 위치부터 보세요. 힐을 받을 수 있는 곳에서 다음 사선을 잡으세요.")
      + tankPressureAction;
  } else if (role === "섭딜") {
    const breach = planAction(guards.length ? "사이드를 막는 상대의 방역을 뚫으세요" : "비어 있는 사이드로 들어가세요", theirs(guards), "우리 탱커가 정면에서 붙을 때 사이드로 들어가세요. " + (guards.length ? "위 영웅들과 싸워 이겨 길을 열거나, 이들이 지키지 않는 길로 우회하세요. 방역을 통과하면 상대 메인딜·섭힐을 압박하세요." : "열린 길로 들어가 상대 메인딜·섭힐을 압박하세요."));
    const pressure = planAction("이 상대가 편하게 딜·힐하지 못하게 압박하세요", theirs(backline), "옆에서 공격해 상대의 시선을 끌어주세요. 상대가 우리 본대를 보다가 나를 보거나 생존기 등의 스킬을 쓰면, 우리 팀이 싸울 틈이 생겨요.");
    actions = pressure + (defense ? planAction("우리 팀의 사이드를 지키세요", ours(core) + theirs(guards), "올라오는 상대를 입구에서 막으세요. 우리 뒷라인이 안전해지면 상대 옆으로 돌아가세요.") : breach);
    if (["dva", "doomfist", "winston", "wrecking-ball"].includes(ally.tank)) {
      actions = planAction("우리 탱커와 포커싱을 맞추세요", ours([ally.tank]),
        "우리 탱커가 노리는 대상을 확인하고, 진입 전에 그 대상을 함께 공격할 수 있는 위치를 미리 잡으세요. 탱커가 진입하면 타이밍을 맞춰 같은 대상에게 공격을 집중하세요.") + actions;
    }
    if (["vendetta", "reaper", "symmetra", "mei"].includes(me)) {
      actions += tankPressureAction;
    }
  } else if (me === "mercy") {
    actions = planAction("이 딜러의 화력을 강화해주세요", ours(ally.mainDamage.length ? ally.mainDamage : ally.sideDamage),
      "안전하게 공격할 수 있는 딜러에게 붙어 화력을 강화하고, 체력이 빠지면 회복해주세요. 지금 공격 기회를 잡은 아군에 맞춰 지원 대상을 바꿔주세요.")
      + planAction("다른 힐러도 보호해주세요", ours(state.ally.slice(3).filter(id => id !== me)),
        "다른 힐러가 물리면 회복을 도와주세요. 엄폐물을 끼고 지원하며, 위험할 때 이동할 아군 위치도 확인하세요.");
  } else if (role === "메인힐") {
    const help = ally.sideDamage.length ? planAction("우리 섭딜이 방역을 뚫도록 도우세요", ours(ally.sideDamage) + theirs(guards), "섭딜이 사이드에서 싸울 때 힐과 화력을 보태세요. 길이 열리면 깊은 침투는 섭딜에게 맡기세요.") : "";
    const protect = `<div class="plan-action"><h4>우리 딜과 힐이 끊기지 않게 지켜주세요</h4>
      <div class="protection-group"><h5>지킬 아군</h5>${ours(core)}<p>이 아군에게 바로 힐과 보호 스킬을 줄 수 있는 거리를 유지하세요.</p></div>
      ${guards.length ? `<div class="protection-group"><h5>막을 상대</h5>${theirs(guards)}<p>이 상대가 들어오는 사이드를 먼저 막으세요. 이미 붙었다면 물린 아군부터 보호하세요.</p></div>` : ""}
    </div>`;
    actions = defense ? protect + help : help + protect;
  } else {
    const priority = [ally.tank, ...ally.mainDamage];
    actions = planAction(ally.mainDamage.length ? "모두 살리되, 탱커와 메인딜을 먼저 보세요" : "아군 모두를 보면서 탱커의 체력을 먼저 챙기세요", ours([...priority, ...state.ally.filter(id => id !== me && !priority.includes(id))], priority),
      "내가 안전한 엄폐물에서 탱커의 진입과 딜러의 자리를 함께 보세요. 둘이 버티면 사이드에서 싸우는 아군도 챙기세요.")
      + (guards.length ? planAction("뒤와 옆에서 들어올 상대를 확인하세요", theirs(guards), "이 영웅들이 정면에서 사라지면 내 사이드를 보세요. 가까이 들어오면 아군 쪽으로 붙으세요.") : "")
      + planAction("앞에서는 이 상대의 사선을 피하세요", theirs([enemy.tank, ...enemy.mainDamage]), "상대 탱커가 닿거나 딜러에게 몸이 보이는 곳에서는 한 걸음 물러나 엄폐하고 힐하세요.");
  }
  return `<section class="match-analysis fight-plan" aria-labelledby="my-plan-heading">
    <div class="match-analysis-heading"><span class="eyebrow">04</span><h2 id="my-plan-heading" tabindex="-1">내가 해야 할 일!</h2></div>
    ${switchCard}
    <article class="match-advice-card plan-goal"><div class="plan-heading">${state.side ? `<span class="plan-side">${matchSideBadge(state.side)}</span>` : ""}<h3>${attack ? "우리 팀은 공격이에요" : defense ? "우리 팀은 수비예요" : `상대보다 먼저 ${objective}이 보이는 2층을 장악하세요`}</h3></div><div class="plan-actions">${goal}</div></article>
    <article class="match-advice-card personal-plan"><div class="plan-identity"><img src="${hero.portrait}" alt="" onerror="this.hidden=true"><div><span class="eyebrow">내 역할 · ${role}</span><h3>나 · ${esc(hero.name)}</h3></div></div><div class="plan-actions">${actions}</div></article>
  </section>`;
}

function matchAnalysisHTML(state) {
  const result = matchAnalysis(state);
  const name = id => matchHeroes.find(h => h.id === id)?.name || id;
  const duties = { ally: teamDuties(state.ally), enemy: teamDuties(state.enemy) };
  const portraits = (ids, side, highlighted = []) => planPortraits(ids, duties[side], side, [], highlighted);
  const protectTargets = state.ally.filter((id, slot) =>
    (slot >= 3 && slot !== state.mine) || matchMainDamage.includes(id));
  const alertCopy = {
    protect: ["침투하는 상대 영웅으로부터 우리 팀을 지켜주세요!", `우리 팀 ${protectTargets.map(id => esc(name(id))).join("·")} 쪽으로 상대가 들어오는지 살펴보세요. 상대를 미리 견제해서 아군에게 붙지 못하게 막아주세요. 그래도 아군이 물리면 바로 힐이나 보호 스킬을 줄 수 있는 자리를 잡으세요.`],
    lowHealing: ["힐이 부족해요!", [3, 4].includes(state.mine)
      ? "힐러 조합 변경을 추천해요. 두 힐러 중 한 명이 아나·키리코·독트린·주노·바티스트·모이라 중 하나를 맡으면 본대 힐을 보강할 수 있어요."
      : "교전이 길어지면 아군 힐이 들어오는 피해를 따라가기 어려워요. 체력이 빠지면 엄폐물 뒤에서 회복한 뒤 다시 싸우세요."],
    infiltration: ["침투하는 상대를 조심하세요!", "나를 노리고 옆이나 뒤로 들어올 수 있어요. 위치를 확인하고, 아군의 보호를 받을 수 있는 거리를 유지하세요."],
    sniper: ["상대 팀에 저격수가 있어요!", "저격수의 위치를 주시하세요. 엄폐물 밖으로 나가기 전에 그 자리에서 내가 보일지 먼저 확인하세요."],
    ranged: ["상대 팀에 원거리 위협이 있어요!", "프레야가 어느 각에서 쏘는지 확인하고, 열린 곳을 건널 때는 엄폐물을 끼고 이동하세요."],
    firepower: ["탱커도 순식간에 녹을 수 있어요!", "이 상대의 공격을 정면에서 계속 맞으면 체력이 순식간에 빠져요. 엄폐물 가까이에서 싸우고, 화력이 나에게 쏠리면 잠깐 몸을 숨기세요."],
    tank: ["가까이 붙는 딜러를 조심하세요!", "위 영웅들은 탱커를 근거리에서 압박해요. 특히 뚜벅이 탱커는 더 주의하고, 아군 지원과 빠질 길을 확인하세요."],
  };
  const alerts = result.alerts.map(({kind, ids}) => `<article class="match-advice-card warning"><span class="eyebrow">${(["ranged", "sniper", "lowHealing"].includes(kind)) ? "우리 팀 모두 주의" : "내가 주의할 상대"}</span><h3>${alertCopy[kind][0]}</h3>${portraits(ids, kind === "lowHealing" ? "ally" : "enemy")}<p>${alertCopy[kind][1]}</p></article>`).join("");
  const myHero = state.ally[state.mine];
  const flexiblePressure = ["reaper", "vendetta", "symmetra"].includes(myHero);
  const heroAdvice = {
    pharah: "공중에서 상대 탱커 뒤쪽을 노려보세요. 뒤따르던 딜러·힐러가 엄폐하면 상대 탱커도 혼자 계속 밀고 들어오기 어려워요.",
    junkrat: "상대 탱커가 지나올 길에 미리 화력을 깔아주세요. 우리 탱커와 맞붙기 전부터 체력을 깎아두면 정면 싸움을 도울 수 있어요.",
    torbjorn: "상대 탱커가 지나올 길에 미리 화력을 깔아주세요. 우리 탱커와 맞붙기 전부터 체력을 깎아두면 정면 싸움을 도울 수 있어요.",
    mei: "상대 탱커가 앞으로 나오면 등 뒤를 빙벽으로 가를 각을 보세요. 상대 힐이 끊기는 순간 우리 탱커와 함께 노릴 수 있어요.",
  };
  const subDamageAdvice = flexiblePressure
    ? "상대 탱커를 압박하며 킬각을 보거나, 상대 메인딜·섭힐에게 파고들 기회를 노리세요."
    : heroAdvice[myHero] || "상대 탱커가 앞으로 나올 때 뒤따르는 딜러·힐러를 살펴보세요. 들어갈 틈이 보이면 그쪽을 압박해 우리 탱커에게 쏠리는 화력을 나눠주세요.";
  let targetCard = "";
  if (result.targets) {
    const backline = result.targets.length ? result.targets : state.enemy.slice(3, 5);
    const tankPressure = flexiblePressure || ["mei", "junkrat", "torbjorn"].includes(myHero);
    const ids = tankPressure ? [state.enemy[0], ...backline] : backline;
    targetCard = `<article class="match-advice-card"><span class="eyebrow">내 운영</span><h3>이번 한타에서 누구를 압박할까요?</h3>${portraits(ids, "enemy")}<p>${result.tank === "disadvantage" ? "위 영웅들의 위치를 확인하고, 아래 탱커 상성 안내에 맞춰 압박할 기회를 살펴보세요." : subDamageAdvice}</p></article>`;
  }
  const guards = [...duties.enemy.sideDamage, ...duties.enemy.sideSupport]
    .filter(id => id !== "mercy" || !duties.enemy.mainDamage.length);
  const guardCard = result.targets && guards.length
    ? `<article class="match-advice-card"><span class="eyebrow">상대의 방역</span><h3>사이드에서 이 상대와 마주칠 수 있어요</h3>${portraits(guards, "enemy")}<p>상대가 사이드를 지키고 있어 침투가 막힐 수 있어요.</p></article>`
    : "";
  const h = result.healing;
  let healing = "<b>자리와 시야에 따라 힐을 나누세요.</b><p>한 명이 탱커를 돌보는 동안 다른 한 명은 메인딜과 사이드에 있는 아군을 살펴보세요.</p>";
  if (h.kind === "doubleFlex") {
    healing = "<b>투섭힐 조합이에요.</b><p>두 힐러가 탱커만 보면 줄 수 있는 힐이 남아서 각자 궁이 늦게 찰 수 있어요. 한 명이 탱커를 보고 있으면 다른 한 명은 메인힐 역할을 맡아 딜러를 챙기고, 공격과 스킬로 상대를 압박하세요. 탱커가 코너를 돌아가면 시야가 닿는 쪽이 이어받고, 탱커가 위험할 땐 둘이 같이 살려주세요.</p>";
  } else if (h.kind === "split") {
    healing = `<b>${esc(name(h.main))}가 본대 힐을 맡아요.</b><p>${esc(name(h.main))}는 탱커와 메인딜을 중심으로 돌보고, ${esc(name(h.side))}는 사이드 싸움을 돕다가 본대 힐러가 물리면 지켜주세요.</p>`;
  }
  if (h.kind === "split" && h.side === "mercy") {
    healing = `<b>${esc(name(h.main))}가 본대 힐을 맡아요.</b><p>${esc(name(h.main))}는 탱커와 메인딜의 회복을 맡고, 메르시는 딜러의 화력을 강화하며 필요한 회복을 보태주세요.</p>`;
  }
  if (h.kirikoException) healing += "<p><strong>예외 · 키리코는 메인힐로도 사용할 수 있어요.</strong> 키리코는 사이드의 딜러를 지원하고, 공격과 스킬로 상대를 압박하며 아군을 보호해주세요.</p>";
  const tankTitles = { advantage: "우리 탱커가 상성에서 유리해요", disadvantage: "우리 탱커가 상성에서 불리해요", mirror: "같은 탱커끼리의 싸움이에요", unlisted: "탱커만 보면 어느 쪽이 유리한지 뚜렷하지 않아요" };
  function disadvantageAdvice() {
    if (state.mine === 0) return "생존하며 아군 힐러의 궁극기를 먼저 채우고, 궁으로 승부를 보세요. 그래도 풀리지 않으면 양 팀의 전체 조합을 보고 탱커 교체를 검토하세요.";
    if (state.mine === 1 || state.mine === 2) {
      if (matchMainDamage.includes(myHero)) return "상대 탱커가 앞으로 나올 때 화력을 집중해 우리 탱커가 밀리는 걸 막아주세요. 상대 딜러나 힐러가 엄폐 밖으로 나오면 그 기회도 노리세요.";
      return "우리 탱커가 정면 싸움에서 먼저 밀릴 수 있어요. " + subDamageAdvice;
    }
    if (h.kind === "doubleFlex") return "다른 힐러가 탱커를 보고 있으면 딜러를 챙기고, 탱커가 위험해질 때 함께 살려주세요.";
    if (h.main === myHero) return "우리 탱커가 정면 싸움에서 먼저 밀릴 수 있어요. 평소보다 힐이 더 많이 필요할 수 있으니, 교전 중에는 탱커의 체력을 더 자주 살펴보세요.";
    return "다른 힐러가 탱커를 돌보는 동안 옆과 뒤를 봐주세요. 상대의 침투를 막아주면 우리 탱커도 계속 힐을 받을 수 있어요.";
  }
  let tankAdvice = result.tank === "disadvantage" ? disadvantageAdvice() : result.tank === "unlisted" ? "어느 팀 딜러가 고지대를 잡았는지, 탱커가 앞으로 나가도 아군 힐이 닿는지 확인하세요." : result.tank === "mirror" ? "같은 영웅이어도 지원, 자리와 스킬 사용에 따라 싸움이 달라져요." : "상성의 이점을 살리되, 상대 딜러·힐러와 아군 지원을 함께 확인하세요.";
  if (state.ally[0] === "winston" && state.enemy[0] === "zarya") tankAdvice += " 윈스턴은 자리야를 지나쳐 뒷라인을 물 수 있다는 이점이에요. 자리야와 정면에서 계속 싸우라는 뜻은 아니에요.";
  if (state.ally[0] === "dva" && state.enemy[0] === "winston") tankAdvice += " 윈스턴이 아군에게 뛰면 매트릭스로 뒤따라오는 화력을 막고, 윈스턴의 방벽을 깨서 밀어내세요.";
  return `<div class="match-analysis"><div class="match-analysis-heading"><span class="eyebrow">03 / GAME PLAN</span><h2>이번 판단의 근거</h2></div>${formationHTML(state)}<div class="match-advice-grid">${compositionNotesHTML(state)}${enemyHealingHTML(state)}${targetCard}${guardCard}${alerts}<article class="match-advice-card"><span class="eyebrow">탱커 상성</span><h3>${tankTitles[result.tank]}</h3><div class="match-tank-duel"><div><small>우리 탱커</small>${portraits([state.ally[0]], "ally")}</div><b>VS</b><div><small>상대 탱커</small>${portraits([state.enemy[0]], "enemy")}</div></div><p>${tankAdvice}</p><small>탱커 둘만 비교한 결과예요. 이 결과만으로 영웅 교체를 권하지 않아요.</small></article>${[3, 4].includes(state.mine) ? `<article class="match-advice-card"><span class="eyebrow">우리 팀 힐러 분담</span><h3>누가 본대를 돌볼까요?</h3>${portraits(state.ally.slice(3, 5), "ally", h.kind === "split" ? [h.main] : [])}${healing}</article>` : ""}</div></div>`;
}
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
// Vector renditions of the attack / defense marks in the supplied game screenshots.
const matchSideIcons = {
  attack: `<svg class="match-side-icon attack" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="currentColor"><path d="M3 2l5 2 10 12-2 2L5 6zM14 16l2-2 5 5-2 2zM13 18l5-5 1.5 1.5-5 5z"/><path d="M21 2l-5 2L6 16l2 2L19 6zM10 16l-2-2-5 5 2 2zM11 18l-5-5-1.5 1.5 5 5z"/></g></svg>`,
  defense: `<svg class="match-side-icon defense" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M3 2h18v9c0 5.2-3.5 8.6-9 11C6.5 19.6 3 16.2 3 11z"/><path fill="#102130" d="M7 6h2v2h2V5h2v3h2V6h2v5h-3v5l3 2H7l3-2v-5H7z"/></svg>`,
};
function matchSideBadge(side) {
  return `${matchSideIcons[side]}${side === "attack" ? "공격" : "수비"}`;
}

function randomMatch() {
  const pick = items => items[Math.floor(Math.random() * items.length)];
  const map = pick(matchMaps);
  const state = emptyMatch();
  state.map = map.id;
  state.side = map.sided ? pick(["attack", "defense"]) : "";
  for (const team of ["ally", "enemy"]) {
    const used = new Set();
    state[team] = matchSlots.map(slot => {
      const hero = pick(matchHeroes.filter(hero => hero.role === slot.role && !used.has(hero.id)));
      used.add(hero.id);
      return hero.id;
    });
  }
  return state;
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
    `<section class="match-team ${team}" aria-labelledby="${team}-title"><div class="match-team-heading"><div><span class="eyebrow">${team === "ally" ? "OUR TEAM" : "OPPONENTS"}</span><h2 id="${team}-title">${team === "ally" ? "우리 팀" : "상대 팀"}<span id="${team}-side" class="match-side-badge" hidden></span></h2></div><span class="match-team-count" id="${team}-count">0 / 5</span></div>${matchSlots.map((slot, i) => `<div class="match-slot"><label for="${team}-${i}" class="match-slot-label">${slot.label}</label><div class="match-hero-field"><span class="match-portrait" id="portrait-${team}-${i}" aria-hidden="true">${matchRoleIcons[slot.role]}</span><select id="${team}-${i}" data-team="${team}" data-slot="${i}"><option value="">영웅 선택</option>${options(slot.role)}</select></div>${team === "ally" ? `<label class="match-me"><input type="radio" name="match-me" value="${i}" aria-label="내 영웅: ${slot.label}"><span>나</span></label>` : ""}</div>`).join("")}<p class="match-team-note">${team === "ally" ? "내가 플레이할 영웅 옆에 ‘나’를 표시하세요." : "우리 팀과 같은 영웅도 선택할 수 있어요."}</p></section>`;
  app.innerHTML = `<div class="page-title match-page-title"><div class="eyebrow">MATCH PLANNER / 운영과 복기 <span class="match-beta">BETA</span></div><h1>이번 판, 어떤 조합인가요?</h1><p class="lead">맵과 양 팀의 영웅을 골라 이번 판을 정리해보세요.</p><p class="match-beta-note">‘나’를 표시하면 이번 한타에 누구와 어디서 무엇을 할지 확인할 수 있어요. 상황 복기는 준비 중이에요.</p><div class="actions match-demo-action"><button type="button" class="btn orange" id="match-random">맵·조합 랜덤으로 채우기 ↻</button></div></div><form id="match-form" novalidate><section class="match-map-stage" aria-labelledby="match-map-title"><div class="match-map-content"><div><span class="eyebrow">01 / BATTLEGROUND</span><h2 id="match-map-title">이번 판의 맵은?</h2><p id="match-map-caption">맵은 나중에 선택해도 괜찮아요.</p></div><div class="match-map-controls"><label for="match-map">맵 <small>선택 사항</small></label><select id="match-map"><option value="">맵 선택 안 함</option>${[
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
    )}</select><fieldset id="match-side-wrap" hidden><legend>우리 팀은?</legend><div class="match-side-options"><label><input type="radio" name="match-side" value="attack"><span>${matchSideBadge("attack")}</span></label><label><input type="radio" name="match-side" value="defense"><span>${matchSideBadge("defense")}</span></label></div></fieldset><p id="match-no-side" class="match-no-side" hidden>이 모드는 공격·수비 구분이 없어요.</p></div></div></section><div class="match-lineup-title"><span class="eyebrow">02 / LINEUP</span><p>양 팀의 영웅을 선택하세요. 딜러·힐러 순서는 자유예요.</p></div><div class="match-arena"><div class="match-map-photo" id="match-map-photo" aria-hidden="true"></div><div class="match-teams">${teamHTML("ally")}<div class="match-versus"><span aria-hidden="true">VS</span><p id="match-arena-map">YOUR MATCH</p></div>${teamHTML("enemy")}</div></div><div id="match-errors" class="match-errors" role="alert"></div><div class="match-bottom"><div><p id="match-draft-status" role="status">입력 내용은 이 브라우저에 자동 저장돼요.</p><small>맵 선택은 생략할 수 있어요.</small></div><div class="actions"><button type="button" class="btn light" id="match-clear">입력 초기화</button><button type="submit" class="btn orange">운영 안내 보기 →</button></div></div></form><section id="match-summary" class="match-summary" hidden aria-labelledby="match-summary-title"></section><p class="match-image-credit">전장·영웅 이미지 © Blizzard Entertainment · 전장 이미지 제공: <a href="https://overfast-api.tekrop.fr/" target="_blank" rel="noopener noreferrer">OverFast API</a></p>`;
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
        portrait.innerHTML = matchRoleIcons[matchSlots[i].role];
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
  const syncSides = () => {
    const active = matchMaps.some((map) => map.id === state.map && map.sided) &&
      ["attack", "defense"].includes(state.side);
    for (const team of ["ally", "enemy"]) {
      const badge = document.querySelector(`#${team}-side`);
      badge.hidden = !active;
      badge.innerHTML = active ? matchSideBadge(team === "ally" ? state.side :
        state.side === "attack" ? "defense" : "attack") : "";
    }
  };
  const syncMap = () => {
    syncSides();
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
        syncSides();
        writeDraft();
      }),
  );
  document.querySelector("#match-random").onclick = () => {
    state = randomMatch();
    syncTeams();
    syncMap();
    writeDraft();
    document.querySelector("#match-draft-status").textContent =
      "맵과 양 팀 조합을 랜덤으로 채웠어요. 우리 팀에서 ‘나’를 고르고 운영 안내를 확인하세요.";
    document.querySelector("#ally-title").scrollIntoView({ behavior: "smooth", block: "center" });
  };
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
    summary.innerHTML = `<span class="eyebrow">MATCH READY</span><h2 id="match-summary-title" tabindex="-1">이번 판 정보가 준비됐어요.</h2><p class="match-summary-map">${map ? `${esc(map.name)} · ${map.mode}${map.sided ? " · 우리 팀 " + side : ""}` : "맵 미선택"}</p><div class="match-summary-teams">${["ally", "enemy"].map((team) => `<div><h3>${team === "ally" ? "우리 팀" : "상대 팀"}</h3><ul>${state[team].map((id, i) => `<li><span>${matchSlots[i].label}</span><b>${esc(heroName(id))}${team === "ally" && state.mine === i ? " <em>나</em>" : ""}</b></li>`).join("")}</ul></div>`).join("")}</div>${matchAnalysisHTML(state)}${fightPlanHTML(state)}`;
    summary.hidden = false;
    document
      .querySelector("#match-summary-title")
      .focus({ preventScroll: true });
    summary.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  syncTeams();
  syncMap();
}
