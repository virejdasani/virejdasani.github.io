import "./navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      {/* HOME */}
      <a href="https://virejdasani.github.io">
        <img
          src={"img/homeLogo.png"}
          alt="Virej Dasani"
          height="22"
          width="22"
        />
      </a>
      {/* Instagram */}
      <a href="https://instagram.com/virejdasani">
        <img
          src={"img/instagramLogo.png"}
          alt="Virej Dasani's Instagram"
          height="22"
          width="22"
        />
      </a>
      {/* Twitter */}
      <a href="https://twitter.com/virejdasani">
        <img
          src={"img/twitterLogo.png"}
          alt="Virej Dasani's Twitter"
          height="22"
          width="22"
        />
      </a>
      {/* YouTube */}
      <a href="https://www.youtube.com/channel/UCRzS48bskynAxoI38BFypfQ">
        <img
          src={"img/youtubeLogo.png"}
          alt="Virej Dasani's YouTube"
          height="22"
          width="27"
        />
      </a>
      {/* Linkedin */}
      <a href="https://www.linkedin.com/in/virej-dasani-b64470209/">
        <img
          src={"img/linkedinLogo.png"}
          alt="Virej Dasani's Linkedin"
          height="22"
          width="22"
        />
      </a>
      {/* PlayStore */}
      <a href="https://play.google.com/store/apps/developer?id=Virej+Dasani">
        <img
          src={"img/playstoreLogo.png"}
          alt="Virej Dasani's Play Store apps & games"
          height="22"
          width="18"
        />
      </a>
      {/* Dev */}
      <a href="https://dev.to/virejdasani">
        <img
          src={"img/devLogo.svg"}
          alt="Virej Dasani's Dev.to"
          height="22"
          width="18"
        />
      </a>
      {/* GitHub */}
      <a href="https://github.com/virejdasani">
        <img
          src={"img/githubLogo.png"}
          alt="Virej Dasani's GitHub Profile"
          height="22"
          width="22"
        />
      </a>
    </div>
  );
}

export default Navbar;
