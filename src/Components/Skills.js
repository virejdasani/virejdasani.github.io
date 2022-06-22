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
TypeScript
HTML
CSS
Node JS
React JS
Firebase
Tailwind CSS
Electron JS
Neutralino JS
Bootstrap
Material UI
Chakra UI
Android SDK
Unity Engine
Figma
Git & GitHub"
        />
        <Card
          small="true"
          name="Intermediate"
          description="C
C#
React Native
Selenium
PyAutoGUI
Tkinter
SQL
PhotoShop
Gimp
Blender"
        />
        <Card
          small="true"
          name="Exposure"
          description="Go Lang
CoffeeScript
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
