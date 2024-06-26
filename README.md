<div align="center">

## [BLOB 바로가기](https://blob-omega.vercel.app/)

<div>
 <img src="https://github.com/PROJECT-BLOB/front-end/assets/72595163/cbc23d23-a078-46d8-bdaf-f723001c570f" alt="별 하나에 글 하나 로고">
</div>

<h3> "BLOB으로 지도에 정보를 공유해보세요" </h3>

여행 정보 공유 SNS

<br />

지도에는 사용자들이 작성한 글을 마커를 통해 보여줍니다

현지 상황의 정보를 사용자들게 공유해보세요

</br>

[🔗 notion 바로가기](https://www.notion.so/Sprint-Part4-Team4-b7b1ab535d0e4907bd730d132c5a3199)

</div>

<br />

# 프로젝트 소개

## BLOB 만들게 된 계기

혹시 여행 중 오래된 정보나 부정확한 정보로 인해 불편함을 겪은 적이 한번쯤 있지 않으신가요?

또한 교통상황, 사건 사고 등 여행 중 실시간으로 업데이트되는 정보들을 모아볼 수 있는 곳이 없어서,

날씨 이슈로 행사가 취소된다든가, 시시각각 바뀌는 현지 상황을 알지 못해 여행 중 예기치 못한 일들을 겪게 되기도 합니다.

저희는 이러한 불편함을 해결하기 위해 블롭이라는 서비스를 생각하게 되었습니다.

<br />

## 주요 기능 설명

### 🗺️ 지도 페이지

<img align-center width=300 height=350 src='https://github.com/chlangus/blob/assets/139041897/c1fcd52f-4167-42c1-8520-f6b9c1915738'/>   

<br />

- 마커는 클러스터링으로 구현되어 줌 아웃을 하면 여러개로 모아서 보여줍니다.
- 맵에서 보여지는 글들은 사이드바에서도 볼 수 있습니다.
- 모바일 화면에서는 사이드바 대신 바텀시트로 구현되어 있습니다
- 자동완성 검색창을 통해 지역과 나라를 검색하고 이동할 수 있습니다.
- 카테고리를 지정해 원하는 정보가 담긴 글만 필터링 해서 볼 수 있습니다.
- 글 작성 후, 24시간이 지나면 지도 페이지에서 글이 사라집니다.
- 좋아요를 받으면 남은 시간이 30분씩 연장됩니다.

### ✍️ 글 작성
<img width=300 height=350 src='https://github.com/chlangus/blob/assets/139041897/48afc15e-dae5-4598-b3b0-37cbf8d7561c'/>    

<br/>       


- 검색을 통해 현재 보고있는 위치가 아닌, 다른 나라에도 설정할 수 있습니다
- 미니맵으로 자세한 위치를 설정할 수 있습니다.
- 사진은 5장까지 첨부할 수 있습니다.

### 🪧 피드 페이지
<img width=300 height=350 src='https://github.com/chlangus/blob/assets/139041897/2f0986cd-a922-4fc0-b8f5-aae751480bad'/>

<br />  

- 모든 글을 조회 할 수 있습니다.
- 필터링으로 기간도 설정할 수 있고, 이미지가 있는 글, 상세위치가 있는 글까지 모아볼 수 있습니다.

### 🗂 마이 페이지
<img width=300 height=350 src='https://github.com/chlangus/blob/assets/139041897/0e4c5306-1ad4-4dfe-9d9b-0a6837fc226b'/>

<br />  

- 프로필 정보를 다른사람이 보지 못하도록 비공개 설정을 할 수 있습니다.
- 해당 유저가 작성한 글, 저장한글, 댓글 단 글을 모아볼 수 있습니다.
- 내가 작성한 글, 북마크한 글, 댓글 단 글을 모아볼 수 있습니다

### 🛎️ 알림
<img width=300 height=350 src='https://github.com/chlangus/blob/assets/139041897/6ff12dc0-cb0b-412d-8544-f1d2d14bcc81'/>

<br />  

- 누군가 내 글에 좋아요를 남기거나, 댓글을 달게 되면 알림창에 알림이 뜨게 됩니다.

<br />

# 기술 스택

<img width="733" alt="스크린샷 2024-05-22 오후 10 07 29" src="https://github.com/PROJECT-BLOB/front-end/assets/72595163/417a364b-f4ab-487c-8a85-7c222a43d2e4">

### [Next.js](https://nextjs.org/)

- pre-rendering을 통해 더 빠른 로딩속도와 SEO 측면에서 뛰어나 선택하였습니다.
- 직관적인 라우팅 방식과 에러페이지 및 중첩 레이 아웃등의 자체 기능 제공하여 기존 react에서 따로 라우팅을 해줘야 했던점과 비교하여 관련 로직을 줄일 수 있었습니다.
- 라우팅에서 module.css를 불러오지 못하는 문제가 있었는데 버전문제였던걸 알게 됐고, 아직 불안정하단걸 체감할 수 있었습니다.
  <br />

### [Typescript](https://typescriptlang.org/)

- 객체 안의 필드값을 리스트업 해주기 때문에 생산성 향상에 큰 도움이 되었습니다.
- 실시간 타입 검사를 통해, 실행을 하지 않아도 오류 체크가 가능하여 오류를 일찍 발견하고 수정이 용이하였습니다.
  <br />

### [Zustand](https://zustand-demo.pmnd.rs/)

- 프로젝트의 규모를 생각하여 번들 사이즈 가볍고 코드량이 적은 zustand 선택하였습니다.
- 낮은 러닝커브로 인해 금방 프로젝트에 적용이 가능했습니다.
  <br />

### [ReactQuery](https://tanstack.com/)

- useState와 useEffect를 사용할 때와 비교하여 데이터 페칭 과정이 훨씬 단순해졌습니다.
- 키(key)로 데이터를 조작하기 때문에 데이터 흐름을 쉽게 파악할 수 있었습니다.
- 데이터를 캐싱하여 불필요한 API 요청을 줄일 수 있었습니다.
  <br />

## 🗂 문서

- [API](http://ec2-13-124-35-140.ap-northeast-2.compute.amazonaws.com:9000/swagger-ui/index.html)

## 팀원

<table>
    <tr>
        <td align="center"><img src="https://github.com/Dev-Duke-Seo.png" width="80"></td>
        <td align="center"><img src="https://github.com/INKmin9.png" width="80"></td>
        <td align="center"><img src="https://github.com/haeyong9701.png" width="80"></td>
        <td align="center"><img src="https://github.com/yejiniee.png" width="80"></td>
        <td align="center"><img src="https://github.com/chlangus.png" width="80"></td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/Dev-Duke-Seo">서인덕</a></td>
        <td align="center"><a href="https://github.com/INKmin9">김민교</a></td>
        <td align="center"><a href="https://github.com/haeyong9701">윤해용</a></td>
        <td align="center"><a href="https://github.com/yejiniee">조예진</a></td>
        <td align="center"><a href="https://github.com/chlangus">최무현</a></td>
    </tr>
      <tr>
        <td align="center">팀장, FE</td>
        <td align="center">FE</td>
        <td align="center">FE</td>
        <td align="center">FE</td>
        <td align="center">FE</td>
    </tr>
</table>

<table>
    <tr>
        <td align="center"><img src="https://github.com/mawakeb.png" width="80"></td>
        <td align="center"><img src="https://github.com/dodudi.png" width="80"></td>
        <td align="center">
          <img width="80" alt="스크린샷 2024-05-22 오후 10 32 29" src="https://github.com/PROJECT-BLOB/front-end/assets/72595163/a8622f1f-1250-4245-a9d5-84f5019702a1">
        </td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/mawakeb">김채린</a></td>
        <td align="center"><a href="https://github.com/dodudi">권덕영</a></td>
        <td align="center"><a href="https://vsongyev.myportfolio.com/">박송이</a></td>
    </tr>
      <tr>
        <td align="center">BE</td>
        <td align="center">BE</td>
        <td align="center">DE</td>
    </tr>
</table>
