import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import rainbow from "../../assets/animations/rainbow.json";

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rainbow,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Loading() {
  return (
    <LoadingWrapper>
      <Lottie options={defaultOptions} height={100} width={100} />
    </LoadingWrapper>
  );
}
