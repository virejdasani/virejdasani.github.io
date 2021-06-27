import HeadingTitle from "../HeadingTitle";
import Card from "../Card";
import GitHubProjects from "../GitHubProjects";

function ExtensionsThemes() {
  return (
    <div id="extensionsThemesContainer">
      <HeadingTitle title="My Extensions and Themes" />
      <div className="scrolling-wrapper">
        <Card
          name="Hack This Page"
          link="https://chrome.google.com/webstore/detail/hack-this-page/nbfegodimhenhkghjeppighcbpdinhdp"
          img={"hackThisPage-small.png"}
          width="240"
          height="160"
          buttonText="Download for Chrome"
          description="Hack This Page is an awesome browser extension with which you can 'hack' any website! Check it out in action on YouTube "
          descriptionLinkText="here"
          descriptionLink="https://www.youtube.com/watch?v=678LAl7E76U"
          twoButtons="true"
          link2="https://addons.mozilla.org/en-US/firefox/addon/hack-this-website/"
          buttonText2="Download for Firefox"
        />
        <Card
          name="Luminous New Tab"
          link="https://chrome.google.com/webstore/detail/luminous-new-tab/gakanaedbiohimbhbddcilejbpdmobdo"
          img={"luminousTab-small.png"}
          width="240"
          height="160"
          buttonText="Download for Chrome"
          description="Luminous new tab is a beautiful new tab browser extension that has an animated gradient background. New tabs will show the time and let you do Google searches too! Check it out in action on YouTube "
          descriptionLinkText="here"
          descriptionLink="https://www.youtube.com/watch?v=BWXQjgYy9-w"
          twoButtons="true"
          link2="https://addons.mozilla.org/en-US/firefox/addon/luminous-tab/"
          buttonText2="Download for Firefox"
        />
        <Card
          name="Hack This Page"
          link="https://chrome.google.com/webstore/detail/hack-this-page/nbfegodimhenhkghjeppighcbpdinhdp"
          img={"hackThisPage-small.png"}
          width="240"
          height="160"
          buttonText="Download for Chrome"
          description="Hack This Page is an awesome browser extension with which you can 'hack' any website! Check it out in action on YouTube "
          descriptionLinkText="here"
          descriptionLink="https://www.youtube.com/watch?v=678LAl7E76U"
          twoButtons="true"
          link2="https://addons.mozilla.org/en-US/firefox/addon/hack-this-website/"
          buttonText2="Download for Firefox"
        />
        <Card
          name="Hack This Page"
          link="https://chrome.google.com/webstore/detail/hack-this-page/nbfegodimhenhkghjeppighcbpdinhdp"
          img={"hackThisPage-small.png"}
          width="240"
          height="160"
          buttonText="Download for Chrome"
          description="Hack This Page is an awesome browser extension with which you can 'hack' any website! Check it out in action on YouTube "
          descriptionLinkText="here"
          descriptionLink="https://www.youtube.com/watch?v=678LAl7E76U"
          twoButtons="true"
          link2="https://addons.mozilla.org/en-US/firefox/addon/hack-this-website/"
          buttonText2="Download for Firefox"
        />

        <GitHubProjects project="Desktop Apps And Games" />
      </div>
    </div>
  );
}

export default ExtensionsThemes;
