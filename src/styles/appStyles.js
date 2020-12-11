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

@media only screen and (max-width: 500px) {
  header {
    font-size: 1rem;
    height: 8vh;
    flex-wrap: wrap;
    width: 101%;
    padding: 2%;
  }
  h1 {
    width: 30%;
    padding-top: 1%;
    text-align: center;
    font-size: 1rem;
  }
  .social-media {
    width: 100%;
    order: 3;
    margin-left: 30%;
    margin-top: 3%;
  }
  .social-media img {
    width: 40%;
  }
  .social-media a {
    margin: 0;
  }
  nav {
    width: 65%;
    margin-top: 1%;
    text-align: center;
  }
}
` 

export default AppStyled;