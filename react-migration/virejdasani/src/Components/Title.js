function Title() {
  return (
    <div>
      <div id="titleHead">
        <h2>VIREJ DASANI</h2>
        {displayDevText()}
        <span className="typewriterText" id="typewriterText"></span>
        <div id="underscore">_</div>
      </div>
    </div>
  );

  // Developer text animation
  // The code below is fragile. Don't assign variables to reused pieces of code like: var text = document.getElementById("typewriterText")
  // This will BREAK the code
  function displayDevText() {
    var words = [" WEB DEVELOPER", " APP DEVELOPER", " GAME DEVELOPER"];
    var visible = true;
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        document.getElementById("typewriterText").innerHTML =
          words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          letterCount += x;
          waiting = false;
        }, 500); // Time for text to reappear => higher = more time
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1200);
      } else if (waiting === false) {
        // Don't replace the below with `target`
        document.getElementById("typewriterText").innerHTML =
          words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 45); // Text appearing speed => higher = slower
    window.setInterval(function () {
      if (visible === true) {
        document.getElementById("underscore").style = "opacity: 0;";
        visible = false;
      } else {
        document.getElementById("underscore").style = "opacity: 1;";
        visible = true;
      }
    }, 300); // Cursor blinking speed => higher = slower
  }
}

export default Title;
