/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { shade } from "polished";

//import components
import Input from "../../components/Input";
import Button from "../../components/Button";

//import assets
import logoDog from "../../assets/images/logo-dog.png";

//import redux stuff
import { signIn } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const LoginContainer = styled.div`
  widows: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${shade(0.3, "#071e3d")};
`;

const ImageContainer = styled.div`
  width: 35%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const FormContainer = styled.form`
  background: #071e3d;
  width: 35%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 180px;
  justify-content: space-between;
  padding: 20px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ButtonContainer = styled.div`
  width: 30%;
`;

const RedirectButton = styled(Link)`
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  transition: color 0.5s;

  &:hover {
    color: #21e6c1;
  }
`;

function login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const isEmpty = login.email.trim() === "" || login.password.trim() === "";

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: login.email,
      password: login.password,
    };

    dispatch(signIn(userData, history));
  }
  return (
    <LoginContainer>
      <ImageContainer>
        <Image src={logoDog} alt="" />
      </ImageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Seu melhor email"
          value={login.email}
          onChange={(e) =>
            setLogin({ email: e.target.value, password: login.password })
          }
        />
        <Input
          type="password"
          placeholder="Sua senha"
          value={login.password}
          onChange={(e) =>
            setLogin({ email: login.email, password: e.target.value })
          }
        />
        <ButtonContainer>
          <Button text="ENTRAR" disabled={isEmpty} />
        </ButtonContainer>
      </FormContainer>
      <RedirectButton to="/signup">
        <FiArrowLeft /> Não tem conta?
      </RedirectButton>
    </LoginContainer>
  );
}

export default login;
