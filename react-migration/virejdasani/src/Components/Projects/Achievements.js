import HeadingTitle from "../HeadingTitle";
import Card from "../Card";

function Achievements() {
  return (
    <div id="achievementsContainer">
      <HeadingTitle title="Some of my Achievements" />
      <div className="scrolling-wrapper">
        <Card
          name="Python Certification from Hackerrank"
          link="https://www.hackerrank.com/certificates/0e05337058dc"
          img={"pythonCertificate.png"}
          width="100%"
          date="Mar 24, 2021"
        />
        <Card
          name="Completed Hacktoberfest 2020"
          link="https://www.hackerrank.com/certificates/0e05337058dc"
          img={"hacktoberfestSwag.jpeg"}
          width="100%"
          date="Oct 2020"
        />
      </div>
    </div>
  );
}

export default Achievements;
