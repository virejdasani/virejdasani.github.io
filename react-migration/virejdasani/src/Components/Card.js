import "./card.css";

function Card(props) {
  return (
    <div id="card">
      <section className="card-row">
        <article className="card">
          <h3>
            <a href={props.titleLink}>{props.title}</a>
          </h3>
          <p>{props.description}</p>
        </article>
      </section>
    </div>
  );
}

export default Card;
