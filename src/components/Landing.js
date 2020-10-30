import React from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";

const LandingStyled = styled.main`

`

export default function Landing(props) {
  let history = useHistory();
  function enter() {
    history.push("/about");
  }
  return (
    <LandingStyled>
      <div>
        <p>Full</p>
        <p>Stack</p>
        <p>Web</p>
        <p>Dev</p>
      </div>
      <div>
        <p>Alice Chang</p>
        <button onClick={enter}>Enter</button>
      </div>
    </LandingStyled>
  )
};