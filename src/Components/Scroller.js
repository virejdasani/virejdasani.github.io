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
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/text%20editors/vscode.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/ides/android-studio.svg" />,
  <Logo src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/ides/intellij.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/cloud/firebase.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/cloud/gitlab.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/frameworks/nodejs.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/ides/pycharm.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/frameworks/android.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/frameworks/boostrap.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/cloud/heroku.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/frameworks/react.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/others/npm.svg" />,
  <Logo src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/f994c418a134b58c4aec11152f6a4a33fa89da26/text%20editors/sublime.svg" />,
  <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />,
  <Logo src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />,
  // <Logo src="" />,
  // <Logo src="" />,
  // <Logo src="" />,
  <Logo src="https://preview.redd.it/tu3gt6ysfxq71.png?auto=webp&s=10ab55d9dc09e7ed6ea59bd5916800a5272d5969" />,
];

const Scroller = () => {
  const { height, width } = useWindowDimensions();
  const [scrollers, setScrollers] = useState([]);

  useEffect(() => {
    const tempScrollers = [];
    for (
      let i = 0;
      i < Math.ceil((height * 0.4) / (LOGO_HEIGHT + LOGO_MARGIN * 2)) + 2;
      i++
    ) {
      tempScrollers.push(
        <AutoScroller
          margin={`${LOGO_MARGIN}px 30px`}
          speed="100s"
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
