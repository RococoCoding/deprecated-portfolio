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
  em {
    color: var(--aqua);
  }
`

export default function About(props) {
  return (
    <AboutStyled>
      <Skills />
      <section className="about">
        <h2>About Me</h2>
        <p>I'm Alice, a full-time web dev student at Lambda School. Before coding I studied linguistics and worked as a court reporter. I love variety in all things and am always ready to dive into new experiences. I am a bit nerdy and can be shy -- I'm better online than in person -- but am very easy to get along with.</p>
        <h2>How I Can Help You</h2>
        <p>I can help you build your site using any of the skills I've listed to the left, but I'm also a <em>quick learner</em> so I can pick up any language, library or framework you need! I am exceptionally <em>smart</em>, <em>focused</em>, and a bit of a <em>workhorse</em>. I debug with an eye towards understanding why code behaves the way it does instead of the way I think it should so I can <em>learn from my mistakes</em>. Thanks to my experience court reporting, I have a keen eye for proofreading so I tend to write <em>clean code</em>.</p>
        <h2>What I'm Looking For</h2>
        <p>Most importantly, I'd like to join a team that values <em>honesty</em>, <em>open communication</em> and <em>support for each other</em>. I'm currently based in the US, but I'm interested in moving abroad, so I'm looking for <em>remote-only work</em> or something that will let me <em>relocate to outside the US</em>. (I have a degree in linguistics, so I'm quick to pick up new languages. I also have a passing familiarity with French, Spanish, and German, a moderate ability in Mandarin Chinese and am currently studying Finnish.)</p>
      </section>
    </AboutStyled>
  );
};