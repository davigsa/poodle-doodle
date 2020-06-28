import React from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  width: 80%;
  background: #fff;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 10px 10px;

  &::placeholder {
    font-style: italic;
    color: #ccc;
  }
`;

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
