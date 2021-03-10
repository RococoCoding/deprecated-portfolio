import React from "react";
import parse from "html-react-parser";
import StyledProject from "../styles/projectStyles";

export default function ProjectList(props) {
  const splitStatus = props.status.split(" ");
  const kebabStatus = splitStatus.join("-");

  return (
    <StyledProject className="project-container">
      <div className="img-title">
        <h3>{props.title}</h3>
        <p className={`${kebabStatus} project-status`}>{props.status}
        <a href={props.github} target="_blank" rel="noopener noreferrer"><img src="assets/github.png" className="projects-github-icon" alt="github icon"/></a>
        </p>
      </div>
      <div className="project-info">
        <div className="project-image-wrapper">
          {props.url ? <a href={props.url} target="_blank" rel="noopener noreferrer"><img src={props.src} alt={`Screenshot of ${props.title} website`} /></a> : <img src={props.src} alt={`Screenshot of ${props.title} website`} />}
        </div>
        <div className="project-info-text">
          <p>{parse(props.text)}</p>
          <ul>
            {props.features.map((el, idx) => {
              return <li key={idx}><span>{parse(el)}</span></li>;
            })}
          </ul>
        </div>
      </div>
    </StyledProject>
  );
}
