import HeadingTitle from "../HeadingTitle";
import Card from "../Card";
import GitHubProjects from "../GitHubProjects";

function MobileProjects() {
  return (
    <div id="mobileProjectsContainer">
      <HeadingTitle title="My Mobile Apps and Games" />
      <div className="scrolling-wrapper">
        <Card
          name="Cuboidal Drift"
          link="https://play.google.com/store/apps/details?id=com.VirejDasani.CuboidalDrift"
          img={"cuboidalDriftBanner.png"}
          width="256"
          height="125"
          buttonText="Get it on Google Play Store"
          description="Cuboidal Drift is a casual, fun indie game where you play as a cube and your objective is to complete levels and not explode to dangerous spikes!
          This game is completely open-source so you too can contribute to the game by doing stuff like adding new levels."
        />
        <Card
          name="Convert To Everything"
          link="https://play.google.com/store/apps/details?id=com.virej.converttoeverything"
          img={"cteBanner.png"}
          width="256"
          height="125"
          buttonText="Get it on Google Play Store"
          description="Convert To Everything is the fastest, most practical unit converter you've ever seen.
          This app removes the need of typing what unit you want to convert to. Instead, it converts to all available units!
          This makes it easier, faster and more practical to use than any other!"
        />
        <Card
          name="Electrified"
          link="https://play.google.com/store/apps/details?id=com.virej.ELECTRIFIED"
          img={"electrifiedBanner.png"}
          width="256"
          height="125"
          buttonText="Get it on Google Play Store"
          description="Electrified is a A fun game you can play offline. The goal is to not get ELECTRIFIED!
          The entirety of this game was made in under 12 hours as part of a challenge for a YouTube video!
          Watch the video "
          descriptionLink="https://youtu.be/t-Yt436DSx0"
          descriptionLinkText="here"
        />
        <Card
          name="Virtual Dice Roller"
          link="https://play.google.com/store/apps/details?id=com.virej.virtualdice"
          img={"virtualDiceBanner.jpg"}
          width="256"
          height="125"
          buttonText="Get it on Google Play Store"
          description="Say goodbye to dice falling on the floor or underneath the couch!
          This is a fun, minimal app, for the perfect board game experience.
          It consists of six distinct dice complete with animations and sounds.
          Virtual Dice Roller is the first Android app I ever made."
        />
        <Card
          name="Bill / Check Splitter"
          link="https://play.google.com/store/apps/details?id=com.virej.splityourbill"
          img={"billBanner.jpg"}
          width="256"
          height="125"
          buttonText="Get it on Google Play Store"
          description="A handy, lightweight app to share your Bill/Check.
          With the app, you can split your expenses between friends and family equally in places like restaurants."
        />
        <Card
          name="Voice to Text Converter"
          link="https://play.google.com/store/apps/details?id=com.virej.voicetotext"
          img={"vttBanner.jpg"}
          width="256"
          height="125"
          buttonText="Get it on Google Play Store"
          description="A minimal, user friendly app that converts voice to text accurately using Google voice recognition.
          It has a dark and light mode, and allows copying of text to clipboard."
        />
        <GitHubProjects project="Mobile Apps And Games" />
      </div>
    </div>
  );
}

export default MobileProjects;
