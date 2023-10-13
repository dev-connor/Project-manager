### 환경설정 
---

프로젝트 root 폴더에 .env 파일 생성

- .env

```
GITHUB_ACCESS_TOKEN=ghp_B...3wxID
```

### 실행
---

```bash
node main.js [command]
```

Commands

```bash
  me                 Check my profile
  list-bugs          List issues with bug label
  check-prs          Check pull request status
  check-screenshots  check if any issue is missing screenshot event if it has bug label on it
  help [command]     display help for command
```

### 1. Command: help 
---

<img width="941" alt="image" src="https://github.com/dev-connor/Project-manager/assets/70655507/9d5f6c15-48dc-4ccf-b212-f248d940c616">

모든 명령어의 사용법에 대해 알려줍니다.

### 2. Command: me
---

<img width="940" alt="image" src="https://github.com/dev-connor/Project-manager/assets/70655507/854ad0ad-a416-4d9f-bb9b-e195812e11c6">

### 3. Command: list-bugs 
---

<img width="942" alt="image" src="https://github.com/dev-connor/Project-manager/assets/70655507/17b94a56-9d14-4c5d-8b7a-3a8abe6cd164">

버그레이블이 달려있는 모든 이슈를 출력합니다. 

### 4. Command: check-prs
---

<img width="982" alt="image" src="https://github.com/dev-connor/Project-manager/assets/70655507/56d9d62d-bb44-4edf-a265-9ee9bd19010c">

<img width="992" alt="image" src="https://github.com/dev-connor/Project-manager/assets/70655507/c92feea5-1e4f-49ed-9af3-6c019a585851">

<img width="1792" alt="image" src="https://github.com/dev-connor/Project-manager/assets/70655507/5e3c3d05-ddc2-438f-8f26-298d4149f766">

풀 리퀘스트를 모두 검사해서, 만약 너무 diff 가 큰 (10줄) 풀 리퀘스트가 있으면 `too-big` 이라는 레이블을 붙입니다.

### 5. Command: check-screenshots
---

<img width="941" alt="image" src="https://github.com/dev-connor/Project-manager/assets/70655507/3e34a442-6a07-4974-8a1c-1fa275beda98">

커맨드를 입력하면 y/n 을 묻는 커맨드가 출력됩니다. 

<img width="941" alt="image" src="https://github.com/dev-connor/Project-manager/assets/70655507/3cb96071-3da5-469d-8889-adb74a60bf19">

bug 레이블이 달려 있으나, 스크린샷이 없는 이슈에 대해서 성공적으로 레이블을 붙였습니다. 

<img width="1792" alt="image" src="https://github.com/dev-connor/Project-manager/assets/70655507/b6b26540-e5fe-4e96-bcb5-5c5ca1a6b77a">

확인해봅니다. 


