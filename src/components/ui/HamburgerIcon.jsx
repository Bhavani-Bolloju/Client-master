import React, { useState } from "react";
import styled from "styled-components";

function HamburgerIcon({ isOpen, onOpen }) {
  return (
    <Icon
      onClick={() => onOpen((prev) => !prev)}
      className={isOpen ? "active" : ""}
    >
      <div></div>
      <div></div>
    </Icon>
  );
}

const Icon = styled.button`
  @media screen and (min-width: 950px) {
    display: none;
  }
  border: none;
  position: fixed;
  right: 3rem;
  top: 1rem;
  background-color: #fff;
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 20;
  box-shadow: 0 4px 10px 5px rgba(0, 0, 0, 0.05);

  div {
    background-color: #153ac7;
    width: 2rem;
    height: 2px;
    position: absolute;
    &:first-child {
      top: 40%;
      transition: all 0.2s;
    }
    &:last-child {
      top: 60%;
      transition: all 0.2s;
    }
  }

  &.active {
    div {
      &:first-child {
        transform: rotate(127deg) translate(1px, -2px);
      }
      &:last-child {
        transform: rotate(-143deg) translate(3.5px, 6px);
      }
    }
  }
`;

export default HamburgerIcon;
