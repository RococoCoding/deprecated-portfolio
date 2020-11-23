import React from "react";
import parse from "html-react-parser";
import StyledProject from "../styles/projectStyles";

export default function ProjectList(props) {
  const splitStatus = props.status.split(" ");
  const kebabStatus = splitStatus.join("-");

  return (
    <StyledProject className="project-container">
      <div className="img-title">
        <h3>{props.title} - <span className={kebabStatus}>{props.status}</span></h3>
        <a href={`${props.url}`} target='_new' > <img src={props.src} alt={`Screenshot of ${props.title} website`}/></a>
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