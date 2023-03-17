import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

function InputSearch() {
  return (
    <Label>
      <IoIosSearch />
      <input type="text" placeholder="Search modules" />
    </Label>
  );
}

const Label = styled.label`
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
`;

export default InputSearch;
