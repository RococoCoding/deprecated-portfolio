import styled from "styled-components";

const StyledWriting = styled.div`
  margin: 2%;
  h3 {
    font-size: 1.5rem;
  }
  .blog-summary {
    font-size: 1.5rem;
    margin: 1% 0;
  }
  .blog-full {
    margin: 1% 0;
    font-size: 1.3rem;
    line-height: 1.5rem;
    display: none;
    background-color: var(--pastelaqua);
    color: black;
    border-radius: 2%;
    padding: 3%;
  }
  .blog-full img {
    display: block;
    width: 50%;
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
`

export default StyledWriting;