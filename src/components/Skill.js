import React from "react";
import SkillStyled from "../styles/skillStyles";

function Skill(props) {
  return (
    <SkillStyled>
      <p className="skill-text">{props.language}</p>
      <div className={`skill-bar ${props.language}`} style={{width: `${props.width}%`}}>{props.extra && props.extra}</div>
    </SkillStyled>
  )
}

export default Skill;