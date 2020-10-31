import React from "react";
import styled from "styled-components";
import Skills from "./Skills";

const AboutStyled = styled.main`
  display: flex;
  justify-content: space-between;
  margin:2% 3%;
  .about{
    width: 45%;
  }
  h2 {
    font-size: 1.8rem;
    margin: 3% 0;
    font-weight: bold;
  }
  .about p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-bottom: 3%;
  }
`

export default function About(props) {
  return (
    <AboutStyled>
      <Skills />
      <section className="about">
        <h2>About Me</h2>
        <p>I'm Alice, a web dev student at Lambda School learning JS, React, Redux, Node and a little bit of Python.</p> 
        <p>I've always been a computer nerd, but never really did much coding beyond a computer applications course in high school. I had been feeling a bit restless the past few years, which resulted in my taking some time off to go to Maine to learn how to build a wooden rowboat??? I didn't know anything about wood or boats or tools, but I'm the kind of person who enjoys diving into new things. What I realized from that experience was that I wanted to make things, but also that I would very, very much wanted to keep all my fingers. Thus, my renewed interest in coding. </p>
        <p>The timing seemed right when the pandemic hit and it seemed like a pretty good idea to hole myself up in front of a computer for a few months. I was the kid who did logic puzzles for fun, so I'm enjoying it a lot! I love solving problems so I get really in debugging and I love being able to make functional apps that people can use and interact with.</p>
      </section>
    </AboutStyled>
  );
};