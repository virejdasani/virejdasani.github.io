import "./title.css";

function Title() {
  return (
    <div>
      <div id="titleHead">
        <h1>Virej Dasani</h1>
        <h3 id="tagline">
          I'm a <span className="taglineHighlights">16 year old</span> student,{" "}
          and self-taught{" "}
          <span className="taglineHighlights">Web, App, & Game developer</span>
        </h3>
        <div className="buttonTopMargin"></div>
        <div id="titleButtons">
          <button className="bn632-hover bn25">Skills</button>
          <button className="bn632-hover bn25">Projects</button>
          <button className="bn632-hover bn25">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Title;
