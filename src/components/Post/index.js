import React from "react";
import styled from "styled-components";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { shade, lighten } from "polished";
import { FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostContainer = styled.div`
  position: relative;
  border-top: 1px solid #fff;
  width: 100%;
  padding: 20px;
  display: flex;
  color: ${shade(0.3, "#071e3d")};
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
`;

const PostContent = styled.div`
  width: 85%;
  padding: 0 0 0 10px;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-end;
`;

const PostOwner = styled(Link)`
  text-decoration: none;
  transition: color 0.2s;
  color: ${shade(0.3, "#071e3d")};
  font-weight: bold;

  &:hover {
    color: ${lighten(0.2, "#071e3d")};
  }
`;

const PostTime = styled.span`
  margin-left: 10px;
  color: #ccc;
`;

const PostBody = styled.p`
  margin-top: 10px;
`;

const MoreInformation = styled(FiMoreVertical)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Post = ({ owner, userImage, createdAt, body }) => {
  const content = useSelector((state) => state);

  function renderInformation() {
    const { handle } = content.data.user;
    return handle === owner && <MoreInformation />;
  }

  return (
    <PostContainer>
      <Image src={userImage} />
      <PostContent>
        <HeaderContainer>
          <PostOwner to={`/user/${owner}`}>@{owner}</PostOwner>
          <PostTime>
            | {formatDistanceToNow(parseISO(createdAt), { locale: ptBR })}
          </PostTime>
        </HeaderContainer>
        <PostBody>{body}</PostBody>
      </PostContent>
      {renderInformation()}
    </PostContainer>
  );
};

export default Post;
