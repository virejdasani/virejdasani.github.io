import "./card.css";
import Tag from "./Tag";

function Card(props) {
  return (
    <div id={props.small ? "cardSmall" : "card"}>
      <section className="card-row">
        <article className="card">
          {props.tags ? <h4 className="tags">{props.tags}</h4> : ""}

          {/* If an img prop is passed, img is created else, "" */}
          {props.img ? (
            <img
              src={"img/cardImgs/" + props.img}
              alt={props.name}
              height={props.height}
              width={props.width}
            />
          ) : (
            ""
          )}

          <h3 className="appName">
            <a href={props.link} target="_blank" rel="noreferrer">
              {props.name}
            </a>
          </h3>

          <p>
            {props.description}
            {/* This is for any youtube links the descriptionLinkText would have 'here' and the ending of the description would have 'watch the video ' */}
            <a href={props.descriptionLink}>{props.descriptionLinkText}</a>
          </p>

          {/* If buttonText is passed, only then make a button component */}
          {props.buttonText ? (
            <a
              href={props.link}
              className="buttonLink"
              target="_blank"
              rel="noreferrer"
            >
              {props.buttonText}
            </a>
          ) : (
            ""
          )}

          {/* If the twoButtons prop is passed, another button is created else, "" */}
          {props.twoButtons ? (
            <a href={props.link2} className="buttonLink">
              {props.buttonText2}
            </a>
          ) : (
            ""
          )}
          {props.date ? <p className="cardDate">{props.date}</p> : ""}
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
date

descriptionLinkText
descriptionLink

twoButtons
link2
buttonText2
*/

Card.defaultProps = {};

export default Card;
