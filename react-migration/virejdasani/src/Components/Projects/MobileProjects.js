import "../card.css";
import "./mobileProjects.css";
import HeadingTitle from "../HeadingTitle";
import Separator from "../Separator";

function MobileProjects() {
  return (
    <div id="mobileProjectsContainer">
      <HeadingTitle title="My Mobile Apps and Games" />
      <div className="scrolling-wrapper">
        <div id="card">
          <section className="card-row">
            <article className="card">
              <h3>
                <a href="">HII</a>
              </h3>
              <p>des</p>
            </article>
          </section>
        </div>
        <div id="card">
          <section className="card-row">
            <article className="card">
              <h3>
                <a href="">HI</a>
              </h3>
              <p>hi</p>
            </article>
          </section>
        </div>
        <div id="card">
          <section className="card-row">
            <article className="card">
              <h3>
                <a href="">hiiii</a>
              </h3>
              <p>hioi</p>
            </article>
          </section>
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default MobileProjects;
