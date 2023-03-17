import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import InputSearch from "../components/ui/InputSearch";

function ClientMaster() {
  return (
    <Main>
      <Nav>
        <h3>company name</h3>
        <InputSearch />
        <p>client master</p>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="viewClients"
            >
              View Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="addClient"
            >
              Add client
            </NavLink>
          </li>
        </ul>
      </Nav>
      <section className="main-section">
        <Outlet />
      </section>
    </Main>
  );
}

const Main = styled.main`
  height: 108rem;
  display: flex;

  nav {
    background-color: #ffffff;
    min-width: 25%;
  }
  .main-section {
    width: 100%;
    background-color: #f5f5f5;
  }
`;

const Nav = styled.nav`
  && {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 1.5rem;
    @media screen and (max-width: 950px) {
      display: none;
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 24px;
    color: #233244;
    margin-top: 1.5rem;
  }
  p {
    color: #b8babc;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      text-decoration: none;
      color: #686687;
      font-size: 1.4rem;
      width: 100%;
      display: inline-block;
      border-radius: 1rem;
      font-weight: 600;
      padding: 1rem 0.8rem;

      &.active {
        background-color: #153ac7;
        color: #eee;
      }
    }
  }
`;

export default ClientMaster;
