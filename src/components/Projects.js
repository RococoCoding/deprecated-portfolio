import React from "react";
import styled from "styled-components";

import Project from "./Project";

const StyledProjects = styled.section`
  width: 100%;
`
let projectsArray = [
  {
    image: '/assets/projects/stacks.PNG', 
    title:"Stacks", 
    status: "Completed", 
    text: "<strong>Stacks</strong> was my first big project, built a month or two after I started learning coding. It is a <strong>personal library app</strong> that lets you create a database of your books.", 
    features: ["search", "sort", "filter", "local storage save"], 
    url: 'https://rocococoding.github.io/stacks/'
  },
  {
    image: '/assets/projects/sortinghat.png', 
    title:"GoT Sorting Hat", 
    status: "Completed",
    text: "The <strong>Game of Thrones Sorting Hat</strong> is a quick little quiz page I built for fun around Halloween.", 
    features: ["React class components", "React routing", "Responsive", "Humor"], 
    url:"https://react-sorting-hat-one.vercel.app/"
  },
];

export default function Projects(props) {
  return (
    <StyledProjects>
      {projectsArray.map(project => {
        return <Project 
          key={Date.now()}
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