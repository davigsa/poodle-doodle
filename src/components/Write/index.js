import React, { useState } from "react";
import styled from "styled-components";
import { shade } from "polished";

//import redux stuff
import { useDispatch } from "react-redux";
import { postDoodle } from "../../redux/actions/dataAction";

//import components
import Button from "../Button";

const WriteContainer = styled.div`
  position: fixed;
  top: 20%;
  background: #f2f2f2;
  left: 10%;
  width: 30vw;
  border-radius: 5px;

  @media (max-width: 768px) {
    position: static;
    width: 100vw;
  }
`;

const TitleContainer = styled.h2`
  background: ${shade(0.3, "#071e3d")};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  color: #f2f2f2;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const BodyArea = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 130px;
  resize: vertical;
  border: none;
  outline: none;
  padding: 10px;

  &::placeholder {
    font-style: italic;
    color: #ccc;
  }
`;

const ButtonContainer = styled.div`
  width: 50%;
  margin-top: 20px;
`;

const Write = () => {
  const dispatch = useDispatch();
  const [doodle, setDoodle] = useState("");

  const isEmpty = doodle.trim() === "";

  function handleSubmit(e) {
    e.preventDefault();
    const doodleData = {
      body: doodle,
    };
    dispatch(postDoodle(doodleData));
    setDoodle("");
  }

  return (
    <WriteContainer>
      <TitleContainer>DOODLE`IT NOW!</TitleContainer>
      <BodyArea onSubmit={handleSubmit}>
        <TextArea
          placeholder="Fale aqui.."
          value={doodle}
          onChange={(e) => setDoodle(e.target.value)}
        />
        <ButtonContainer>
          <Button type="submit" text="POSTAR" disabled={isEmpty} />
        </ButtonContainer>
      </BodyArea>
    </WriteContainer>
  );
};

export default Write;
