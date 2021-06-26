import "./card.css";

function Card(props) {
  return (
    <div id="card">
      <section className="card-row">
        <article className="card">
          <img
            src={"img/projectLogos/" + props.img}
            alt={props.name}
            height={props.height}
            width={props.width}
          />
          <h3 className="appName">
            <a href={props.link}>{props.name}</a>
          </h3>
          <p>
            {props.description}
            {/* This is for any youtube links the descriptionLinkText would have 'here' and the ending of the description would have 'watch the video ' */}
            <a href={props.descriptionLink}>{props.descriptionLinkText}</a>
          </p>
          <a href={props.link} className="buttonLink">
            {props.buttonText}
          </a>
        </article>
      </section>
    </div>
  );
}

/*
PROPS:
name
link
img
height
width
buttonText
description
descriptionLinkText
descriptionLink
*/

export default Card;
