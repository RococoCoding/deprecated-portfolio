import React from "react";
import styled from "styled-components";

import Project from "./Project";
import projectsArray from "../data/projects";

const StyledProjects = styled.section`
  width: 100%;
`
// add deployed on vercel, github, netflify, heroku

export default function Projects(props) {
  return (
    <StyledProjects>
      {projectsArray.map((project, idx) => {
        return <Project
          key={idx}
          src={project.image}
          text={project.text}
          title={project.title}
          status={project.status}
          url={project.url}
          features={project.features}
        />
      })}
    </StyledProjects>
  )
}