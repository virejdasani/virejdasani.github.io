import HeadingTitle from "../HeadingTitle";
import Card from "../Card";
import GitHubProjects from "../GitHubProjects";

function ExtensionsThemes() {
  return (
    <div id="extensionsThemesContainer">
      <HeadingTitle title="My Extensions and Themes" />
      <div className="scrolling-wrapper">
        <Card
          name="Offline Text To Speech"
          link="https://chrome.google.com/webstore/detail/offline-text-to-speech/ecnibbdjecjgllmkodkjnodmblmffkkp"
          img={"offlineTTS-small.png"}
          width="240"
          height="160"
          buttonText="Download for Chrome"
          description="Offline Text To Speech is a cool and functional little browser extension that can speak any text you type or paste into it!"
          twoButtons="true"
          link2="https://addons.mozilla.org/en-US/firefox/addon/offline-text-to-speech/"
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
          name="Where Am I?"
          link="https://chrome.google.com/webstore/detail/where-am-i/omdigpceoegkkeleilnnhcphljchbiec"
          img={"whereAmI-small.png"}
          width="240"
          height="160"
          buttonText="Download for Chrome"
          description="Where Am I is a browser extension that tells you your location and IP address so you can check if your VPN is on and working. Check it out in action on YouTube "
          descriptionLinkText="here"
          descriptionLink="https://www.youtube.com/watch?v=IsYDVUkcX6Y"
          twoButtons="true"
          link2="https://addons.mozilla.org/en-US/firefox/addon/where-am-i/"
          buttonText2="Download for Firefox"
        />
        <Card
          name="Play A Sound"
          link="https://chrome.google.com/webstore/detail/play-a-sound/lophbbmejgjiindjndmnanmepnnokldm/"
          img={"playASound-small.png"}
          width="240"
          height="160"
          buttonText="Download for Chrome"
          description="Play A Sound is a browser extension that plays a sound so you can quickly check if your audio is working."
          twoButtons="true"
          link2="https://addons.mozilla.org/en-US/firefox/addon/virej-dasani/"
          buttonText2="Download for Firefox"
        />
        <Card
          name="Subtly Dark"
          link="https://chrome.google.com/webstore/detail/subtly-dark/obilmikbelciljiacpipafnhcfegmnid"
          img={"subtlyDarkTheme-small.png"}
          width="240"
          height="160"
          buttonText="Download for Chrome"
          description="A low-key, subtle dark theme for your browser with dark shaded accents"
          twoButtons="true"
          link2="https://addons.mozilla.org/en-US/firefox/addon/subtly-dark/"
          buttonText2="Download for Firefox"
        />
        <Card
          name="Wildly RGB"
          link="https://chrome.google.com/webstore/detail/wildly-rgb/kbbhopkneegfmjhdkncmbaijdloobhgh"
          img={"wildlyRGB.png"}
          width="240"
          height="160"
          buttonText="Download for Chrome"
          description="Wildly RGB is a browser theme that has Red, Green and Blue accents everywhere on your browser. Wildly RGB makes your browser look WILD!"
          twoButtons="true"
          link2="https://addons.mozilla.org/en-US/firefox/addon/wildly-rgb/"
          buttonText2="Download for Firefox"
        />
        <Card
          name="HYDROXY"
          link="https://marketplace.visualstudio.com/items?itemName=VirejDasani.hydroxy"
          img={"hydroxyBanner.png"}
          width="240"
          height="160"
          buttonText="Download for VS Code"
          description="Hydroxy is a cool dark theme, inspired by Monokai, for Visual Studio Code. It comes in two flavours, Hydroxy Original and Hydroxy Alt Colors."
          twoButtons="true"
          link2="https://vscodethemes.com/e/VirejDasani.hydroxy"
          buttonText2="Preview the theme"
        />

        <GitHubProjects project="Extensions and Themes" />
      </div>
    </div>
  );
}

export default ExtensionsThemes;
