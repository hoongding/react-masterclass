import React from "react";
import styled from "styled-components";
import { BooleanLiteral } from "typescript";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  otherThingHere?: boolean;
}

function Dummy({ text, otherThingHere }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {};
  return (
    <Container>
      <Dummy text="hello" />
    </Container>
  );
}

export default App;
