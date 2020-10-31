import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import styled from "styled-components";

import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const AppStyled = styled.main`
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  footer p {
    font-size: 1.2rem;
    display: inline-block;
    vertical-align: 60%;
    padding-right: 0.5%;
  }
  footer img {
    width: 2%;
    padding: 0.5%;
  }
  .twit {
    border-radius: 50%;
  }
  header {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey);
    padding: 2%;
    font-size: 1.3rem;
    text-align: right;
  }
  h1 {
    font-size: 1.8rem;
  }
  header nav {
    width: 33%;
    margin: auto 0;
  }
  header nav a {
    padding: 0 7%;
    border-right: 2px solid white;
    text-decoration: none;
    color: inherit;
  }
  header a:hover {
    color: var(--aqua);
  }
  header a:last-of-type {
    border-right: none;
  }
`

function App() {
  return (
      <AppStyled>
        <header>
          <h1>Rococo Code</h1>
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
        <footer>
          <p>Say hi!</p>
            <a href="mailto: alicetchang@gmail.com" target="_blank"><img src="assets/mail.png" alt="email icon"/></a>
            <a href="https://twitter.com/rocococode" target="_blank"><img class="twit" src="assets/twitter.png" alt="twitter mini icon"/></a>
            <a href="https://www.linkedin.com/in/rocococode/" target="_blank"><img src="assets/linkedin.png" alt="linkedin mini icon" class="linkedin"/></a>
        </footer>
      </AppStyled>
  );
}

export default App;
