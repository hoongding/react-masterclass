import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string; // required -> 따라서 default값을 지정해줘야함..
}
interface CircleProps {
  bgColor: string;
  borderColor?: string; // optional
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
  // ??연산자로 default값 지정. borderColor가 없다면 오른쪽의 bgColor가 borderColor가 된다.
}

export default Circle;
