import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "./animations/AnimatedTitle";
import Scroller from "./Scroller";
import Card from "./Card";

function Skills() {
  const titleToAnimate = [
    {
      type: "heading2",
      text: "My Skills",
      hiddenColor: "#FF0088",
      visibleColor: "#fb9fa4",
      class: "skills-title",
    },
  ];

  return (
    <div id="skills" className="skills">
      <motion.div
        className="akira"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.05 }}
        // variants={{
        //   visible: { opacity: 1, scale: 1 },
        //   hidden: { opacity: 0, scale: 0 },
        // }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.03,
            },
          },
        }}
      >
        <div className="container">
          {titleToAnimate.map((item, index) => {
            return <AnimatedTitle {...item} key={index} />;
          })}
        </div>
      </motion.div>

      <motion.div
        className="poppins about-subtitle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.0,
            },
          },
        }}
      ></motion.div>
      <motion.div className="about-image-container">
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.location.href = "#virej";
          }}
          className="about-image"
          src={require("../img/virej-wave-memoji.png")}
          alt=""
        />
      </motion.div>

      <div className="scrolling-wrapper">
        <Card
          small="true"
          name="Advanced"
          description="Python
Java
JavaScript
HTML
CSS
Node JS
React JS
Tailwind CSS
TailBlocks
Electron JS
Neutralino JS
Bootstrap
Figma
Android SDK
Unity Engine
Git / GitHub
Linux
Vi / Vim"
        />
        <Card
          small="true"
          name="Intermediate"
          description="C
C#
XML
React Native
Selenium
PyAutoGUI
Tkinter
SQL
Firebase
PhotoShop
Gimp
Blender
Material UI"
        />
        <Card
          small="true"
          name="Exposure"
          description="Go Lang
CoffeeScript
Swift
SwiftUI
XCode
Django
Flask
jQuery
PyGame
Lua & Love"
        />
      </div>

      <div className="scroller-container">
        <Scroller />
      </div>
    </div>
  );
}

export default Skills;
