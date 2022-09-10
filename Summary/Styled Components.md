# Styled Components

# Why Styled Components?

## CSS를 연결시키는 방법

1. CSS 모듈 사용
    1. 계속 className들을 복사 붙여넣기 해줘야한다.
2. 직접 {}안에 써주기
    
    ```tsx
    import styled from "styled-components";
    
    function App() {
      return (
        <div style={{ display: "flex" }}>
          <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
          <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
        </div>
      );
    }
    
    export default App;
    ```
    
3. styles.css 연결해서 import한 후 써주기.
4. **Styled Components**
    - 위의 3가지 방법의 단점들을 모두 커버해주는 아주 great한 방법!

## Styled Components

- `npm i styeld-components`
- `npm start`
- `import styled from "styled-components";`
    - App.js에 추가!

**사용법**

```tsx
const Father = styled.div`
  display: flex;
`;
```

- 사용할 css component는 백틱(₩)에 넣어준다.

### Adapting and Extending

- CSS가 겹쳐서 코드 중복이 많아진다면? Styled Componenets는 어떻게 처리할까?

**컴포넌트를 확장시켜서 쓸수 있는 방법에 대해 알아볼거임!**

- **props : 컴포넌트에 데이터를 보내는 방식.**

```tsx
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

...

<Box bgColor="teal" />
<Box bgColor="tomato" />
```

**컴포넌트를 확장 가능하게 만드는 법 
확장: 컴포넌트의 모든 요소를 유지하면서 새로운 코드를 추가하는 것.**

1. 컴포넌트를 변경 가능하게 만들기.
    - 컴포넌트를 통해서 새로운 컴포넌트를 만들어 낼 때 기존 컴포넌트의 모든 것들을 가져와서 새로운 것들을 더하고 싶다!

```tsx
const Circle = styled(Box)`
  border-radius: 50px;
`;
```

- 이런식으로 작성하면 Box의 모든 속성들을 들고 온 다음 그 안에 있는 다른 css를 추가해준다!

### 다수의 컴포넌트를 다룰 때 도움이 될만한 몇가지 트릭!

**컴포넌트의 태그를 바꾸고 싶은데 스타일은 그대로 쓰고 싶을 때  → `as`**

```tsx
<Btn as="a"></Btn>
```

- 이렇게 쓰면 태그는 button이였지만 이 style 그대로 link를 쓸 수 있다!

**컴포넌트의 attribute 추가해주기! → `attrs({})`**

→ html attribute가 반복되는 component를 만들 때 사용.

```tsx
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;
```

- 만약 많은 input이 있으면 우리는 require(html attribute)을 다 달아줘야한다
- 하지만 attribute를 추가해줄 수 있다! by Styled Components로!

### Styled Componenet에서 Animation을 주는 방법

**helper function을 import해주기! → `keyframes`**

```jsx
import styled, { keyframes } from "styled-components";  
```

 

```tsx
const animation = keyframes`
  from{
  transform: rotate(0deg);
  border-radius: 0px;
  }
  to{
  transform: rotate(360deg);
  border-radius: 100px;
  }
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
`; 
```

### Pseudo Selector 2가지.

: styled Component “안에" 있는 걸 Select하도록 도와준다.

1. **component에서 selector를 하나 더 사용하기 → target처리하기**
- 예를들어 Box안에 span이 하나 있다면 그걸 선택해서 사용 가능하다 → target
- 따라서 모든 Component에 Styled Component를 처리해 줄 필요가 없다.

```tsx
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  span {
    font-size: 36px;
  }
`;
```

- &

```tsx
const Box = styled.div`
  ...

  span {
    font-size: 36px;

    &:hover {
      font-size: 40px;
    }
  }
`;
```

- &를 쓰면 span:hover와 같은 뜻이다!

**2. Styled Component 안의 Element를 선택하는 다른 방법.**

**태그명에 의존하지 않는 방법 - 타겟지정!**

- 위의 방법은 span이라는 tag name에 의존하면서 Styled Component안의 Element를 선택했다.
- 만약 tag name에 의존하지 않고 Element를 선택하려면 그 tag name에 해당하는 놈을 const 로 선언해준다.
- 그 이후 span을 지목하는 것이 아니라 선언한 놈을 지목하면 끝!

```tsx
${Emoji} {
    // Box안의 span을 targeting 할 수 있다.
    &:hover {
      // &의 의미 : span:hover
      font-size: 98px;
    }
  }
```

- 이런식으로 Box안의 Styled Component에서 Emoji를 지목하면 Emoji가 span이든 p 이든 우리가 적용하는 CSS가 적용된다!

### Theme - 다크모드, 라이트모드

- 다크모드를 만드려면 Theme이 50%, Local Estate Management 50%가 필요한데 일단 Theme부터 배워보자!
- **먼저 Theme이란?**
    - 기본적으로 모든 색상들을 가지고 있는 Object이다.
    - 모든 색깔을 하나의 Object안에 넣어놨기 때문에 상당히 유용하다.

- Theme을 실행하려면 index.js로 가야한다!
1. import 해주기!

```jsx
import { ThemeProvider } from "styled-components";
```

1. App을 ThemeProvider로 감싸주기

```jsx
const darkTheme = {
  //다크모드
  textColor: "whitesmoke",
  backgroundColor: "#111",
};
const lightTheme = {
  //라이트 모드
  textColor: "#111",
  backgroundColor: "whitesmoke",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

이렇게 App을 ThemeProvider로 감싸주면 App이 ThemeProvider안에 있기 때문에

App안에서 Theme Object에 접근해서 textColor를 얻을 수 있다!

또 여기서 다크모드와 라이트모드에서 textColor와 backgroundColor, 즉 property가 똑같은 이름을 가져야 하는 이유는 App에서 `props.theme.property이름` 으로 접근하기 때문이다!