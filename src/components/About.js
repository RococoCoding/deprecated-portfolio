import React from "react";
import Skills from "./Skills";
import AboutStyled from "../styles/aboutStyles";

export default function About(props) {
  return (
    <AboutStyled>
      <Skills />
      <section className="about">
        <h2>About Me</h2>
        <p>I'm Alice, a full-stack web dev student at Lambda School. In my previous life I studied linguistics and worked as a court reporter. Coding is the natural progression of my interest in languages in all its forms. I love variety in all things and am always looking for new experiences.</p>
        <h2>What I Can Offer</h2>
        <p>I studied for both front and back end, but I'm more of a <em>back end person</em>. I discovered this about three days into learning Node when I realized I like writing error messages? 🤷‍♀️ As you can see, my design aesthetic is straight out of Geocities, but I am more than capable of building a beautiful site as long as someone else is in charge of designing it.</p>
        <p>I'm a <em>quick learner</em> so I can pick up any language, library or framework you need! I am <em>smart</em>, <em>focused</em>, and a bit of a <em>workhorse</em>. I debug with an eye towards understanding why code behaves the way it does so I can <em>learn from my mistakes</em>. Thanks to my experience court reporting, I have a keen eye for proofreading so I tend to write <em>clean code</em>. I'm <em>honest</em> about my abilities and <em>easy to get along with</em>.</p>
        <h2>What I'm Looking For</h2>
        <p>Most importantly, I'd like to join a team that values <em>honesty</em>, <em>open communication</em> and <em>support for each other</em>. I'm currently based in the US, but I'm interested in moving abroad, so I'm looking for <em>remote-only work</em> or something that will let me <em>relocate to outside the US</em>. (I have a degree in linguistics, so I'm quick to pick up new languages. I also have a passing familiarity with French, Spanish, and German, a moderate ability in Mandarin Chinese and am currently studying Finnish.)</p>
      </section>
    </AboutStyled>
  );
};