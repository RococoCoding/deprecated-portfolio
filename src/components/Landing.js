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
      <div className="landing-anim">
        <p className="landing-anim-full">Full</p>
        <p className="landing-anim-stack">Stack</p>
        <p className="landing-anim-web">Web</p>
        <p className="landing-anim-dev">Dev</p>
      </div>
      <div className="landing-intro">
        <h2>Alice Chang</h2>
        <p>is looking for a full-stack web dev job! She specializes in JavaScript, React/Redux and Node/Express.</p>
        <button onClick={enter}>Learn More</button>
      </div>
      
    </LandingStyled>
  )
};
