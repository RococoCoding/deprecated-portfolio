import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import styled from "styled-components";

import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const AppStyled = styled.main`

  /* #region header */
  header {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey);
    padding: 2%;
    font-size: 1.3rem;
    text-align: right;
    height: 5vh;
  }

  h1 {
    font-size: 1.8rem;
  }

  nav {
    padding: 0 3%;
  }

  nav a {
    padding: 0 7%;
    border-right: 2px solid white;
    text-decoration: none;
    color: inherit;
  }

  nav a:hover {
    color: var(--aqua);
  }

  nav a:last-of-type {
    border-right: none;
  }

  .social-media {
    display: flex;
  }
  
  .social-media a {
    margin: 0 5%;
  }

  .social-media img {
    width: 90%;
  }

  .social-media img:hover {
    width: 120%;
  }

  .twit {
    border-radius: 50%;
  }
` 

function App() {
  return (
    <AppStyled>
      <header>
        <h1>Rococo Code</h1>
        <div className="social-media">
          <a href="mailto: alicetchang@gmail.com" target="_blank"><img src="assets/mail.png" alt="email icon"/></a>
          <a href="https://twitter.com/rocococode" target="_blank"><img class="twit" src="assets/twitter.png" alt="twitter mini icon"/></a>
          <a href="https://www.linkedin.com/in/rocococode/" target="_blank"><img src="assets/linkedin.png" alt="linkedin mini icon" class="linkedin"/></a>
          <a href="https://github.com/RococoCoding" target="_blank"><img src="assets/github.png" alt="github icon" /></a>
        </div>
        <nav>
          <Link to="/about">About</Link>
          {/* <Link to="/contact">Contact</Link> */}
          <Link to="/projects">Projects</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/projects">
          <Projects />
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
