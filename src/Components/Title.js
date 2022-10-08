import "./title.css";

function Title() {
  return (
    <div>
      <div id="titleHead">
        <h1>Virej Dasani</h1>
        <h3 id="tagline">
          I code{" "}
          <span className="taglineHighlights">apps, games, websites</span> then{" "}
          <span className="taglineHighlights">make videos about it 👇</span>
        </h3>
        <iframe
          style={{ borderRadius: "15px", marginTop: "30px" }}
          title="Virej Dasani"
          src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UURzS48bskynAxoI38BFypfQ"
          width={window.innerWidth > 560 ? "560" : "280"}
          height={window.innerWidth > 560 ? "315" : "157.5"}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        {/* <div className="buttonTopMargin"></div>
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
        </div> */}
      </div>
    </div>
  );
}

export default Title;
