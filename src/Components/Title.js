import "./title.css";

function Title() {
  return (
    <div>
      <div id="titleHead">
        <h1>Virej Dasani</h1>
        <h3 id="tagline">
          I'm a <span className="taglineHighlights">17 year old</span> student,{" "}
          and self-taught{" "}
          <span className="taglineHighlights">Web, App, & Game developer</span>
        </h3>
        <div className="buttonTopMargin"></div>
        <div id="titleButtons">
          <a href="#skills">
            <button className="bn632-hover bn25">Skills</button>
          </a>
          <a href="#projects">
            <button className="bn632-hover bn25">Projects</button>
          </a>
          <a href="#honours">
            <button className="bn632-hover bn25">Honours</button>
          </a>
          <a href="#contact">
            <button className="bn632-hover bn25">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Title;
