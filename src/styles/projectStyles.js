import styled from "styled-components";

const StyledProject = styled.div` 
  margin: 2%;
  display: flex;
  flex-direction: column;
  width: 75%;

  img {
    width: 100%;
    object-fit: fill;
  }

  h3 {
    width: 100%;
    max-width: 40vw;
    font-size: 2rem;
    margin-bottom: 1%;
  }

  .Completed {
    color: var(--aqua);
  }

  .Under-Construction {
    color: var(--constructioncone)
  }

  .Abandoned {
    color: red;
  }

  .projects-github-icon {
    width: 3%;
    margin-left: 3%;
  }

  /* #region project info  */
  .project-info {
    display: flex;
    justify-content: start;  
    width: 95%;
    font-size: 1.3rem;
  }

  .project-image-wrapper {
    min-width: 40%;
  }
  
  .project-info-text {
    margin-left: 10%;
  }

  .project-status {
    font-size: 1.3rem;
    margin-bottom: 2%;
  }

  strong {
    font-weight: bold;
    color: var(--aqua);
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
  }

@media only screen and (max-width: 1000px) {
  width: 96%;
  .project-info {
    width: 90%;
    font-size: 1.1rem;
  }
  .project-image-wrapper {
    min-width: 40%;
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
    padding: 1%;
  }
  li {
    line-height: 1.2rem;
  }
}
/* #endregion */

/* #region 500 and under media queries */
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: 0;
    padding-bottom: 2%;
    border-bottom: 10px solid var(--aqua);
    h3 {
      width: 100%;
      max-width: 100%;
      font-size: 1.3rem;
      margin: 3% 0;
    }
    .project-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      font-size: 1rem;
    }
    .project-info-text {
      margin: 0;
      text-align: center;
    }
    p {
      width: 90%;
      margin: 0 auto;
    }
    ul {
      display: inline-block;
      text-align: left;
    }
    li {
      width: max-content;
      padding: 1% 3%;
    }
  }
`
export default StyledProject;
