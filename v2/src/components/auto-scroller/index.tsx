import React, { useRef } from "react";
import Styled from "./styles.tsx";

interface IProps {
  children: JSX.Element[];
  margin?: string;
  speed: string;
  direction:
    | "normal"
    | "reverse"
    | "alternate"
    | "alternate-reverse"
    | "initial"
    | "inherit";
  pauseOnHover?: boolean;
}

const AutoScroller = ({
  children,
  margin,
  speed,
  direction,
  pauseOnHover,
}: IProps) => {
  const primaryScrollerRef = useRef(null);
  const secondaryScrollerRef = useRef(null);

  const mouseEnterHandler = () => {
    if (pauseOnHover) {
      if (!!primaryScrollerRef.current) {
        primaryScrollerRef.current.style.animationPlayState = "paused";
        primaryScrollerRef.current.style.webkitAnimationPlayState = "paused";
      }
      if (!!secondaryScrollerRef.current) {
        secondaryScrollerRef.current.style.animationPlayState = "paused";
        secondaryScrollerRef.current.style.webkitAnimationPlayState = "paused";
      }
    }
  };

  const mouseLeaveHandler = () => {
    if (pauseOnHover) {
      if (!!primaryScrollerRef.current) {
        primaryScrollerRef.current.style.animationPlayState = "running";
        primaryScrollerRef.current.style.webkitAnimationPlayState = "running";
      }
      if (!!secondaryScrollerRef.current) {
        secondaryScrollerRef.current.style.animationPlayState = "running";
        secondaryScrollerRef.current.style.webkitAnimationPlayState = "running";
      }
    }
  };

  return (
    <Styled.Container margin={margin}>
      <Styled.ContentHolder
        ref={primaryScrollerRef}
        direction={direction}
        speed={speed}
      >
        {children.map((c) => (
          <Styled.ContentWrapper
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {c}
          </Styled.ContentWrapper>
        ))}
      </Styled.ContentHolder>
      <Styled.DuplicateContentHolder
        ref={secondaryScrollerRef}
        direction={direction}
        speed={speed}
      >
        {children.map((c) => (
          <Styled.ContentWrapper
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {c}
          </Styled.ContentWrapper>
        ))}
      </Styled.DuplicateContentHolder>
    </Styled.Container>
  );
};

AutoScroller.defaultProps = {
  speed: "15s",
  direction: "normal",
};

export default AutoScroller;
