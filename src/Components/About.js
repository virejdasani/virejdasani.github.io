import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "./animations/AnimatedTitle";

function About() {
  const titleToAnimate = [
    {
      type: "heading2",
      text: "About Me",
      hiddenColor: "#FF0088",
      visibleColor: "#fb9fa4",
    },
  ];

  const subtitleToAnimate = [
    {
      type: "paragraph",
      text: "I'm a 17 year old student",
      // hiddenColor: "#FF0088",
      // visibleColor: "#fff",
      class: "about-description",
    },
    {
      type: "paragraph",
      text: "and self-taught Web, App, & Game developer",
      // hiddenColor: "#FF0088",
      // visibleColor: "#fff",
      class: "about-description",
    },
  ];

  // I'm a 17 year old student, and self-taught Web, App, & Game developer

  return (
    <div id="about" className="about">
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
      >
        <div className="container">
          {subtitleToAnimate.map((item, index) => {
            return <AnimatedTitle {...item} key={index} />;
          })}
        </div>
      </motion.div>
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
    </div>
  );
}

export default About;
