import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "./animations/AnimatedTitle";
import Scroller from "./Scroller";

function Skills() {
  const titleToAnimate = [
    {
      type: "heading2",
      text: "My Skills",
      hiddenColor: "#FF0088",
      visibleColor: "#fb9fa4",
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

      <Scroller />
    </div>
  );
}

export default Skills;
