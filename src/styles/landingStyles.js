import styled from "styled-components";

const LandingStyled = styled.div`
  display: flex;
  width: 100%;
  font-size: 3rem;
  /* justify-content: space-between;
  align-items: space-between; */
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
    display: flex;
    flex-direction: column;
    text-align: center;
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
    background-color: var(--darkaqua);
    color: var(--white);
    padding: 2% 4%;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 6px;
    width: 13rem;
    margin: 5% auto 0 auto;
  }

  button:hover {
    cursor: pointer;
  }

  .landing-anim-dev {
    animation: drop-dev 1s cubic-bezier(0,.47,.76,1.28);
    animation-fill-mode: forwards;
  }

  .landing-anim-web {
    animation: drop-web 2s cubic-bezier(0,.47,.76,1.28);
    animation-fill-mode: forwards;
  }

  .landing-anim-stack {
    animation: drop-stack 3s cubic-bezier(0,.47,.76,1.28);
    animation-fill-mode: forwards;
  }

  .landing-anim-full {
    animation: drop-full 4s cubic-bezier(0,.47,.76,1.28);
    animation-fill-mode: forwards;
  }

  @keyframes drop-dev {
    0% {
      position: fixed;
      left: 18%;
      top: -15%;
    }
    100% {
      position: fixed;
      left: 18%;
      top: 63%;
    }
  }

  @keyframes drop-web {
    0% {
      position: fixed;
      left: 18%;
      top: -15%;
    }
    50% {
      position: fixed;
      left: 18%;
      top: -15%;
    }
    100% {
      position: fixed;
      left: 18%;
      top: 48%;
    }
  }

  @keyframes drop-stack {
    0%{
      position: fixed;
      left: 18%;
      top: -15%;
    }
    66% {
      position: fixed;
      left: 18%;
      top: -15%;
    }
    100% {
      position: fixed;
      left: 18%;
      top: 33%;
    }
  }

  @keyframes drop-full {
    0%{
      position: fixed;
      left: 18%;
      top: -15%;
    }
    75% {
      position: fixed;
      left: 18%;
      top: -15%;
    }
    100% {
      position: fixed;
      left: 18%;
      top: 19%;
    }
  }

  @media only screen and (max-width: 800px) {
    .landing-intro {
      margin: 0% 0;
    }
    h2 {
      line-height: 4.8rem;
      margin-left: 0 0 0 7%;
    }
    .landing-anim {
      margin: 0 0 0 10%;
      text-align: center;
    }
    button {
      margin-top: 10%;
    }
  }
  @media only screen and (max-width: 610px) {
    flex-direction: column;
    .landing-intro {
      width: 90%;
      margin: 16rem auto 0 auto;
      padding: 0;
    }
    .landing-intro p {
      font-size: 1.3rem;
      margin-left: 5%;
      line-height: 1.6rem;
      width: 90%;
      text-align: center;
    }
    button {
      font-size: 1.3rem;
      margin: 4% auto;
    }
    h2 {
      margin-top: 4rem;
      font-size: 2.4rem;
      line-height: 1rem;
      text-align: center;
    }
    .landing-anim {
      margin: 5% auto 0 auto;
    }
    .landing-anim p {
      font-size: 3.5rem;
    }
    
  @keyframes drop-dev {
    0% {
      position: fixed;
      left: 40%;
      top: -15%;
    }
    100% {
      position: fixed;
      left: 40%;
      top: 33%;
    }
  }

  @keyframes drop-web {
    0% {
      position: fixed;
      left: 38%;
      top: -15%;
    }
    50% {
      position: fixed;
      left: 38%;
      top: -15%;
    }
    100% {
      position: fixed;
      left: 38%;
      top: 23%;
    }
  }

  @keyframes drop-stack {
    0%{
      position: fixed;
      left: 35%;
      top: -15%;
    }
    66% {
      position: fixed;
      left: 35%;
      top: -15%;
    }
    100% {
      position: fixed;
      left: 35%;
      top: 12%;
    }
  }

  @keyframes drop-full {
    0%{
      position: fixed;
      left: 40%;
      top: -15%;
    }
    75% {
      position: fixed;
      left: 40%;
      top: -15%;
    }
    100% {
      position: fixed; 
      left: 40%;
      top: 2%;
    }
  }
  }

  @media only screen and (max-width: 400px) {
    .landing-intro {
      margin-top: 15rem; 
    }
  }
`;
export default LandingStyled;
