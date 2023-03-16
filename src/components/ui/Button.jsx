import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

import { VscDebugRestart } from "react-icons/vsc";
import { HiOutlineChevronRight } from "react-icons/hi";

export function SubmitButton() {
  return (
    <SubmitBtn variant="save" type="submit">
      <span>save & continue</span>
      <HiOutlineChevronRight />
    </SubmitBtn>
  );
}
export function ResetButton() {
  return (
    <ResetBtn>
      <VscDebugRestart />
      <span>Reset</span>
    </ResetBtn>
  );
}

const SubmitBtn = styled(Button)`
  && {
    background-color: #153ac7;
    color: #ffffff;
    font-size: 1.3rem;
    padding: 0.8rem 1.4rem;
    text-transform: capitalize;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover {
      background-color: #1941e1;
    }
  }
`;

const ResetBtn = styled.button`
  border: none;
  color: #686687;
  background: transparent;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    font-size: 1.5rem;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
