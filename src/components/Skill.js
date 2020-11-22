import React from "react";
import styled from "styled-components";

const SkillStyled = styled.div`
  display: flex;
  padding: 1%;
  .skill-bar {
    background-color: darkturquoise;
    min-height: 8px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .skill-text {
    padding-right: 2%;
    width: 30%;
  }
  .Regex {
    background-color: red;
    padding-left: 2%;
    white-space: nowrap;
  }
`

function Skill(props) {
  return (
    <SkillStyled>
      <p className="skill-text">{props.language}</p>
      <div className={`skill-bar ${props.language}`} style={{width: `${props.width}%`}}>{props.extra && props.extra}</div>
    </SkillStyled>
  )
}

export default Skill;