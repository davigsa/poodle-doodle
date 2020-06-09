import React, { Component } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { Link } from "react-router-dom";

import teamWork from "../assets/animations/teamWork.json";

const SignupContainer = styled.section`
  width: 90vw;
  height: 95vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
  }
`;

const AreaContainer = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const ImageContainer = styled.div``;

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

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: teamWork,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export class SignUp extends Component {
  render() {
    return (
      <SignupContainer>
        <AreaContainer>
          <ImageContainer>
            <Lottie options={defaultOptions} height={350} width={350} />
          </ImageContainer>
        </AreaContainer>
        <AreaContainer>
          <InputContainer>
            <TitleContainer>CADASTRO</TitleContainer>
            <TextField
              label="Seu melhor mail"
              id="filled-size-small"
              variant="filled"
              size="small"
              fullWidth
            />
            <TextField
              label="Como gostaria de ser conhecido?"
              id="filled-size-small"
              variant="filled"
              size="small"
              fullWidth
            />
            <TextField
              label="Sua melhor senha"
              id="filled-size-small"
              variant="filled"
              size="small"
              fullWidth
            />
            <ButtonContainer>
              <Button
                component={Link}
                to="/login"
                fullWidth
                variant="contained"
                color="primary"
              >
                Participar
              </Button>
            </ButtonContainer>
          </InputContainer>
        </AreaContainer>
        <TurnBackContainer to="/login">
          <ArrowBackRoundedIcon color="primary" />
          Já sou cadastrado
        </TurnBackContainer>
      </SignupContainer>
    );
  }
}

export default SignUp;
