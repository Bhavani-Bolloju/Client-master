import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaUserEdit } from "react-icons/fa";
import {
  MdOutlinePayment,
  MdOutlineDesignServices,
  MdOutlineViewModule,
} from "react-icons/md";

function AddClient() {
  return (
    <AddclienWrapper>
      <h3>Add Client</h3>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="createProfile"
            >
              <span>01</span>
              <span className="text">Create Profile</span>
              <FaUserEdit className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="payment"
            >
              <span>02</span>
              <span className="text">Payment setup</span>
              <MdOutlinePayment className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="theme"
            >
              <span>03</span>
              <span className="text">Theme setup</span>
              <MdOutlineDesignServices className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="module"
            >
              <span>04</span>
              <span className="text">Module setup</span>
              <MdOutlineViewModule className="icon" />
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
    h3 {
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

        @media screen and (min-width: 1025px) {
          .icon {
            display: none;
          }
        }
        @media screen and (max-width: 1025px) {
          .text {
            display: none;
          }

          .icon {
            font-size: 2rem;
          }
        }
      }

      a {
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
        padding: 1.8rem 2rem;
        width: 100%;
        border-bottom: 3px solid #e6e6e6;

        @media screen and (max-width: 800px) {
          gap: 0.5rem;
          padding: 1.5rem 0rem;
          font-size: 1rem;
        }

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
