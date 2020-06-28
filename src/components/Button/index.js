import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 100%;
  min-width: 125px;
  padding: 5px;
  background: linear-gradient(
    90deg,
    #00c0ff 0%,
    #ffcf00 49%,
    #fc4f4f 80%,
    #00c0ff 100%
  );
  border-radius: 5px;
  color: #f2f2f2;
  font-weight: bold;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    animation: slidebg 2s linear infinite;
  }

  @keyframes slidebg {
    to {
      background-position: 20vw;
    }
  }

  &:disabled {
    background: #c2c2c2;
    color: #f2f2f2;
    cursor: default;

    span {
      background: #c2c2c2;
    }
  }

  span {
    box-shadow: 0px 2px 3px 0px #666;
    background: #191919;
    padding: 5px 25px;
    width: 90%;
    height: 80%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Button = ({ text, disabled }) => {
  return (
    <ButtonContainer type="submit" disabled={disabled}>
      <span>{text}</span>
    </ButtonContainer>
  );
};

export default Button;
