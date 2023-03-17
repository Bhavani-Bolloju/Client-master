import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

import { ButtonWrapper } from "./Button";

function CardWrapper({ name, title, btn, img, type }) {
  return (
    <CardItem className={type}>
      <div className="image">{img ? img : null}</div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <p className="title">{title}</p>
      </CardContent>
      <CardActions>
        <ButtonWrapper>{btn}</ButtonWrapper>
        <ButtonWrapper>View All</ButtonWrapper>
      </CardActions>
    </CardItem>
  );
}

const CardItem = styled(Card)`
  && {
    padding: 4rem 2rem;
    min-width: 25rem;
    box-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;

    @media screen and (max-width: 950px) {
      padding: 2rem 1rem;
      min-width: 20rem;
    }
    @media screen and (max-width: 750px) {
      padding: 2rem 1rem;
      min-width: 18rem;
    }

    .image {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background-color: #e6e6e6;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 650px) {
        width: 4rem;
        height: 4rem;
      }
      svg {
        font-size: 3rem;
        color: #b8babc;
        @media screen and (max-width: 650px) {
          font-size: 1.8rem;
        }
      }
    }

    .css-46bh2p-MuiCardContent-root {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin-bottom: 2.5rem;
      .title {
        font-size: 1.2rem;
        color: #686687;
        @media screen and (max-width: 750px) {
          font-size: 1rem;
        }
      }
    }

    .css-h93ljk-MuiTypography-root {
      font-size: 1.4rem;
      margin-top: 1rem;
      color: #030037;
      font-weight: 600;
      text-transform: capitalize;
      @media screen and (max-width: 750px) {
        font-size: 1.2rem;
      }
    }
    &.site {
      svg {
        color: #153ac7;
      }
      button {
        &:first-child {
          background-color: #153ac7;
          color: #ffffff;
        }
      }
    }
    &.tenant {
      background-color: #f5f5f5;
      button {
        color: #b8babc !important;
        &:first-child {
          background: #ececec;
        }
      }
    }
  }
`;

const CardActions = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    gap: 0.5rem;

    button {
      font-size: 1.2rem;
      background-color: transparent;
      color: #686687;
      padding: 0.5rem;
      font-weight: 600;
      @media screen and (max-width: 750px) {
        font-size: 1rem;
      }
      &:first-child {
        background-color: #f8f9fd;
        color: #153ac7;
      }
      &:hover {
        background-color: #f8f9fd;
      }
    }
  }
`;

export default CardWrapper;
