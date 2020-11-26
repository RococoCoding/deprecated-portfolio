import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Contact from "./components/Contact";
import WritingList from "./components/WritingList";
import AppStyled from "./styles/appStyles";


function App() {
  return (
    <AppStyled>
      <header className="header">
        <h1>Rococo Code</h1>
        <div className="social-media">
          <a href="mailto: alicetchang@gmail.com" target="_blank" rel="noreferrer"><img src="assets/mail.png" alt="email icon" /></a>
          <a href="https://twitter.com/rocococode" target="_blank" rel="noreferrer"><img className="twit" src="assets/twitter.png" alt="twitter mini icon" /></a>
          <a href="https://www.linkedin.com/in/rocococode/" target="_blank" rel="noreferrer"><img src="assets/linkedin.png" alt="linkedin mini icon" className="linkedin" /></a>
          <a href="https://github.com/RococoCoding" target="_blank" rel="noreferrer"><img src="assets/github.png" alt="github icon" /></a>
        </div>
        <nav>
          <Link to="/about">About</Link>
          {/* <Link to="/contact">Contact</Link> */}
          <Link to="/projects">Projects</Link>
          {/* <Link to="/landing">Landing</Link> */}
          <Link to="/writing">Writing</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/writing">
          <WritingList />
        </Route>
        <Route path="/projects">
          <ProjectList />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path={["/about", "/", "/home"]}>
          <About />
        </Route>
      </Switch>
    </AppStyled>
  );
}

export default App;
