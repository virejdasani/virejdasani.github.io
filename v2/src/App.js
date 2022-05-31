import "./App.css";
import { motion } from "framer-motion";
import AnimatedTitle from "./components/AnimatedTitle";
import AnimatedSubtitle from "./components/AnimatedSubtitle";

function App() {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
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
      text: "Web Dev  •  App Dev  •  Game Dev",
      hiddenColor: "#FF0088",
      visibleColor: "#fff",
    },
  ];

  return (
    <div className="App">
      <div className="landing">
        <div className="landing-text">
          {/*
              Virej Dasani
          */}
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
          {/*
              Web Dev  •  App Dev  •  Game Dev
          */}
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
        {/* absolute and responsive image */}
        <div className="landing-image-container">
          <img
            className="landing-image"
            src={require("./img/transparent-virej-welcome-memoji.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
