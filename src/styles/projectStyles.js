import styled from "styled-components";

const StyledProject = styled.div` 
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  width: 75%;

  img {
    width: 40vw;
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
    margin-top: 4%;
    margin-left: 3%;
    font-size: 1.3rem;
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
      margin: 3% 1%;
    }
    .project-info {
      width: 100%;
      font-size: 1rem;
      padding: 1%;
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
  }
`
export default StyledProject;