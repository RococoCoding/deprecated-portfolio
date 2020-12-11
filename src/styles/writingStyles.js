import styled from "styled-components";

const StyledWriting = styled.div`
  margin: 2%;
  text-align: center;
  h3 {
    font-size: 1.5rem;
    width: max-content;
    border-bottom: solid 2px var(--white);
    margin: 4% auto 0 auto;
  }
  .blog-summary {
    font-size: 1.5rem;
    margin: 1% 0;
  }
  .blog-full {
    width: 75%;
    margin: 1% auto;
    font-size: 1.3rem;
    line-height: 1.5rem;
    display: none;
    background-color: var(--pastelaqua);
    color: black;
    border-radius: 2%;
    padding: 3% 5%;
    text-align: left;
  }
  figure {
    margin: 5% 0;
    font-size: 1.1rem;
  }
  .blog-full p {
    text-indent: 4%;
    margin-bottom: 1%;
  }
  .blog-full img {
    display: block;
    width: 60%;
    margin: 2% auto;
  }
  
  .blog-full > .tall {
    width: 30%;
  }

  .visible {
    display: inherit;
  }
  .expand {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: var(--aqua);
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 500px) {
  .blog-summary {
    font-size: 1rem;
  }
  h3 {
    font-size: 1rem;
  }
  .blog-full {
    font-size: 0.9rem;
    border-radius: 7px;
    width: 90%;
  }
  }
`

export default StyledWriting;