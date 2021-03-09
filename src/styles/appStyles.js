import styled from "styled-components";

const AppStyled = styled.main`

/* #region header */
header {
  display: flex;
  justify-content: space-between;
  background-color: var(--grey);
  padding: 2%;
  font-size: 1.8rem;
  height: 3vh;
}

h1 {
  width: 25%;
  font-size: 2rem;
  text-align: left;
  word-spacing: 0.5rem;
  font-weight: bold;
}

h1:hover {
  cursor: pointer;
  color: var(--aqua);
}

nav {
  width: 35%;
}

nav a {
  padding: 0 5%;
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
@media only screen and (max-width: 1070px) {
  nav {
    width: 43%;
  }
}
  /* #region tablet media queries */
  @media only screen and (max-width: 850px) {
    header {
      font-size: 1.3rem;
    }
    h1 {
      width: 25%;
      font-size: 1.7rem;
    }
    nav {
      width: 40%;
      margin-top: 0.7%;
    }
  }
/* #region 725 and under */
@media only screen and (max-width: 725px) {
  header {
    font-size: 1rem;
    width: 100%;
    padding: 2%;
  }
  h1 {
    width: 45%;
    padding-top: 1%;
    text-align: center;
    font-size: 1rem;
  }
  .social-media {
    width: 100%;
    order: 3;
    margin-left: 15%;
    margin-top: 0.5%;
  }
  .social-media img {
    width: 40%;
  }
  .social-media img:hover {
   width: 70%;
  }
  .social-media a {
    margin: 0;
  }
  nav {
    width: 45%;
    margin-left: 5%;
    margin-top: 1%;
    text-align: center;
  }
  /* #endregion */
  /* #region  625 and under*/
  @media only screen and (max-width: 625px) {
    h1 {
      width: 70%;
      word-spacing: 0.1rem;
    }
    nav {
      width: 30%;
    }
  }
  /* #endregion */
  /* #region 500 and under*/
  @media only screen and (max-width: 500px) {
    h1 {
      width: 35%;
      margin: -.5% 0 0 0;
      font-size: 0.7rem;
      padding: 0;
    }
    nav {
      width: 60%;
      font-size: 0.9rem;
    }
    .social-media img {
      width: 45%;
    }
  }
  /* #endregion */
}
` 

export default AppStyled;
