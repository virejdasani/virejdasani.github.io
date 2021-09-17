import HeadingTitle from "../HeadingTitle";
import Card from "../Card";
import GitHubProjects from "../GitHubProjects";

function DesktopProjects() {
  return (
    <div id="desktopProjectsContainer">
      <HeadingTitle title="My Desktop Apps and Games" />
      <div className="scrolling-wrapper">
        <Card
          name="Keystroke Count"
          link="https://virejdasani.github.io/KeystrokeCount/"
          img={"keystrokeCountBanner.png"}
          width="256"
          height="125"
          buttonText="Get Keystroke Count"
          description="Keystroke Count is an open-source, cross-platform, desktop app that you can use to get data for your keystrokes! The app features a keyboard heatmap to visually show what keys you used the most! Also, all data is stored locally and NEVER collected"
        />
        <Card
          name="Responsivize"
          link="https://virejdasani.github.io/Responsivize/"
          img={"responsivizeBanner.png"}
          width="256"
          height="125"
          buttonText="Get Responsivize"
          description="Responsivize is an open-source, cross-platform, desktop app that is used to develop responsive websites! With Responsivize, you can test your web apps on popular devices like iPhones, Android phones, iPads, MacBooks, and you can even set custom dimension devices, that you set the dimensions for!"
        />
        <Card
          name="Geniemoji"
          link="https://virejdasani.github.io/Geniemoji/"
          img={"geniemojiBanner.png"}
          width="256"
          height="125"
          buttonText="Get Geniemoji"
          description="Geniemoji is an app that makes using emojis on desktop simpler than ever
          It works on operating systems including Windows, MacOS and Linux!
          It is an open source, desktop app built using the Electron framework
          Its purpose is to serve you with the most relevant emojis based on your command! Check out Geniemoji in action on YouTube "
          descriptionLink="https://youtu.be/2k41mwqKN9A"
          descriptionLinkText="here"
        />
        <Card
          name="Code Box"
          link="https://github.com/virejdasani/CodeBox/blob/master/README.md#codebox"
          img={"codeBox-Banner.png"}
          width="256"
          height="125"
          buttonText="Get Code Box"
          description="CodeBox is a sandbox coding environment with HTML, CSS and JavaScript editors and a live preview panel! It features the same editor used in VS Code; this means that it has autocomplete, syntax highlighting, and a lot of other features that we all know and love from VS Code. With Code Box, the live preview panel reloads automatically, every time a key is pressed!"
        />
        <Card
          name="Meeting Assistant"
          link="https://github.com/virejdasani/MeetingAssistant/blob/master/README.md#meeting-assistant-is-an-open-source-free-app-that-helps-you-join-recurring-online-meetings-with-ease-with-meeting-assistant-you-can-bring-all-your-online-meeting-links-to-one-place-from-where-you-can-join-meetings-with-a-simple-click-of-a-button"
          img={"meetingAssisBanner.png"}
          width="256"
          height="125"
          buttonText="Get Meeting Assistant"
          description="Meeting Assistant is an open source, free app that helps you join recurring online meetings with ease. With Meeting Assistant, you can bring all your online meeting links to one place from where you can join them with a single click!"
        />
        <Card
          name="Rapid Read"
          link="https://github.com/virejdasani/RapidRead/blob/master/README.md#download-rapid-read-here"
          img={"rapidReadBanner.png"}
          width="256"
          height="125"
          buttonText="Get Rapid Read"
          description="Rapid Read is an open source app that helps you read quicker! We can read quicker if we remove the need for our eyes to travel from one word to the next when reading. Rapid Read does just that!"
        />
        <GitHubProjects project="Desktop Apps And Games" />
      </div>
    </div>
  );
}

export default DesktopProjects;
