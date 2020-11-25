import styled from "styled-components";

const AppStyled = styled.main`

/* #region header */
header {
  display: flex;
  justify-content: space-between;
  background-color: var(--grey);
  padding: 2%;
  font-size: 1.3rem;
  text-align: right;
  height: 3vh;
}

h1 {
  font-size: 1.8rem;
}

nav {
  padding: 0 3%;
}

nav a {
  padding: 0 7%;
  font-size: 1.8rem;
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

export default AppStyled;