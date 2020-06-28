import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { shade } from "polished";

import Error from "../../assets/gifs/davidLuiz.gif";
import Button from "../../components/Button";

import logoBall from "../../assets/images/logo-ball.png";

const LogoContainer = styled.img`
  position: absolute;
  top: 20px;
  left: 50px;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`;

const Background = styled.img`
  position: fixed;
  width: 100vw;
  height: 100vh;
  filter: blur(1.2px) opacity(0.8);
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  color: ${shade(0.3, "#071e3d")};
`;

const Title = styled.h1`
  font-size: 20vw;

  @media (max-width: 768px) {
    font-size: 50vw;
  }
`;

const Paragraph = styled.p`
  font-size: 2vw;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  width: 200px;
  text-decoration: none;
`;

export default function error() {
  return (
    <>
      <Background src={Error} />
      <Link to="/">
        <LogoContainer src={logoBall} alt="" />
      </Link>
      <TextContainer>
        <Title>404</Title>
        <Paragraph>
          Uai, parece que a página que você ta procurando não existe.. que
          doidera véi
        </Paragraph>
        <Link to="/feed">
          <ButtonContainer>
            <Button text="Voltar" />
          </ButtonContainer>
        </Link>
      </TextContainer>
    </>
  );
}
