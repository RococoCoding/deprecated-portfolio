import styled  from "styled-components";

const LandingStyled = styled.div`
  display: flex;
  width: 100%;
  font-size: 3rem;
  justify-content: space-between;
  align-items: space-between;
  
  .landing-anim {
    width: 50%;
    text-align: center;
    margin: 10% 0;
  }

  .landing-anim p {
    font-size: 5rem;
    line-height: 7rem;
  }

  .landing-intro {
    width: 50%;
    padding: 15% 5% 15% 0;
    line-height: 2.5rem;
  }

  h2 {
    margin: 5% 0;
    font-size: 4.5rem;
  }

  .landing-intro p {
    font-size: 1.6rem;
  }
  
  button {
    margin-left: 27%;
    background-color: var(--darkaqua);
    color: var(--white);
    padding: 2% 4%;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 5%;
    border-radius: 6px;
  }

  button:hover {
    cursor: pointer;
  }
`
export default LandingStyled;