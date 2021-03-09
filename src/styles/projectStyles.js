import styled from "styled-components";

const StyledProject = styled.div` 
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  width: 75%;

  img {
    width: 40vw;
    height: 35vw;
    object-fit: contain;
  }

  h3 {
    width: 100%;
    max-width: 40vw;
    font-size: 2rem;
    margin-bottom: 1%;
  }

  .Completed {
    color: var(--darkaqua);
  }

  .Under-Construction {
    color: var(--constructioncone)
  }

  .Abandoned {
    color: red;
  }

  /* #region project info  */
  .project-info {
    width: 40%;
    margin-top: 2rem;
    margin-left: 3%;
    font-size: 1.3rem;
  }

  .project-status {
    font-size: 1.3rem;
    margin-bottom: 2%;
  }

  strong {
    font-weight: bold;
    color: var(--darkaqua);
  }

  p {
    line-height: 1.6rem;
    margin-bottom: 5%;
  }

  ul {
    list-style: square inside;
  }

  li {
    padding: 2% 0;
  }

  li span {
    font-weight: normal;
    position: relative;
    left: -4%;
  }
@media only screen and (max-width: 1000px) {
  width: 96%;
  .project-info {
    width: 40%;
    font-size: 1.1rem;
  }
}
/* #region tablet media queries */
@media only screen and (max-width: 800px) {
  width: 96%;
  margin: 3% 3% 10% 3%;
  h3 {
    white-space: nowrap;
    margin-bottom: 1%;
  }
  .project-info {
    width: 50%;
    padding: 1%;
  }

  li {
    line-height: 1.2rem;
  }
}
/* #endregion */

/* #region 500 and under queries */
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: 0;
    padding-bottom: 2%;
    border-bottom: 10px solid var(--extradarkaqua);
    h3 {
      width: 100%;
      max-width: 100%;
      font-size: 1.3rem;
      margin: 3% 0;
    }
    .project-info {
      width: 100%;
      font-size: 1rem;
    }
    p {
      width: 90%;
      margin: 0 auto;
    }
    ul {
      margin-top: 2%;
    }
    li {
      padding: 1%;
    }
    span {
      margin-left: 2%;
    }
  }
`
export default StyledProject;
