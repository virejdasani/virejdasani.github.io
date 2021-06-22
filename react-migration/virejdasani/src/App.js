import {displayDevText} from "./Components/Functions";

function App() {
  return (
    <div className="App">
      <div className="titleHead">
        <h2>VIREJ DASANI</h2>
        {displayDevText()}
        <span className="typewriterText" id="typewriterText"></span>
        <div className="headUnderscore">&#95;</div>
      </div>
    </div>
  );
}

export default App;
