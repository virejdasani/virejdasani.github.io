import "./navbar.css";
import homeLogo from "../assets/homeLogo.png";
import instagramLogo from "../assets/instagramLogo.png";
import twitterLogo from "../assets/twitterLogo.png";
import youtubeLogo from "../assets/youtubeLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import playstoreLogo from "../assets/playstoreLogo.png";
import devLogo from "../assets/devLogo.svg";
import githubLogo from "../assets/githubLogo.png";

function Navbar() {
  return (
    <div id="navbar">
      {/* HOME */}
      <a href="https://virejdasani.github.io">
        <img src={homeLogo} alt="Virej Dasani" height="22" width="22" />
      </a>
      {/* Instagram */}
      <a href="https://instagram.com/virejdasani">
        <img
          src={instagramLogo}
          alt="Virej Dasani's Instagram"
          height="22"
          width="22"
        />
      </a>
      {/* Twitter */}
      <a href="https://twitter.com/virejdasani">
        <img
          src={twitterLogo}
          alt="Virej Dasani's Twitter"
          height="22"
          width="22"
        />
      </a>
      {/* YouTube */}
      <a href="https://www.youtube.com/channel/UCRzS48bskynAxoI38BFypfQ">
        <img
          src={youtubeLogo}
          alt="Virej Dasani's YouTube"
          height="22"
          width="27"
        />
      </a>
      {/* Linkedin */}
      <a href="https://www.linkedin.com/in/virej-dasani-b64470209/">
        <img
          src={linkedinLogo}
          alt="Virej Dasani's Linkedin"
          height="22"
          width="22"
        />
      </a>
      {/* PlayStore */}
      <a href="https://play.google.com/store/apps/developer?id=Virej+Dasani">
        <img
          src={playstoreLogo}
          alt="Virej Dasani's Play Store apps & games"
          height="22"
          width="18"
        />
      </a>
      {/* Dev */}
      <a href="https://dev.to/virejdasani">
        <img src={devLogo} alt="Virej Dasani's Dev.to" height="22" width="18" />
      </a>
      {/* GitHub */}
      <a href="https://github.com/virejdasani">
        <img
          src={githubLogo}
          alt="Virej Dasani's GitHub Profile"
          height="22"
          width="22"
        />
      </a>
    </div>
  );
}

export default Navbar;
