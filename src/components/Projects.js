import React from "react";
import styled from "styled-components";

import Project from "./Project";

const StyledProjects = styled.main`

`
let projectsArray = [{image: "", text:"test project"}];
export default function Projects(props) {
  return (
    <StyledProjects>
      {projectsArray.map(project => {
        return <Project 
          key={Date.now()}
          src={project.image}
          text={project.text}
        />
      })}
    </StyledProjects>
  )
}