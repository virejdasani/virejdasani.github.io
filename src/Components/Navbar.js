import "./navbar.css";
import Toggle from "./theme/Toggle";

function Navbar({ toggleTheme }) {
  return (
    <div id="navbar">
      {/* HOME */}
      <a href="#virej">
        <img
          src={require("../img/homeLogo.png")}
          alt=""
          height="22"
          width="22"
        />
      </a>
      {/* Instagram */}
      <a href="https://instagram.com/virejdasani">
        <img
          src={require("../img/instagramLogo.png")}
          alt=""
          height="22"
          width="22"
        />
      </a>
      {/* Twitter */}
      <a href="https://twitter.com/virejdasani">
        <img
          src={require("../img/twitterLogo.png")}
          alt=""
          height="22"
          width="22"
        />
      </a>
      {/* YouTube */}
      <a href="https://www.youtube.com/channel/UCRzS48bskynAxoI38BFypfQ">
        <img
          src={require("../img/youtubeLogo.png")}
          alt=""
          height="23"
          width="22"
        />
      </a>
      {/* Linkedin */}
      <a href="https://www.linkedin.com/in/virej-dasani-b64470209/">
        <img
          src={require("../img/linkedinLogo.png")}
          alt=""
          height="22"
          width="22"
        />
      </a>
      {/* PlayStore */}
      <a href="https://play.google.com/store/apps/developer?id=Virej+Dasani">
        <img
          src={require("../img/playstoreLogo.png")}
          alt=""
          height="22"
          width="21"
        />
      </a>
      {/* Dev */}
      <a href="https://dev.to/virejdasani">
        <img
          src={require("../img/devLogo.png")}
          alt=""
          height="22"
          width="22"
        />
      </a>
      {/* GitHub */}
      <a href="https://github.com/virejdasani">
        <img
          src={require("../img/githubLogo.png")}
          alt=""
          height="24"
          width="22"
        />
      </a>
      <Toggle onToggle={toggleTheme}>Toggle theme</Toggle>
    </div>
  );
}

export default Navbar;
