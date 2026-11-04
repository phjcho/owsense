# OWSENSE · 공동 출제 작업실

영웅과 스킬은 알지만 운영을 모르는 사람을 위한 오버워치 판단 연습.

## 친구와 AI가 시작할 곳
1. **[AI 요청문](docs/ai-prompts.md)**을 복사해 AI에게 전달한다.
2. **[가이드 본문](docs/guide.md)**과 **[출제 기준](docs/question-authoring.md)**을 읽고 문제 초안을 만든다.
3. 둘 중 다른 사람이 풀어보고, 조건·정답·해설을 검토한다.
4. 승인한 문제를 **[questions.json](questions.json)**에 추가하고 Pull Request로 제안한다.

AI가 비공개 저장소를 읽으려면 친구 계정도 저장소 접근 권한이 있어야 하고, 사용하는 AI에도 해당 저장소를 연결해야 한다. 연결하지 않는 경우 위 문서와 기존 문제를 파일로 전달한다.

## 파일 안내
- `AGENTS.md`: AI가 따라야 할 프로젝트 지침
- `docs/guide.md`: 확정된 초보자 가이드의 출제용 텍스트와 표(삽화 제외)
- `docs/question-authoring.md`: 코칭 원칙·예외·데이터 형식·검토 기준
- `docs/ai-prompts.md`: 출제 / 검토 / 승인 후 편입 요청문
- `templates/question.json`: 복사해서 작성하는 양식. 그대로 배포하지 않는다.
- `questions.json`: 상황 판단 문제 32개(기본 22개·응용 10개)
- `scripts/validate_questions.py`: 형식·id·정답 범위 검사(외부 패키지 불필요)

## 검사
```sh
python scripts/validate_questions.py
# 별도 초안 배열 파일 검사
python scripts/validate_questions.py drafts/my-questions.json
```
형식 검사 통과는 정답의 정확성을 보장하지 않는다. 가이드 근거와 코치의 내용 검토가 필요하다. PR에서는 문제 형식 검사, JavaScript 구문 검사와 화면 회귀 검사를 실행한다.

## 현재 진행 상태
전체 사이트 화면 코드, 가이드 데이터, 삽화 57개와 공동 출제 자료가 이 저장소에 있다. 사이트는 루트의 questions.json을 읽는다. GitHub 수정 사항은 현재 운영 사이트에 자동 배포되지 않는다. 기존 운영 사이트는 별도로 유지된다.

## 사이트 실행
외부 패키지나 빌드 없이 실행할 수 있다. 저장소를 내려받은 뒤 저장소 폴더에서 실행한다.
```sh
python -m http.server 8000
```
브라우저에서 http://localhost:8000 을 연다. index.html을 더블클릭하면 JSON을 불러오지 못할 수 있으니 HTTP 서버를 사용한다.

## 사이트 파일
- index.html: 페이지 틀과 메뉴
- style.css: 반응형 화면 스타일
- app.js: 가이드·판단 연습·학습 기록 기능
- guide.json: 사이트에서 읽는 7개 장의 본문과 삽화 연결
- assets/: 기존 사이트의 삽화 원본 57개
- questions.json: 사이트에서 읽는 문제·선택지·해설

운영 사이트의 내부 배포 설정과 인증 정보는 이 저장소에 포함하지 않았다. 제작자 표기는 제거된 상태를 유지한다. 자동 배포와 PR 미리보기는 아직 설정하지 않았다.
