import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AutoScroller from "./auto-scroller/index.tsx";

import { useWindowDimensions } from "./utils/hooks.tsx";

const LOGO_HEIGHT = 75;
const LOGO_MARGIN = 20;

const OuterWrapper = styled.div`
  width: 150vw;
  margin-top: -25vh;
  margin-left: -25vw;
`;

const Container = styled.div`
  transform: rotate(-18deg);
`;

const Logo = styled.img`
  width: 150px;
  height: ${LOGO_HEIGHT}px;
  object-fit: contain;
  object-position: center;
  filter: grayscale(100%);

  opacity: 0.5;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
    filter: initial;
  }
`;

const Logos = [
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png" />,
];

const Scroller = () => {
  const { height, width } = useWindowDimensions();
  const [scrollers, setScrollers] = useState([]);

  useEffect(() => {
    const tempScrollers = [];
    for (
      let i = 0;
      i < Math.ceil((height * 1.5) / (LOGO_HEIGHT + LOGO_MARGIN * 2)) + 2;
      i++
    ) {
      tempScrollers.push(
        <AutoScroller
          margin={`${LOGO_MARGIN}px 30px`}
          speed="150s"
          direction={i % 2 === 0 ? "normal" : "reverse"}
        >
          {Logos}
        </AutoScroller>
      );
    }
    setScrollers(tempScrollers);
  }, [height]);

  return (
    <OuterWrapper>
      <Container>{scrollers}</Container>
    </OuterWrapper>
  );
};

export default Scroller;
