import Card from "./Card";

function GitHubProjects(props) {
  return (
    <Card
      name={"Other " + props.project}
      description={
        "Check out all of my projects on GitHub/VirejDasani. Even the ones that are still in development or haven't been released!"
      }
      buttonText="Go to GitHub/VirejDasani"
      link="https://github.com/virejdasani"
      width="256px"
      height="125px"
      img="githubProjects.png"
    />
  );
}

export default GitHubProjects;
