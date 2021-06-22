import "./navbar.css";

import githubLogo from "../assets/githubLogo.png";

function Navbar() {
  return (
    <div>
      <a href="https://github.com/virejdasani">
        <img
          src={githubLogo}
          alt="Virej Dasani's GitHub Profile"
          height="20"
          width="20"
        />
      </a>
    </div>
  );
}

export default Navbar;
