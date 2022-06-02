import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      // window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      // window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = null; // window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};
