import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import styled from "styled-components";

import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const AppStyled = styled.main`
  
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
            social media icons
          </footer>
      </AppStyled>
  );
}

export default App;
