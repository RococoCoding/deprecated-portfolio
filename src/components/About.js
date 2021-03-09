import React from "react";
import Skills from "./Skills";
import AboutStyled from "../styles/aboutStyles";

export default function About(props) {
  return (
    <AboutStyled>
      <Skills />
      <section className="about">
        <h2>About Me</h2>
        <p>I'm Alice, a junior web developer. In my previous life I studied linguistics and worked as a court reporter. Coding is the natural progression of my interest in languages in all its forms. I love variety in all things and am always looking for new experiences.</p>
        <h2>What I Can Offer</h2>
        <p>I'm a <em>quick learner</em> so I can pick up any language, library or framework you need. I am <em>smart</em>, <em>focused</em>, and a bit of a <em>workhorse</em>. I debug with an eye towards understanding why code behaves the way it does so I can <em>learn from my mistakes</em>. I work well <em>independently</em>, but am also not afraid to ask (good) questions or reach out if I feel out of my depth. Thanks to my experience court reporting, I have a keen eye for proofreading so I tend to write <em>clean code</em>.</p>
        <h2>What I'm Looking For</h2>
        <p>Most importantly, I'd like to join a team that values <em>honesty</em>, <em>open communication</em> and <em>support for each other</em>. I <em>prefer backend or fullstack</em> roles that involve state management more than design. I'm currently based out of Brooklyn, NY, but I'm <em>willing to relocate without assistance</em>. (I strongly prefer places with colder climates.)</p>
      </section>
    </AboutStyled>
  );
};
