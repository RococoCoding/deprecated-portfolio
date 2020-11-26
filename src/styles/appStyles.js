import styled from "styled-components";

const AppStyled = styled.main`

/* #region header */
header {
  display: flex;
  justify-content: space-between;
  background-color: var(--grey);
  padding: 2%;
  font-size: 1.8rem;
  text-align: right;
  height: 3vh;
}

h1 {
  width: 25%;
  font-size: 2rem;
  text-align: left;
  word-spacing: 0.5rem;
  font-weight: bold;
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
    width: 100%;
  }
}
` 

export default AppStyled;