import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const animation = keyframes`
  0%{
  transform: rotate(0deg);
  border-radius: 0px;
  }
  50%{
  transform: rotate(360deg);
  border-radius: 100px;
  }
  100%{
  transform: rotate(0deg);
  border-radius: 0px;
  }
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  span {
    // Box안의 span을 targeting 할 수 있다.
    font-size: 36px;
    &:hover {
      // &의 의미 : span:hover
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box />
      <span>😍</span>
    </Wrapper>
  );
}

export default App;
