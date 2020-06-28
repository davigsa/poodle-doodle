import React from "react";
import styled from "styled-components";
import { shade } from "polished";
import { FiCoffee, FiCompass, FiGlobe, FiMail } from "react-icons/fi";

const WriteContainer = styled.div`
  position: fixed;
  top: 0;
  background: #f2f2f2;
  left: 10%;
  width: 30vw;
  border-radius: 5px;

  @media (max-width: 768px) {
    position: static;
    width: 100vw;
  }
`;

const TitleContainer = styled.div`
  background: ${shade(0.3, "#071e3d")};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  background: #f2f2f2;
`;

const BodyArea = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const UserDetails = styled.ul`
  li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 10px;

    span {
      margin-left: 20px;
    }
  }
`;

const Perfil = ({
  userImage,
  userHandle,
  userBio,
  userSite,
  userLocation,
  userEmail,
}) => {
  return (
    <WriteContainer>
      <TitleContainer>
        <UserImage src={userImage} />
        <h2>@{userHandle}</h2>
      </TitleContainer>
      <BodyArea>
        <UserDetails>
          <li>
            <FiCoffee />
            <span>{userBio}</span>
          </li>
          <li>
            <FiGlobe />
            <span>{userSite}</span>
          </li>
          <li>
            <FiCompass />
            <span>{userLocation}</span>
          </li>
          <li>
            <FiMail />
            <span>{userEmail}</span>
          </li>
        </UserDetails>
      </BodyArea>
    </WriteContainer>
  );
};

export default Perfil;
