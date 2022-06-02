import "./App.css";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/theme/theme";
import { GlobalStyles } from "./components/theme/global";
import { useDarkMode } from "./components/theme/useDarkMode";

import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

function App() {
  const [theme, toggleTheme] = useDarkMode("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Navbar toggleTheme={toggleTheme} />
      <Landing />
      <About />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
