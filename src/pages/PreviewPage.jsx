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
  grid-template-columns: 40% 60%;
  height: 100vh;
`;

export default PreviewPage;
