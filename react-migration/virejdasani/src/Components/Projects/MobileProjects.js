import "../card.css";
import "./mobileProjects.css";
import HeadingTitle from "../HeadingTitle";
import Separator from "../Separator";
import cteBanner from "../../assets/projectLogos/cteBanner.png";

function MobileProjects() {
  return (
    <div id="mobileProjectsContainer">
      <HeadingTitle title="My Mobile Apps and Games" />
      <div className="scrolling-wrapper">
        {/* Convert to everything */}
        <div id="card">
          <section className="card-row">
            <article className="card">
              <img
                src={cteBanner}
                alt="Convert To Everything"
                height="125"
                width="256"
              />
              <h3 className="appName">
                <a href="https://play.google.com/store/apps/details?id=com.virej.converttoeverything">
                  Convert To Everything
                </a>
              </h3>
              <p>
                Convert To Everything is the fastest, most practical unit
                converter you've ever seen. This app removes the need of typing
                what unit you want to convert to. Instead, it converts to all
                available units! This makes it easier, faster and more practical
                to use than any other!
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.virej.converttoeverything"
                className="buttonLink"
              >
                Get it on the Google PlayStore
              </a>
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
