import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

function AddClient() {
  return (
    <AddclienWrapper>
      <h4>Add Client</h4>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="createProfile"
            >
              <span>01</span> Create Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="payment"
            >
              <span>02</span>Payment setup
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="theme"
            >
              <span>03</span>Theme setup
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="module"
            >
              <span>04</span>Module setup
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className="client-setup">
        <Outlet />
      </section>
    </AddclienWrapper>
  );
}

const AddclienWrapper = styled.section`
  && {
    padding: 1rem;
    h4 {
      font-size: 2rem;
      color: #030037;
      margin-bottom: 2rem;
    }

    nav {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      padding: 0;
      ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      li {
        border-bottom: 100% solid #fff;
        width: 100%;
        text-align: center;
      }

      a {
        padding: 1.8rem 2rem;
        width: 100%;
        text-decoration: none;
        color: #939596;
        text-transform: uppercase;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-weight: 600;
        width: 100%;
        border-bottom: 3px solid #e6e6e6;

        &.active {
          border-bottom: 3px solid #153ac7;
          color: #153ac7;
        }
      }
      .client-setup {
        background: #fff;
      }
    }
  }
`;

export default AddClient;
