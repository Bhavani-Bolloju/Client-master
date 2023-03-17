import React from "react";
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import { ButtonWrapper } from "../ui/Button";
import CardWrapper from "../ui/CardWrapper";
import { AiFillHome } from "react-icons/ai";

function Success() {
  return (
    <SuccessSection>
      <h3>Add Client</h3>
      <SuccessPopup>
        <BsCheckCircleFill />
        <p>You have successfully added Infosys</p>
        <div className="nav-btns">
          <ButtonWrapper>Go to Client master</ButtonWrapper>
          <ButtonWrapper>Add more Clients</ButtonWrapper>
        </div>
      </SuccessPopup>
      <ClientList>
        <div className="client-list">
          <CardWrapper
            name="ISS Facility Services"
            title="4 Clients"
            btn="Add FCM"
            type="client"
          />
          <CardWrapper name="Infosys" title="--" btn="Add Client" />
          <CardWrapper
            name="Sites"
            title="--"
            btn="Go to config"
            img={<AiFillHome />}
            type="site"
          />
          <CardWrapper
            name="Tenant Group"
            title="--"
            btn="Add Tenant Group"
            img={<AiFillHome />}
            type="tenant"
          />
          <CardWrapper
            name="Tenants"
            title="--"
            btn="Add Tenant"
            img={<AiFillHome />}
            type="tenant"
          />
        </div>
      </ClientList>
    </SuccessSection>
  );
}

const SuccessSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

const ClientList = styled.div`
  overflow: scroll;
  position: relative;
  height: 35rem;
  scrollbar-width: none;

  .client-list {
    width: fit-content;
    list-style: none;
    padding: 2rem;
    position: absolute;
    left: 0;
    top: 0;
    gap: 2rem;
    overflow: hidden;
    display: flex;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SuccessPopup = styled.div`
  background-color: #fff;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    color: #12b690;
    font-size: 2rem;
    @media screen and (max-width: 750px) {
      font-size: 1.5rem;
    }
  }
  P {
    color: #030037;
    font-size: 1.4rem;
    @media screen and (max-width: 750px) {
      font-size: 1rem;
    }
  }

  .nav-btns {
    margin-left: auto;
    display: flex;
    gap: 1rem;

    button {
      font-size: 1rem;
      @media screen and (max-width: 750px) {
        font-size: 0.8rem;
      }
      &:first-child {
        color: #153ac7;
        background-color: #f8f9fd;
      }
    }
  }
`;

export default Success;
