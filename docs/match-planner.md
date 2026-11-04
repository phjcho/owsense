# 운영과 복기 (BETA)

현재 범위는 `#review`의 이번 판 정보 입력과 확인이다. 조합 분석·운영 추천·반복 상황 복기는 아직 구현하지 않았다.

## 파일과 데이터

- `match.js`: 영웅 54명, 전장 31개, 입력 상태 정규화/검증, 카드/요약 UI. `app.js`의 라우터에서 `matchPage()`를 호출한다.
- `match-backgrounds.json`: 압축 WebP를 data URL로 보관한다. 맵 선택 시 한 번만 가져오며, 이미지 조회 서비스의 실행 중 API에 의존하지 않는다.
- `index.html`: `match.js`를 `app.js`보다 먼저 로드한다. 두 스크립트와 CSS 버전 문자열을 함께 갱신한다.
- 초상화는 영웅 데이터의 이미지 URL을 사용한다. 로딩 실패 시 역할 표시를 유지한다.

영웅 데이터에는 일반 탱/딜/힐만 사용한다. 가이드의 메인딜/섭딜/메인힐/섭힐 분류나 조합 상성 점수를 자동 추론하지 않는다. 밸런스나 운영 추천은 별도 검토가 필요하다.

## 입력 규칙

양 팀 각각 탱커 1명, 딜러 2명, 지원 2명. 같은 팀 중복 영웅은 금지하고 팀 간 미러는 허용한다. 우리 팀 카드 하나에 '나'를 표시하며, 별도 내 영웅 입력은 없다. 딜러/힐러 1·2는 순서 표기이며 메인/서브 분류가 아니다.

맵은 선택 사항이다. 혼합·호위 맵을 선택한 경우에만 우리 팀 기준 공격/수비를 필수 입력한다. 맵 변경 시 진영을 초기화하고 쟁탈·밀기·플래시포인트에서는 숨긴다.

`owsense-match-draft-v1`이라는 별도 localStorage 키로 현재 입력 하나만 자동 저장한다. 기존 `owsense-progress` 학습 기록에는 영향을 주지 않는다. 복원 시 존재하지 않는 영웅, 잘못된 역할 슬롯, 중복 선택, 잘못된 맵/진영/내 슬롯을 정리한다. 브라우저 저장을 사용할 수 없어도 현재 화면 입력·확인은 가능하다. 서버 전송이나 여러 기기 간 동기화는 없다.

## 데이터 출처 (2026-11-04 확인)

- 공식 영웅 목록: https://overwatch.blizzard.com/ko-kr/heroes/
- 전장 및 초상화 URL 목록: https://overfast-api.tekrop.fr/ (이름/역할은 공식 목록 및 기존 프로젝트 분류와 대조)
- 배경 29개: OverFast API map screenshot 자료
- 네온 교차로 배경: https://ow.blizzard.cn/news/24271881/index.html
- 그림스뵈튼 배경: https://news.blizzard.com/en-us/article/24294376/sink-your-teeth-into-overwatch-s-blizzcon-reveals
- 그림스뵈튼 명칭/호위 확인: https://overwatch.blizzard.com/ko-kr/news/patch-notes/live/2026/10/

모든 게임 이미지의 권리는 Blizzard Entertainment에 있다. 전장 목록은 입력을 위한 목록이며, 특정 시즌 경쟁전 로테이션을 보장하는 목록이 아니다.

## 검증

`node scripts/test_match.cjs`로 입력 검증, 선택적 맵, 공수 필수 조건, 중복/미러, 깨진 초안 복원 및 모든 전장의 배경 유무를 확인한다. 로컬 Sites checkout은 `node <test path> <checkout>/dist`로 실행한다.

브라우저에서 10명 선택·내 영웅 지정·공수 선택·배경 교체·입력 요약·새로고침 복원·중복 옵션 비활성화를 확인했다. 390px iframe에서도 가로 넘침 없이 단일 열로 표시된다.
