import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Separator from "./Components/Separator";
import Languages from "./Components/Languages";
import MobileProjects from "./Components/Projects/MobileProjects";
import DesktopProjects from "./Components/Projects/DesktopProjects";

function App() {
  return (
    <div className="App">
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

      {/* Languages I know */}
      {/* <Languages /> */}
    </div>
  );
}

export default App;
