import "./App.css";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <Parallax pages={4}>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          backgroundImage: "https://picsum.photos/seed/1663174227206/1920/1080",
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer speed={1}>
        <h1>Virej</h1>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}>
        <h1>Dasani</h1>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
