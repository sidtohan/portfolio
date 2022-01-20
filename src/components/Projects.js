import React from "react";
const ProjectCard = ({ project, index }) => {
  let style;
  if (index === 0) {
    style = {
      gridColumn: "1/7",
      gridRow: "1/6",
    };
  } else if (index === 1) {
    style = {
      gridColumn: "7/11",
      gridRow: "1/6",
    };
  } else if (index === 2) {
    style = {
      gridColumn: "1/5",
      gridRow: "6/11",
    };
  } else {
    style = {
      gridColumn: "5/11",
      gridRow: "6/11",
    };
  }
  return (
    <div className="project-card" style={style}>
      <p className="project-info">{project.info}</p>
      <a
        href={project.live}
        className="project-live-link"
        target="_blank"
        rel="noreferrer"
      >
        Live Link
      </a>
      <a
        href={project.repo}
        className="project-repo-link"
        target="_blank"
        rel="noreferrer"
      >
        Repo Link
      </a>
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-holder">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
