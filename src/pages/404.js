import React, { Component } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import notFound from "../assets/animations/notFound.json";

const LoginContainer = styled.section`
  width: 60vw;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div``;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: notFound,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export class NotFound extends Component {
  render() {
    return (
      <LoginContainer>
        <AnimationContainer>
          <Lottie options={defaultOptions} height={250} width={400} />
        </AnimationContainer>
        <TextContainer>
          <h1>Ah, não conseguimos encontrar essa página :(</h1>
          <p>Tem certeza de que está no caminho certo?</p>
        </TextContainer>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
        >
          Voltar para o Início
        </Button>
      </LoginContainer>
    );
  }
}

export default NotFound;
