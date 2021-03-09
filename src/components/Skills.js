import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

let codingSkillsArray = [{width: 95, language: "JavaScript"}, {width: 80, language: "HTML/CSS"}, {width: 70, language: "React/Redux"}, {width: 70, language: "Node/Express"}, {width: 55, language: "SQL/Knex"}, {width: 55, language: "Python"}];

let otherSkillsArray = [{width: 4, language: "Regex", extra: "ERROR++ \\eR̨͚̱̥͕̲͒̆͑ͦ*RoЯ/ ++̸͓͚̽͌͆͐  Er\\ŗ̗̰͇̣͒ͭrê̸͎̦̳̳͙̦͆̑ͅr +\\E͕͖̭̮͖͉̭͐ͮ̀ͅr̠̜̤͓̖ͭ̎͌̏͢ͅ/̴̘̣̳̓̊*̡̮͒ͣͣ̑ͅͅͅÔ̹͕ͤ͆͡R̩̰̠͉̎ͮ͝/̩͈̦́͆̓́+"}, {width: 35, language: "git"}, {width: 35, language: "Jest/Cypress.io"}, {width: 95, language: "Stenography"}];

const SkillsStyled = styled.section`
  width: 45%;
  font-size: 1.2rem;
  .comfort {
    margin-top: -2%;
    font-size: 1rem;
    font-style: italic;
  }
  @media only screen and (max-width: 800px) {
    width: 96%;
    margin: 0 2%;
  }
  @media only screen and (max-width: 500px) {
    width: 96%;
    margin: 0 2%;
    h2 {
      font-size: 1.3rem;
    }
  }
`

function Skills() {
  return (
    <SkillsStyled>
      <h2>Core Skills</h2>
      <p class="comfort">Bars display my comfort level</p>
      <div className="skills">
        {codingSkillsArray.map((skill, idx) => {
          return <Skill key={idx} language={skill.language} width={skill.width}/>
        })}
      </div>
      <h2>Other skills</h2>
      <div className="skills">
        {otherSkillsArray.map((skill, idx) => {
          return <Skill key={idx} language={skill.language} width={skill.width} extra={skill.extra}/>
        })}
      </div>
    </SkillsStyled>
  );
};

export default Skills;
