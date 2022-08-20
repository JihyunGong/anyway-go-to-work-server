# 아무튼 출근!

“아무튼 출근!”은 고용주 입장에서 설계된 가상 오피스 환경을 경험할 수 있는 웹 애플리케이션입니다.

## 🏢 프로젝트 동기

코로나 시대로 인해 재택을 진행하는 일은 어느덧 우리의 일상이 되었습니다.
재택을 진행하게되면 고용주는 직원들의 근태를 확인하기 어렵습니다. 이는 회사 운영에 있어서 고용주나 인사 담당자의 판단력을 흐리게 할 수 있습니다.

이러한 점을 고려하여 실시간으로 직원들의 상태를 확인할 수 있는, 꼰대미를 더한 가상 오피스 환경을 구축하고 싶었습니다.

주요 기능으로는 고용주에게 출퇴근 시간 메일 전송, Daily scrum 및 상태 공유가 있습니다.
그 외 Text chatting 과 Video chatting 기능이 있습니다.

오늘도 재택 근무이신가요? 일단 "아무튼 출근!" 해보시죠!

## 🧩 실행 방법

1. 원격 저장소 클론 받는 법

```javascript
cd [directory]
git clone https://github.com/JihyunGong/anyway-go-to-work-client.git
npm install
```

2. 환경 변수 설정하는 법

```javascript
REACT_APP_API_KEY=<YOUR_API_KEY>
REACT_APP_AUTH_DOMAIN=<YOUR_AUTH_DOMAIN>
REACT_APP_PROJECT_ID=<YOUR_PROJECT_ID>
REACT_APP_STORAGE_BUCKET=<YOUR_STORAGE_BUCKET>
REACT_APP_MESSAGING_SENDER_ID=<SENDER_ID>
REACT_APP_APP_ID=<YOUR_APP_ID>
REACT_APP_MEASUREMENT_ID=<YOUR_MEASUREMENT_ID>
REACT_APP_SERVER_URL=<YOUR_SERVER_URL>
```

3. 실행법

```javascript
npm start
```

## 📆 작업 기간

총 작업 기간: 2022.06.26 ~ 2022.07.16

- Week 1 (06.26 ~ 07.02)
  - 아이디어 구상
  - 기술 스택 조사 및 검증
  - Figma 및 DB modeling 작업
  - 칸반 보드 작성
  - 프로젝트 초기 세팅
- Week 2 (07.03 ~ 07.09)
  - 로그인 기능 구현
  - 회사 생성 Endpoint 구현
  - 회사 정보 요청 Endpoint 구현
  - 회사 수정 Endpoint 구현
  - 새로운 회사 생성 모달 구현
  - 기존 회사 로그인 모달 구현
  - 캐릭터 세팅 모달 구현
  - 메인 페이지 구현
  - 에러 페이지 구현
  - 셀카 기능 구현
  - 퇴근 확인 모달 구현
- Week 3 (07.10 ~ 07.16)
  - 상태 공유 기능 및 모달 구현
  - 출퇴근 시간 메일 전송 기능 구현
  - Daily scrum 기능 및 모달 구현
  - Text chatting 기능 및 모달 구현
  - Video chatting 기능 및 모달 구현

## 🕹 Features

| Page  | Features              | Description                                                                                                           |
| ----- | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Login | 로그인                | Google social login을 통해 DB에 유저를 인증하고 신규 유저인 경우 DB에 추가합니다.                                     |
|       | 회사 생성             | 새로운 회사를 생성하여 DB에 추가합니다.                                                                               |
|       | 회사 로그인           | DB에 저장된 회사 정보를 이용해 회사 로그인을 합니다.                                                                  |
|       | 캐릭터 세팅           | 매 출근마다 유저가 원하는 캐릭터 및 닉네임을 설정합니다.                                                              |
| Main  | 출퇴근 시간 메일 전송 | 출퇴근 시간을 각 고융주의 메일로 전송합니다.                                                                          |
|       | Daily scrum 공유      | Daily scrum을 작성하여 공유할 수 있고, 만약 출근하고 1시간이내에 scrum을 작성하지 않으면 해당 유저에게 알림이 뜹니다. |
|       | 상태 공유             | 유저의 작업 상태(작업중, 자리 비움), 출퇴근 시간을 공유합니다.                                                        |
|       | Text chatting         | 실시간으로 동료들과 문자 채팅을 할 수 있습니다.                                                                       |
|       | Video chatting        | 실시간으로 동료들과 화상 채팅을 할 수 있습니다.                                                                       |

## 🛠 Tech Stacks

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"><img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"><img src="https://img.shields.io/badge/PixiJS-FFC0CB?style=for-the-badge&logo=PixiJS&logoColor=white"><img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white"><img src="https://img.shields.io/badge/Simple--peer-0000FF?style=for-the-badge&logo=Simple-peer&logoColor=white"><img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

## 🔮 프로젝트를 마치며...

프로젝트를 진행하며 가장 신경을 썼던 부분은 제 페이스를 잃지 않으려고 했다는 점입니다.

이번 프로젝트는 약 3주간 이어졌으며, 아이디어 구상부터 개발, 배포까지 온전히 혼자 이끌어 가야 했습니다.
또한 칸반 일정을 따르기 위해서는 하루하루 새로운 기능을 구현해야 했습니다.
하지만 생각보다 작업은 계획대로 진행되지 않았으며, 정해진 일정을 미뤄야 했던 적도 있고 계획된 기능을 제외해야 하는 상황도 있었습니다.
이러한 이슈들을 겪으면서 프로젝트의 흐름을 놓치고 있다고 생각하여 초조하고 불안하기도 했지만, 페이스를 잃는 순간 Stand-up 일정에 맞추어 프로젝트를 마무리하지 못할 것이라 생각했습니다.

따라서 일정에 조금 변동이 생기더라도 당시 개발하는 기능에 집중하였으며 평균 작업 속도를 유지하려고 노력했습니다.
대신 시간을 많이 사용하여 일정이 더 이상 늦춰지지 않도록 했습니다.

이러한 경험을 바탕으로 어떠한 상황에도 크게 흔들리지 않고 묵묵히 맡은 바를 해내는 개발자가 되어야 겠다고 생각했습니다.
