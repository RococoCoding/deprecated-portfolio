import React from "react";
import {useHistory} from "react-router-dom";
import LandingStyled from "../styles/landingStyles"

export default function Landing(props) {
  let history = useHistory();

  function enter() {
    history.push("/about");
  }
 
  return (
    <LandingStyled>
      <div>
        <p className="landing-anim-full">Full</p>
        <p className="landing-anim-stack">Stack</p>
        <p className="landing-anim-web">Web</p>
        <p className="landing-anim-dev">Dev</p>
      </div>
      <div>
        <p>Alice Chang</p>
        <button onClick={enter}>Enter</button>
      </div>
    </LandingStyled>
  )
};