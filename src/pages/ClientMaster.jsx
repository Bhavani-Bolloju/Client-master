import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

function ClientMaster() {
  return (
    <Main>
      <Nav>
        <h3>company name</h3>
        <label>
          <IoIosSearch />
          <input type="text" placeholder="Search modules" />
        </label>
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
  display: grid;
  height: 108rem;
  background-color: #f5f5f5;
  grid-auto-flow: column;
  grid-template-columns: 22% 1fr;

  nav {
    background-color: #ffffff;
  }
`;

const Nav = styled.nav`
  && {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 1.5rem;

    label {
      border: 1px solid #e6e6e6;
      padding: 1rem;
      border-radius: 5rem;
      display: flex;
      gap: 1rem;

      svg {
        font-size: 1.6rem;
        color: #b8babc;
      }

      input {
        border: none;
        &:focus {
          outline: none;
        }

        &::placeholder {
          color: #8e96a0;
          font-weight: lighter;
        }
      }
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
