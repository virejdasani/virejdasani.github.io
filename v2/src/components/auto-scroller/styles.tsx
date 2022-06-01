import styled, { css, keyframes } from "styled-components";

interface IContainer {
  margin?: string;
}

const Container = styled.div<IContainer>`
  position: relative;
  width: 100%;
  height: max-content;
  overflow: hidden;
  & > div > * {
    margin: ${(props) => (props.margin ? props.margin : 0)};
  }
`;

const movementAnimationPrimary = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const movementAnimationSecondary = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

interface IContentHolder {
  speed: string;
  direction:
    | "normal"
    | "reverse"
    | "alternate"
    | "alternate-reverse"
    | "initial"
    | "inherit";
}

const sharedContentStyles = css`
  display: flex;
  width: max-content;
`;

const ContentHolder = styled.div<IContentHolder>`
  ${sharedContentStyles}
  animation: ${movementAnimationPrimary} linear ${(props) =>
    props.speed} infinite;
  animation-direction: ${(props) => props.direction};
`;

const DuplicateContentHolder = styled.div<IContentHolder>`
  ${sharedContentStyles}
  position: absolute;
  top: 0;
  animation: ${movementAnimationSecondary} linear ${(props) => props.speed}
    infinite;
  animation-direction: ${(props) => props.direction};
`;

const ContentWrapper = styled.div`
  display: block;
  width: max-content;
  height: max-content;
`;

export default {
  Container,
  ContentHolder,
  DuplicateContentHolder,
  ContentWrapper,
};
