# Next JS - Beginner

### Next.js 입문기

<img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>

---

- **23-10-21 : #0.0 ~ #1.3 / Framework Overview (1)**
  - Next.js 프로젝트 생성 : 터미널에 'npx create-next-app@latest (폴더명)' 입력
    - 기본적으로 TypeScript, ESLint, Tailwind CSS 구성과 함께 제공됨
  - Framework VS Library
    - Library : 개발자가 자유롭게 사용할 수 있는 것
      - 원하는대로 코드를 작성할 수 있고, 사용하고 싶을 때 사용 (ex. React)
    - Framework : 특정을 규칙을 따라야하며, 개발자의 코드를 불러오는 것
      - 코드를 적절한 위치에 잘 적기만 한다면 동작함 (ex. Next.js)
  - 'pages'폴더 - Routing
    - Next.js는 'pages'폴더 내의 파일명을 자동으로 Route 해줌
      - 'React-Router-Dom' 패키지를 사용할 필요가 없음
      - 파일명이 중요하지, 컴포넌트 명은 중요하지 않음
      - 'export default'는 필수 규칙
    - 'index' 파일명은 홈('/')을 나타냄
  - Static Pre Rendering
    - Next.js의 장점 중 하나는, 앱에 있는 페이지들이 미리 rendering 되는 것
      - 정적(static)으로 생성됨: HTML
    - 'Create-React-App'은 Client-Side Render를 하는 앱을 만듦
      - 사용자의 브라우저가 UI를 만드는 모든 일을 함
      - 브라우저가 JS코드를 가져온 후, JS코드가 모든 UI를 만듦
        - 사실 사용자는 비어있는 &lt;div&gt;를 보는 것이며, JS가 없으면 앱을 보여줄 수 없다
        - 브라우저가 React.js코드를 가져와야하기 때문에, 인터넷이 느리다면 UI가 안 보이고 흰 화면만 보임
    - Next.js는 소스코드에 실제 HTML이 존재하므로, JS코드가 없어도 HTML은 보여줌
      - page가 미리 rendering되어, HTML 요소들이 즉시 나타남
    - Hydration : React.js를 Front-End 안에서 실행하는 것
      - 첫 접속 시 HTML을 보게되고, React가 client로 전송되면 React App이 됨
        1. Next.js는 React.js를 Back-End에서 동작시켜서 해당 page를 미리 만듦
           - 컴포넌트의 rendering이 끝나면 그것은 HTML이 되고, page의 소스코드에 넣어줌
           - 사용자는 JS코드가 로딩되지 않았더라도 콘텐츠를 볼 수 있음
        2. 추후 React.js가 로딩되었을 때, 기본적으로 이미 존재하는 것들과 연결이 되어 일반적인 React App이 됨
  - useRouter()
    - Router 관련 정보를 제공하는 Hook
    - 사용법
      - import { useRouter } from "next/router";
      - const 변수명 = useRouter();
    - router 객체를 사용하여, Router 관련 정보에 접근할 수 있음
      - router.pathname: 현재 페이지의 경로를 나타내는 문자열
        - ex. 홈 페이지는 '/'로 표시되며, /about 페이지는 '/about'로 표시
      - router.query: 쿼리 문자열 파라미터를 포함하는 객체
        - ex. '/product?id-1' 페이지에서 router.query는 { id: '1' }를 반환
      - router.asPath: 브라우저의 주소 표시줄에서 현재 페이지의 경로를 나타내는 문자열
        - 이 경로는 실제로 서버 라우트 및 브라우저 라우트 간의 차이를 나타냄
      - router.push(): 페이지를 이동하는 메서드로, 새로운 경로로 이동하고 페이지를 리렌더링함
      - router.replace(): 페이지를 이동하는 메소드로, 새로운 경로로 이동하고 페이지를 리렌더링하지 않음
        - 이전 페이지는 브라우저 히스토리에서 사라짐
      - router.prefetch(): 다음 페이지로의 사전 로드를 시작
        - 페이지가 클릭되기 전에 페이지를 미리 로드하여, 빠른 페이지 전환을 가능하게 함
- **23-10-22 : #1.4 ~ #1.5 / Framework Overview (2)**
  - CSS
    1. 컴포넌트의 'style' 프로퍼티로 추가하는 방법
    2. '.module.css' 파일을 사용하는 방법
       - 컴포넌트 파일에서 import하여 사용
       - 충돌이 없어서(무작위 class명), 다른 컴포넌트에서도 사용 가능
       - 한 요소에 여러 개의 class명을 넣을 시 백틱(``) 또는 배열.join(" ")을 사용
    3. 'styled JSX'를 사용하는 방법
       - 사용법 : &lt;style jsx&gt;{\` CSS코드 \`}&lt;/style jsx&gt;
       - 자동으로 무작위의 class명을 가짐
       - 각 파일에 독립되어 있어서, 하위 컴포넌트 파일에 영향을 주지 않음
         - 해당 컴포넌트 내부로 범위가 한정됨
       - 'props' 사용 가능
- **23-10-24 : #1.6 ~ #1.7 + #2.0 ~ #2. / Framework Overview (3) +**

---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.
