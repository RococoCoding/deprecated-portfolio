import styled from "styled-components";

const SkillStyled = styled.div`
  display: flex;
  padding: 1%;
  .skill-bar {
    background-color: darkturquoise;
    min-height: 10px;
    max-height: 30px;
    margin: 2% 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .skill-text {
    padding-right: 2%;
    margin: 2% 0;
    width: 30%;
    line-height: 1.8rem;
  }
  .Regex {
    background-color: red;
    padding-left: 2%;
    white-space: nowrap;
  }
`

export default SkillStyled;