import HeadingTitle from "../HeadingTitle";
import Card from "../Card";
import GitHubProjects from "../GitHubProjects";
import "./featuredwork.css";

function FeaturedWork() {
  return (
    <div id="featuredProjectsContainer">
      <HeadingTitle title="Featured Projects" />
      <div className="scrolling-wrapper">
        <Card
          name="Dailymoji"
          tags="React • Firebase • Chakra UI"
          link="https://virejdasani.github.io/Dailymoji/"
          img={"dailymoji-banner-1024x500.png"}
          width="256"
          height="125"
          buttonText="Check it out"
          description="Track your daily activities with emoji, add context later."
        />
        <Card
          tags="Python"
          name="pythOwO"
          link="https://github.com/virejdasani/pythOwO/"
          img={"pythowo-banner.png"}
          width="256"
          height="125"
          buttonText="Check it out"
          description="A programming language written in Python. UwU."
        />
        <Card
          tags="Electron • JS • HTML • CSS"
          name="Responsivize"
          link="https://virejdasani.github.io/Responsivize/"
          img={"responsivizeBanner.png"}
          width="256"
          height="125"
          buttonText="Check it out"
          description="A must-have tool to develop responsive websites"
        />
        <Card
          name="Cuboidal Drift"
          tags="C# • Unity • Google Play Games"
          link="https://virejdasani.github.io/CuboidalDrift/"
          img={"cuboidalDriftBanner.png"}
          width="256"
          height="125"
          buttonText="Check it out"
          description="A casual, open-source 3D indie game made with Unity"
        />
        <Card
          name="In Your Face"
          tags="Typescript • HTML • CSS"
          link="https://marketplace.visualstudio.com/items?itemName=VirejDasani.in-your-face"
          img={"inyourface-smallBanner.png"}
          width="256"
          height="125"
          buttonText="Check it out"
          description="VS Code extension that shows faces based on errors"
        />
        <Card
          tags="Electron • JS • HTML • CSS"
          name="Code Box"
          link="https://virejdasani.github.io/CodeBox/"
          img={"codeBox-Banner.png"}
          width="256"
          height="125"
          buttonText="Get Code Box"
          description="A web dev sandbox desktop app, inspired by CodePen"
        />
        <Card
          tags="Electron • JS • HTML • CSS"
          name="Geniemoji"
          link="https://virejdasani.github.io/Geniemoji/"
          img={"geniemojiBanner.png"}
          width="256"
          height="125"
          buttonText="Check it out"
          description="An app that makes using emoji on desktops simpler than ever"
        />
        <Card
          name="Hack This Page"
          tags="JavaScript • HTML • CSS"
          link="https://virejdasani.github.io/HackThisPage/"
          img={"hackThisPage-small.png"}
          width="256"
          height="125"
          buttonText="Check it out"
          description="A browser extension that makes websites editable!"
        />
        <Card
          name="Commited"
          tags="Python • Git"
          link="https://github.com/virejdasani/Commited"
          buttonText="Check it out"
          description="The first ever GitHub repo to have over 3 million commits!"
          img={"commited-banner.png"}
          width="256"
          height="125"
        />

        <GitHubProjects project="projects" />
      </div>
    </div>
  );
}

export default FeaturedWork;
