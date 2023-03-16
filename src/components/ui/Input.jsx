import React from "react";
import styled from "styled-components";

function Input({ type, placeholder, required, name }) {
  return (
    <InputEl>
      <input
        className={required ? "required" : ""}
        type={type}
        required
        id={name}
        name={name}
      />
      <label htmlFor={name}>
        <span>{placeholder}</span>
        {required ? <span className="required">*</span> : null}
      </label>
    </InputEl>
  );
}

const InputEl = styled.div`
  color: #939596;
  position: relative;
  border: 2px solid #e6e6e6;
  flex-basis: 48%;
  border-radius: 0.8rem;
  flex-grow: 1;

  input {
    border: none;
    border-radius: 0.8rem;
    padding: 1.2rem 1rem;
    width: 100%;

    &:focus {
      outline: none;
      box-shadow: 0 0px 10px 10px rgba(147, 149, 150, 0.04);
    }
  }
  label {
    font-size: 1.2rem;
    position: absolute;
    text-transform: capitalize;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    .required {
      color: #e84754;
    }
  }

  input:focus + label {
    display: none;
  }
`;

export default Input;
