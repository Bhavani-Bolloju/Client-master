import React from "react";
import styled from "styled-components";

import InputSearch from "../ui/InputSearch";
import { ButtonWrapper } from "../ui/Button";
import { BiChevronDown } from "react-icons/bi";
import { RxDownload } from "react-icons/rx";

function SearchBar() {
  return (
    <ClientSearch>
      <InputSearch />
      <div className="table-btns">
        <ButtonWrapper>
          <span>Columns</span>
          <BiChevronDown />
        </ButtonWrapper>
        <ButtonWrapper>
          <span>Export</span>
          <RxDownload />
        </ButtonWrapper>
      </div>
    </ClientSearch>
  );
}

const ClientSearch = styled.div`
  && {
    display: flex;
    padding: 1rem;
    label {
      width: fit-content;
    }

    .table-btns {
      margin-left: auto;
      display: flex;
      gap: 1rem;
      button {
        &:first-child {
          background-color: #fff;
          color: #939596;
          border: 1px solid #e6e6e6;
          svg {
            fill: #939596;
          }
        }
        &:last-child {
          background-color: #e8ebf9;
          color: #153ac7;
          border: 1px solid #e6e6e6;
          svg {
            color: #153ac7;
          }
        }
      }
    }
  }
`;

export default SearchBar;
