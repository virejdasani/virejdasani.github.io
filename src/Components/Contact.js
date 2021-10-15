import "./contact.css";

function Contact() {
  return (
    <div id="contact" className="gradientGalaxy">
      <div id="titleHead">
        <h2 id="getInTouch">Get in touch</h2>
        <div className="buttonTopMargin"></div>
        <div id="titleButtons">
          <a href="mailto: dasanivirej@gmail.com">
            <button className="bn632-hover bn26">Email</button>
          </a>
          <a href="https://discordapp.com/users/vrage#6779">
            <button className="bn632-hover bn26">Discord</button>
          </a>
          <a href="https://twitter.com/virejdasani">
            <button className="bn632-hover bn26">Twitter</button>
          </a>
          <a href="https://www.linkedin.com/in/virej-dasani-b64470209/">
            <button className="bn632-hover bn26">Linkedin</button>
          </a>
          <a href="https://instagram.com/virejdasani">
            <button className="bn632-hover bn26">Instagram</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
