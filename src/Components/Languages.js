import "./languages.css";
import HeadingTitle from "./HeadingTitle";

function Languages() {
  return (
    <div id="langsContainer">
      <HeadingTitle title="Languages I've worked with" />
      <div id="langs">
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">JavaScript</h4>
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">Python</h4>
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">HTML</h4>
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">CSS</h4>
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">Java</h4>
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">C</h4>
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">C#</h4>
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">Go</h4>
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">Swift</h4>
        <h4 className="langSeparator">|</h4>
        <h4 id="highlightLang">CoffeeScript</h4>
        <h4 className="langSeparator">|</h4>
      </div>
    </div>
  );
}

export default Languages;
