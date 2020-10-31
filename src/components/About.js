import React from "react";
import styled from "styled-components";
import Skills from "./Skills";

const AboutStyled = styled.main`

`

export default function About(props) {
  return (
    <AboutStyled>
      <Skills />
      <section className="About">
        <p>About Me</p>
      </section>
    </AboutStyled>
  );
};