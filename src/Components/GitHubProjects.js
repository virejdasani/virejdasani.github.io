import Card from "./Card";

function GitHubProjects(props) {
  return (
    <Card
      tags=" "
      name={"Other " + props.project}
      description={"Check out all of my websites, apps & games"}
      buttonText="Go to GitHub/VirejDasani"
      link="https://github.com/virejdasani"
      width="256px"
      height="125px"
      img="githubProjects.png"
    />
  );
}

export default GitHubProjects;
