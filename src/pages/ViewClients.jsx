import React from "react";
import styled from "styled-components";
import ClientTable from "../components/viewclient/ClientTable";
import SearchBar from "../components/viewclient/SearchBar";

function ViewClients() {
  return (
    <Section>
      <h4>View Clients</h4>
      <div className="table">
        <div>
          <SearchBar />
          <ClientTable />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  && {
    padding: 1rem;
    h4 {
      font-size: 2rem;
      color: #030037;
      padding: 1rem;
      margin-bottom: 2rem;
    }

    .table {
      overflow-x: hidden;
      background-color: #fff;
      .css-41abqd-MuiTableContainer-root {
        max-height: 90%;
      }

      div {
        width: 100%;
        overflow-x: auto;
      }

      table {
        .css-177gid-MuiTableCell-root {
          text-align: start;
          color: #030037;
          font-size: 1.2rem;
          border-bottom: 1px solid #f8f9fd;
          padding: 1.8rem;
          @media screen and (max-width: 1025px) {
            padding: 1rem 0.8rem;
          }
          @media screen and (max-width: 925px) {
            font-size: 1rem;
          }
        }

        thead {
          .css-i02g0k-MuiTableCell-root {
            text-align: start;
            font-size: 1.1rem;
            font-weight: 500;
            color: #030037;
            background-color: #f8f9fd;
            padding: 1rem 1.5rem;

            @media screen and (max-width: 1025px) {
              padding: 1rem 0.5rem;
            }
            @media screen and (max-width: 925px) {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;

export default ViewClients;
