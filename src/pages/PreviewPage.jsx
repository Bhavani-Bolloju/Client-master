import React from "react";
import styled from "styled-components";
import Login from "../components/login/Login";
import Theme from "../components/login/Theme";

function PreviewPage() {
  return (
    <PreviewWrapper>
      <Login />
      <Theme />
    </PreviewWrapper>
  );
}

const PreviewWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: 100vh;
  width: 100%;
  grid-template-columns: 40% 60%;

  @media screen and (max-width: 750px) {
    grid-template-columns: 45% 55%;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: 100%;
  }
`;

export default PreviewPage;
