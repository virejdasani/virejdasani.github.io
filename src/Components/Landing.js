import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "./animations/AnimatedTitle";
import AnimatedSubtitle from "./animations/AnimatedSubtitle";

import Toggle from "./theme/Toggle";

function Landing({ toggleTheme }) {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const titleToAnimate = [
    {
      type: "heading1",
      text: "Virej",
      hiddenColor: "#FF0088",
      visibleColor: "#fb9fa4",
    },
    {
      type: "heading1",
      text: "Dasani",
      hiddenColor: "#FF0088",
      visibleColor: "#fb9fa4",
    },
  ];

  const subtitleToAnimate = [
    {
      type: "heading2",
      text: "About me",
      hiddenColor: "#FF0088",
      visibleColor: "#fff",
      link: "#about",
    },
    {
      type: "heading2",
      text: "  •  ",
      hiddenColor: "#FF0088",
      visibleColor: "#fff",
    },
    {
      type: "heading2",
      text: "skills",
      hiddenColor: "#FF0088",
      visibleColor: "#fff",
      link: "#skills",
    },
    {
      type: "heading2",
      text: "  •  ",
      hiddenColor: "#FF0088",
      visibleColor: "#fff",
    },
    {
      type: "heading2",
      text: "projects",
      hiddenColor: "#FF0088",
      visibleColor: "#fff",
      link: "#projects",
    },
  ];
  return (
    <div className="App" id="virej">
      <div className="landing">
        <div className="landing-text">
          <motion.div
            className="glendale title"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <div className="container">
              {titleToAnimate.map((item, index) => {
                return <AnimatedTitle {...item} key={index} />;
              })}
            </div>
          </motion.div>

          <motion.div
            className="akira subtitle"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <div className="container">
              {subtitleToAnimate.map((item, index) => {
                return <AnimatedSubtitle {...item} key={index} />;
              })}
            </div>
          </motion.div>
        </div>
        {/* welcome memoji */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="landing-image-container"
        >

          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="landing-image"
            src={require("../img/transparent-virej-welcome-memoji.png")}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
