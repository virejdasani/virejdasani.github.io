import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Separator from "./Components/Separator";
import Skills from "./Components/Skills";
import FeaturedWork from "./Components/Projects/FeaturedWork";
import MobileProjects from "./Components/Projects/MobileProjects";
import DesktopProjects from "./Components/Projects/DesktopProjects";
import ExtensionsThemes from "./Components/Projects/ExtensionsThemes";
import NoteworthyProjects from "./Components/Projects/NoteworthyProjects";
import Achievements from "./Components/Projects/Achievements";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {/* Navbar with img links */}
      <Navbar />

      {/* Name title and software developer subtitle */}
      <Title />

      <Separator id="skills" />

      {/* Skills */}
      <Skills />

      <Separator id="projects" />

      <FeaturedWork />

      {/* <MobileProjects />
      <Separator />

      <DesktopProjects />
      <Separator />

      <ExtensionsThemes />
      <Separator />

      <NoteworthyProjects /> */}

      <Separator id="honours" />

      <Achievements />

      <Separator />

      <Contact />
    </div>
  );
}

export default App;
