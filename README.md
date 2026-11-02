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
- `questions.json`: 기존 상황 판단 문제 6개
- `scripts/validate_questions.py`: 형식·id·정답 범위 검사(외부 패키지 불필요)

## 검사
```sh
python scripts/validate_questions.py
# 별도 초안 배열 파일 검사
python scripts/validate_questions.py drafts/my-questions.json
```
형식 검사 통과는 정답의 정확성을 보장하지 않는다. 가이드 근거와 코치의 내용 검토가 필요하다. PR에서는 자동 형식 검사를 실행한다.

## 현재 진행 상태
공동 출제를 위한 자료와 문제 파일이 준비되어 있다. 전체 사이트 화면 코드와 삽화의 GitHub 이전은 아직 완료되지 않았다. GitHub 수정 사항은 현재 운영 사이트에 자동 배포되지 않는다. 이 문서 작업은 기존 사이트를 변경하지 않는다.
