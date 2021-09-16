import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Separator from "./Components/Separator";
// import Languages from "./Components/Languages";
import MobileProjects from "./Components/Projects/MobileProjects";
import DesktopProjects from "./Components/Projects/DesktopProjects";
import ExtensionsThemes from "./Components/Projects/ExtensionsThemes";
import NoteworthyProjects from "./Components/Projects/NoteworthyProjects";
import Achievements from "./Components/Projects/Achievements";

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
      <Separator />

      {/* Mobile Projects */}
      <MobileProjects />
      <Separator />

      {/* Desktop Projects */}
      <DesktopProjects />
      <Separator />

      {/* Extensions and Themes */}
      <ExtensionsThemes />
      <Separator />

      {/* Noteworthy Projects */}
      <NoteworthyProjects />
      <Separator />

      {/* Achievements */}
      <Achievements />
      <Separator />

      {/* Languages I know */}
      {/* <Languages /> */}
    </div>
  );
}

export default App;
