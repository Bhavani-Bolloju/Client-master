import React from "react";
import styled from "styled-components";

function Theme() {
  return (
    <ThemeWrapper>
      <div className="container">
        <div className="theme">
          <div className="theme-1"></div>
          <div className="theme-2"></div>
        </div>
        <div className="theme-title">
          <p className="theme-heading">360° Solution for Asset Management</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </ThemeWrapper>
  );
}

const ThemeWrapper = styled.div`
  background-color: #1334b3;
  color: #fff;

  .container {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .theme-title {
      text-align: center;
    }
    .theme-heading {
      font-weight: 700;
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    .theme-heading + p {
      font-size: 1.2rem;
      color: #eee;
    }
    .theme {
      height: 50%;
      width: 100%;
      margin: 2rem auto;
      position: relative;
      &-1 {
        clip-path: polygon(0px 5%, 100% 20%, 100% 80%, 0px 95%);
        width: 80%;
        height: 100%;
        background-color: #fff;
        position: absolute;
        margin: 0 auto;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
      }
      &-2 {
        width: 100%;
        height: 100%;
        background-color: #ffffff22;
        position: absolute;
        left: 0;
        top: 0;
        clip-path: polygon(0 20%, 100% 5%, 100% 95%, 0 80%);
      }
    }
  }
`;

export default Theme;
