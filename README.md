### 세팅
---

프로젝트 root 폴더에 .env 파일 생성

- .env

```
GITHUB_ACCESS_TOKEN=ghp_B...3wxID
```

### 실행
---

```bash
npm run server [command]
```

Commands

```bash
  me                 Check my profile
  list-bugs          List issues with bug label
  check-prs          Check pull request status
  check-screenshots  check if any issue is missing screenshot event if it has bug label on it
  help [command]     display help for command
```

### 1. Command:me
---

<img width="486" alt="image" src="https://github.com/dev-connor/fc21-cli-study/assets/70655507/6113224f-83fa-43c1-9e8e-314120683b47">

### 2. Command:list-bugs 
---

<img width="643" alt="image" src="https://github.com/dev-connor/fc21-cli-study/assets/70655507/d71c43b4-666e-4fb3-9be8-853d39d55aa1">

버그레이블이 달려있는 모든 이슈를 출력합니다. 

### 3. Command:check-prs
---

풀 리퀘스트를 모두 검사해서, 만약 너무 diff 가 큰 (100줄) 풀 리퀘스트가 있으면 `too-big` 이라는 레이블을 붙입니다.

### 4. Command:check-screenshots
---

<img width="651" alt="image" src="https://github.com/dev-connor/fc21-cli-study/assets/70655507/daa69aac-6c4e-4d01-adce-75219468825c">

<img width="1792" alt="image" src="https://github.com/dev-connor/fc21-cli-study/assets/70655507/174a7244-b52d-4af5-bd02-26058d01494c">

bug 레이블이 달려 있으나, 스크린샷이 없는 이슈에 대해서 needs-screenshot 레이블을 달아줍니다.

### 5. Command:help [command]
---

<img width="634" alt="image" src="https://github.com/dev-connor/fc21-cli-study/assets/70655507/92f6ef62-8003-4df8-8de9-5d5bce31c1de">

특정 명령어의 사용법에 대해 알려줍니다.
