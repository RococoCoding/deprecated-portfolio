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
  
`
export default StyledProject;