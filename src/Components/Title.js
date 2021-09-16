import "./title.css";

function Title() {
  return (
    <div>
      <div id="titleHead">
        <h1>Virej Dasani</h1>
        <h3 id="tagline">
          I'm a <span className="taglineHighlights">16 year old</span> student,{" "}
          and self-taught <span className="taglineHighlights">Web</span>,{" "}
          <span className="taglineHighlights">App</span>, &{" "}
          <span className="taglineHighlights">Game</span> developer
        </h3>
      </div>
    </div>
  );
}

export default Title;
