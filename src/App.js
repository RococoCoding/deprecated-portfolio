import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import styled from "styled-components";

import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const AppStyled = styled.main`
  footer img {
    width: 2%;
    padding: 0.5%;
  }
  .twit {
    border-radius: 50%;
  }
`

function App() {
 

  return (
      <AppStyled>
        <header>
          <Link to="/about">About | </Link>
          <Link to="/contact">Contact | </Link>
          <Link to="/projects">Projects</Link>
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
          <a href="mailto: alicetchang@gmail.com"><img src="assets/mail.png" alt="email icon"/></a>
          <a href="https://twitter.com/rocococode"><img class="twit" src="assets/twitter.png" alt="twitter mini icon"/></a>
          <a href="https://www.linkedin.com/in/rocococode/"><img src="assets/linkedin.png" alt="linkedin mini icon"/></a>

        </footer>
      </AppStyled>
  );
}

export default App;
