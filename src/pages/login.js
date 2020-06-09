import React, { Component } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import animaPaper from "../assets/animations/animaPaper.json";

const LoginContainer = styled.section`
  width: 40vw;
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
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 600px) {
    width: 100%;
    height: 40vh;
  }
`;

const TitleContainer = styled.h2`
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 60%;
`;

const TurnBackContainer = styled(Link)`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  transition: color 0.25s;

  &:hover {
    color: #757ce8;
  }
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animaPaper,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export class Login extends Component {
  render() {
    return (
      <>
        <LoginContainer>
          <AnimationContainer>
            <Lottie options={defaultOptions} height={250} width={250} />
          </AnimationContainer>
          <InputContainer>
            <TitleContainer>NOME DO APP</TitleContainer>
            <TextField
              label="Seu mail"
              id="filled-size-small"
              variant="filled"
              size="small"
              fullWidth
            />
            <TextField
              label="Sua senha"
              id="filled-size-small"
              variant="filled"
              size="small"
              fullWidth
            />
            <ButtonContainer>
              <Button
                component={Link}
                to="/feed"
                fullWidth
                variant="contained"
                color="primary"
              >
                Entrar
              </Button>
            </ButtonContainer>
          </InputContainer>
        </LoginContainer>
        <TurnBackContainer to="/signup">
          <ArrowBackRoundedIcon color="primary" />
          Fazer cadastro
        </TurnBackContainer>
      </>
    );
  }
}

export default Login;
