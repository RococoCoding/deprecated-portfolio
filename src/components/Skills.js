import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

let codingSkillsArray = [{width: 70, language: "Javascript"}, {width: 60, language: "HTML/CSS"}, {width: 55, language: "React/Redux"}, {width: 1, language: "Node/Express"}, {width: 10, language: "Python"}];

let otherSkillsArray = [{width: 4, language: "Regex", extra: "ERROR +++ \\eR̨͚̱̥͕̲͒̆͑ͦ*RoЯ/ ++̸͓͚̽͌͆͐  Er\\ŗ̗̰͇̣͒ͭrê̸͎̦̳̳͙̦͆̑ͅr +\\E͕͖̭̮͖͉̭͐ͮ̀ͅr̠̜̤͓̖ͭ̎͌̏͢ͅ/̴̘̣̳̓̊*̡̮͒ͣͣ̑ͅͅͅÔ̹͕ͤ͆͡R̩̰̠͉̎ͮ͝/̩͈̦́͆̓́+"}, {width: 70, language: "Debugging"}];

const SkillsStyled = styled.section`
  width: 45%;
  font-size: 1.2rem;
`

function Skills() {
  return (
    <SkillsStyled>
      <h2>Core Skills</h2>
      <div className="skills">
        {codingSkillsArray.map(skill => {
          return <Skill key={Date.now()} language={skill.language} width={skill.width}/>
        })}
      </div>
      <h2>Other skills</h2>
      <div className="skills">
        {otherSkillsArray.map(skill => {
          return <Skill key={Date.now()} language={skill.language} width={skill.width} extra={skill.extra}/>
        })}
        {/* <p>Testing</p> 
        <div></div>
        <p>Meeting Deadlines</p>
        <div></div>
        <p>Empathy</p>
        <div></div>
        <p>Stenography</p>
        <div></div>
        <p>Mandarin Chinese</p>
        <div></div>
        <p>Baking</p> */}
      </div>
    </SkillsStyled>
  );
};

export default Skills;