import styled from "styled-components";

const SkillStyled = styled.div`
  display: flex;
  padding: 1%;
  .skill-bar {
    background-color: darkturquoise;
    min-height: 30px;
    max-height: 30px;
    margin: 2% 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .skill-bar-wrapper {
    width: 68%;
  }
  .skill-text {
    padding-right: 2%;
    margin: 1% 0;
    width: 30%;
    line-height: 1.8rem;
  }
  .Regex {
    background-color: red;
    padding-left: 2%;
    white-space: nowrap;
  }

  @media only screen and (max-width: 500px) {
  .Regex {
    font-size: 0.9rem;
    white-space: wrap;
  }
  .skill-bar-wrapper {
    width: 68%;
  }
  .skill-bar {
    text-overflow: hidden;
    min-height: 15px;
    max-height: 15px;
    margin: 2% 0 0 8%;
  }
  .skill-text {
    font-size: 1rem;
    margin: 0;
    line-height: 1.2rem;
  }
}
`

export default SkillStyled;