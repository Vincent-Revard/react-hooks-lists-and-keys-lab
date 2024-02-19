import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const mappedProjects = projects.map(project => <ProjectItem {...project} key={project.id} />)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{mappedProjects}</div>
    </div>
  );
}

export default ProjectList;
