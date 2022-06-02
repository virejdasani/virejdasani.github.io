import React from "react";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      color: props.hiddenColor,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: props.visibleColor,
      transition: { ease: [1.455, 0.03, 0.515, 0.955], duration: 1.35 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
    <motion.div
      style={{
        display: "inline-block",
      }}
      whileHover={{ scale: 1.05, letterSpacing: "0.1em" }}
      whileTap={{ scale: 0.95 }}
    >
      <Tag>
        {words.map((word, index) => {
          return (
            // Wrap each word in the Wrapper component
            <Wrapper key={index}>
              {words[index].flat().map((element, index) => {
                return (
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                    }}
                    key={index}
                  >
                    <motion.span
                      style={{ display: "inline-block" }}
                      variants={item}
                    >
                      {props.link ? (
                        <a className="styledLink" href={props.link}>
                          {element}
                        </a>
                      ) : (
                        <p className="spacingDot">{element}</p>
                      )}
                    </motion.span>
                  </span>
                );
              })}
            </Wrapper>
          );
        })}
      </Tag>
    </motion.div>
  );
};

export default AnimatedCharacters;
