import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

import { VscDebugRestart } from "react-icons/vsc";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export function SubmitButton({ navigateTo = "/" }) {
  const navigate = useNavigate();
  const btnHandler = function () {
    navigate(navigateTo);
  };

  return (
    <Btn variant="save" type="submit" onClick={btnHandler}>
      <span>save & continue</span>
      <HiOutlineChevronRight />
    </Btn>
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

export const ButtonWrapper = function (props) {
  return <Btn>{props.children}</Btn>;
};

const Btn = styled(Button)`
  && {
    background-color: #153ac7;
    color: #ffffff;
    font-size: 1.3rem;
    padding: 0.5rem 1.4rem;
    text-transform: capitalize;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 800px) {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }

    &:hover {
      background-color: #1941e1;
    }
  }
  svg {
    font-size: 1.6rem;
    fill: #ffffff;
    color: #ffffff;
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
