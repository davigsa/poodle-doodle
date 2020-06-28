import React from "react";
import styled from "styled-components";
import { shade } from "polished";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const PerfilContainer = styled(Link)`
  position: fixed;
  top: 10px;
  background: ${shade(0.3, "#071e3d")};
  left: 10%;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  text-decoration: none;
  transition: color 0.5s;
  color: #f2f2f2;

  &:hover {
    color: #21e6c1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  background: #f2f2f2;
  border-radius: 50%;
`;

const UserHandle = styled.h3`
  margin-left: 10px;
`;

const IconMore = styled(FiChevronDown)`
  margin-left: 10px;
`;

const Person = ({ imageUrl, userHandle }) => {
  return (
    <PerfilContainer to={`/user/${userHandle}`}>
      <Image src={imageUrl} />
      <UserHandle>@{userHandle}</UserHandle>
      <IconMore />
    </PerfilContainer>
  );
};

export default Person;
