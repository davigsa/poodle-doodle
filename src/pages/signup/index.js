/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { shade } from "polished";

//import redux stuff
import { signUp } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

//import assets
import dog from "../../assets/images/dog.svg";
import logoBall from "../../assets/images/logo-ball.png";

//import components
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background: ${shade(0.3, "#071e3d")};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.img`
  position: absolute;
  top: 20px;
  left: 50px;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`;

const ImageContainer = styled.img`
  width: 45%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const FormContainer = styled.form`
  width: 45%;
  padding: 20px;
  height: 300px;
  min-height: 250px;
  background: #071e3d;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const ButtonContainer = styled.div`
  width: 40%;

  @media (max-width: 800px) {
    width: 50%;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  background: white;
  font-size: 12.5px;
  padding: 10px;
  border-radius: 5px;
  max-width: 50%;
  background: #ff8a5c;

  p {
  }
  blockquote {
    margin-top: 5px;
    li {
      font-weight: bold;
      margin-top: 3px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const signup = () => {
  const content = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const [register, setRegister] = useState({
    email: "",
    handle: "",
    password: "",
    confirmPassword: "",
  });

  const isEmpty =
    register.email.trim() === "" ||
    register.handle.trim() === "" ||
    register.password.trim() === "" ||
    register.confirmPassword.trim() === "";

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: register.email,
      handle: register.handle,
      password: register.password,
      confirmPassword: register.confirmPassword,
    };

    dispatch(signUp(userData, history));
  }

  function renderLoading() {
    const { loading } = content.ui;

    return loading && <Loading />;
  }

  return (
    <SignupContainer>
      {renderLoading()}
      <InfoContainer>
        <p>
          Ei! Que bom ver você aqui. Infelizmente ainda estamos na nossa versão
          1.0, ou seja, algumas coisas talvez não funcionem como deveriam,
          espero que você entenda.{" "}
        </p>
        <blockquote>
          Sendo assim, espero que você:
          <ul>
            <li>· Utilize um email no formato válido;</li>
            <li>· Não utilize um nick muito grande</li>
            <li>· Utilize uma senha com mais de 6 caracteres</li>
          </ul>
        </blockquote>
      </InfoContainer>
      <Link to="/">
        <LogoContainer src={logoBall} alt="" />
      </Link>
      <ImageContainer src={dog} />
      <FormContainer onSubmit={handleSubmit}>
        <h2>CADASTRO</h2>
        <Input
          type="email"
          placeholder="Seu melhor email"
          value={register.email}
          onChange={(e) =>
            setRegister({
              email: e.target.value,
              handle: register.handle,
              password: register.password,
              confirmPassword: register.confirmPassword,
            })
          }
        />
        <Input
          placeholder="Como quer ser conhecido?"
          value={register.handle}
          onChange={(e) =>
            setRegister({
              email: register.email,
              handle: e.target.value,
              password: register.password,
              confirmPassword: register.confirmPassword,
            })
          }
        />
        <Input
          type="password"
          placeholder="Sua senha"
          value={register.password}
          onChange={(e) =>
            setRegister({
              email: register.email,
              handle: register.handle,
              password: e.target.value,
              confirmPassword: register.confirmPassword,
            })
          }
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          value={register.confirmPassword}
          onChange={(e) =>
            setRegister({
              email: register.email,
              handle: register.handle,
              password: register.password,
              confirmPassword: e.target.value,
            })
          }
        />
        <ButtonContainer>
          <Button text="REGISTRAR" disabled={isEmpty} />
        </ButtonContainer>
      </FormContainer>
    </SignupContainer>
  );
};

export default signup;
