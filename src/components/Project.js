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
        <p className={`${kebabStatus} project-status`}>{props.status}</p>
        {props.url ? <a href={props.url} target="_blank" rel="noopener noreferrer"><img src={props.src} alt={`Screenshot of ${props.title} website`}/></a> : <img src={props.src} alt={`Screenshot of ${props.title} website`}/>}
      </div>
      <div className="project-info">
        <p>{parse(props.text)}</p>
        <ul>
          {props.features.map((el, idx) =>{
            return <li key={idx}><span>{parse(el)}</span></li>
          })}
        </ul>
      </div>
    </StyledProject>
  ) 
}
