import React from "react";
import Link from "next/link";

const Projects = ({ clone_url, forks_count, name, stargazers_count }) => {
  return (
    <div>
      <Link href={clone_url}>
        <div
          style={{
            border: "1px solid",
            width: "95%",
            height: "100px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>{name}</h3>
          <div style={{ display: "flex", width: "90%", gap: "10px" }}>
            <h4>Star : {stargazers_count}</h4>
            <h4>Fork: {forks_count}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
