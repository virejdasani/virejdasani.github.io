import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Languages from "./Components/Languages";
import MobileProjects from "./Components/Projects/MobileProjects";

function App() {
  return (
    <div className="App">
      {/* Navbar with img links */}
      <Navbar />
      {/* Name title and software developer subtitle */}
      <Title />
      {/* Languages I know */}
      <Languages />
      {/* Mobile Projects */}
      <MobileProjects />
    </div>
  );
}

export default App;
