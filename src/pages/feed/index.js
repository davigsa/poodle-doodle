/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { shade } from "polished";

//import assets
import logoBall from "../../assets/images/logo-ball.png";
import doodlesBackground from "../../assets/images/doodle2.jpg";
import mestre from "../../assets/images/mestre.png";

//import components
import Post from "../../components/Post";
import Write from "../../components/Write";
import Person from "../../components/Person";

//import redux stuff
import { useDispatch, useSelector } from "react-redux";
import { fetchDoodles } from "../../redux/actions/dataAction";

const LogoContainer = styled.img`
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const FeedContainer = styled.div`
  position: absolute;
  top: 0;
  background: #f2f2f2;
  left: 50%;
  width: 40vw;
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

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const feed = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchDoodles());
  }, [dispatch]);

  console.log(content.doodles);
  const doodles = content.doodles.doodles;
  const { user } = content.data;
  return (
    <>
      <Background src={doodlesBackground} />
      <Person imageUrl={user.imageUrl} userHandle={user.handle} />
      <Write />
      <FeedContainer>
        <TitleContainer>
          <Link to="/">
            <LogoContainer src={logoBall} alt="" />
          </Link>
        </TitleContainer>
        {doodles.length === 0 ? (
          <Post
            owner="dungeon_master"
            userImage={mestre}
            createdAt={new Date().toISOString()}
            body="Não há doodles para você agora.."
          />
        ) : (
          doodles.map((doodle) => (
            <Post
              key={doodle.screamId}
              owner={doodle.userHandle}
              userImage={doodle.userImage}
              createdAt={doodle.createdAt}
              body={doodle.body}
            />
          ))
        )}
      </FeedContainer>
    </>
  );
};

export default feed;
