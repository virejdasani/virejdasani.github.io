import HeadingTitle from "../HeadingTitle";
import Card from "../Card";
import GitHubProjects from "../GitHubProjects";

function NoteworthyProjects() {
  return (
    <div id="noteworthyProjectsContainer">
      <HeadingTitle title="Other Noteworthy Projects" />
      <div className="scrolling-wrapper">
        <Card
          name="Alexis"
          link="https://www.youtube.com/watch?v=LchUl9pueLw"
          img={"alexisBanner.jpg"}
          width="256"
          height="125"
          buttonText="Alexis on YouTube"
          description="Alexis is an open source Personal Robot Butler made using Python.
          It can do everything from tell you jokes, open websites, and even send emails, all using voice or text input!
          Alexis is my first Open Source project."
          twoButtons="true"
          link2="https://github.com/virejdasani/Alexis"
          buttonText2="Get Alexis"
        />
        <Card
          name="Whatsapp Bot"
          link="https://www.youtube.com/watch?v=m5hQBDigz7g"
          img={"whatsappBot.jpg"}
          width="256"
          height="125"
          buttonText="Whatsapp Bot on YouTube"
          description="Whatsapp Bot is open source, made with Python, and can be used to send someone a WhatsApp message from the command line as many times as you want. (Even a million times to prank someone with non-stop notifications!)"
          twoButtons="true"
          link2="https://github.com/virejdasani/WhatsappBot"
          buttonText2="Get Whatsapp Bot"
        />
        <Card
          name="FizzBuzz Everything"
          link="https://github.com/virejdasani/FizzBuzz-Everything"
          img={"fbEverything.png"}
          width="256"
          height="125"
          buttonText="Check out FizzBuzz Everything"
          description="FizzBuzz Everything is a community driven GitHub repository with the FizzBuzz program written in a whole lotta languages!"
          twoButtons="true"
          link2="https://github.com/virejdasani/FizzBuzz-EVERYTHING/blob/master/WhatIsFizzBuzz.md"
          buttonText2="What is FizzBuzz?"
        />
        <Card
          name="Make Java Easy"
          link="https://github.com/virejdasani/Make-Java-Easy/blob/master/README.md#make-java-easy"
          buttonText="Check out how it works"
          description="Make Java Easy is a library I made to make Java as easy as Python.
          It is made for beginners and functions are made similar to Python so anyone familiar with Python can use Java with ease!"
          twoButtons="true"
          link2="https://github.com/virejdasani/Make-Java-Easy"
          buttonText2="Get Make Java Easy"
        />
        <Card
          name="Offline TTS"
          link="https://www.npmjs.com/package/offline-tts"
          buttonText="Check it out on NPM"
          description="Offline-TTS is a NPM package that makes using the text-to-speech web API very easy to implement to your website!
          `npm i offline-tts`"
        />
        <Card
          name="Commited"
          link="https://github.com/virejdasani/Commited"
          buttonText="Check it out on GitHub"
          description="Commited is the first GitHub repository ever to have over 3 Million commits!"
        />
        <Card
          name="Location Guess Scam!"
          link="https://www.youtube.com/watch?v=Q-IubDMBR6k"
          buttonText="Check it out on YouTube"
          description="Location guesser is a website I made along with a YouTube video to raise awareness that the popup prompts that say
          'This website wants to know your location - allow?'
          are a scam.
          No website needs to ask permission to know your location.
          "
          twoButtons="true"
          link2="https://virejdasani.github.io/Location-Guesser/"
          buttonText2="Check out the website"
        />
        <Card
          name="Golden Ratio"
          link="https://github.com/virejdasani/FibonacciSequence-GoldenRatio"
          buttonText="Check it out here"
          description="This CLI program was made to demonstrate the Fibonacci sequence and the Golden Ratio - 1.618. It is written in both Python and JavaScript"
        />
        <Card
          name="QR Code Generator"
          link="https://github.com/virejdasani/QRCodeGenerator"
          buttonText="Check it out here"
          description="This CLI program, written in Python, simply takes text input and generates a QR code with the input embedded in it. It can be used to generate QR codes for websites"
        />
        <Card
          name="Password Generator"
          link="https://github.com/virejdasani/StrongPasswordGenerator"
          buttonText="Check it out here"
          description="Password generator is a CLI Python program which helps you generate a strong password. It has in-built parameter options like choosing password length"
        />
        <Card
          name="PDF Searcher Bot"
          link="https://github.com/virejdasani/PdfSearcherBot"
          buttonText="Check it out here"
          description="PDF Searcher Bot is a program that scrapes the web for only the most relevant PDF according to your search input"
        />
        <Card
          name="CLI Treasure Finder"
          link="https://github.com/virejdasani/CLITreasureFinder"
          buttonText="Check it out here"
          description="CLI Treasure Finder is written in Java, and as the name suggests, a command line game where the user has to try to find the Hidden Treasure!"
        />
        <Card
          name="Hack Anything Prank"
          link="https://github.com/virejdasani/HackAnythingPrank"
          buttonText="Check it out here"
          description="Hack Anything Prank is a command line prank program that, when run, lets you 'hack' anything from Instagram accounts to NASA and makes you look like the ultimate HACKER-MAN"
        />

        <GitHubProjects project="Noteworthy Projects" />
      </div>
    </div>
  );
}

export default NoteworthyProjects;
