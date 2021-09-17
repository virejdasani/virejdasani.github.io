import "./skills.css";
import Card from "./Card";
import HeadingTitle from "./HeadingTitle";

// Don't add spaces or tabs to the skills or they won't show up on new lines

function Skills() {
  return (
    <div className="skills">
      <HeadingTitle title="My Skills" />
      <div className="scrolling-wrapper">
        <Card
          small="true"
          name="Advanced"
          description="Python
Java
JavaScript
HTML
CSS
Node JS
React JS
Electron JS
Neutralino JS
Bootstrap
Figma
Android SDK
Unity Engine
Git / GitHub
Linux
Vi / Vim"
        />
        <Card
          small="true"
          name="Intermediate"
          description="C
C#
XML
React Native
Selenium
PyAutoGUI
Tkinter
SQL
Firebase
PhotoShop
Gimp
Blender
Material UI"
        />
        <Card
          small="true"
          name="Exposure"
          description="Go Lang
CoffeeScript
Swift
SwiftUI
XCode
Django
Flask
jQuery
PyGame
Lua & Love"
        />
      </div>
    </div>
  );
}

export default Skills;
