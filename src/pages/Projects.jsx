import React from "react";

const Projects = ({ repo }) => {
  //   console.log(repo.items);
  return (
    <div>
      <h1>Project Pages</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://api.github.com/search/repositories?q=user:dRahul97+fork:true&sort=updated&per_page=10&type=Repositories"
  );

  const repo = await res.json();

  return {
    props: {
      repo,
    },
  };
}

export default Projects;
