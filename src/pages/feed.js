import React, { Component } from "react";
import styled from "styled-components";

import NavBar from "../components/Navbar";

const FeedContainer = styled.div`
  margin-top: 80px;
`;

export class Feed extends Component {
  render() {
    return (
      <>
        <NavBar />
        <FeedContainer>
          <h1>Feed Page</h1>
        </FeedContainer>
      </>
    );
  }
}

export default Feed;
