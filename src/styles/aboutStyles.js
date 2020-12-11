import styled from "styled-components";
const AboutStyled = styled.main`
display: flex;
justify-content: space-between;
margin:2% 3%;
.about{
  width: 45%;
}
h2 {
  font-size: 1.8rem;
  margin: 3% 0;
  font-weight: bold;
}
.about p {
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-bottom: 3%;
}
em {
  color: var(--aqua);
}

@media only screen and (max-width: 500px) {
  flex-direction: column;
  .about {
    width: 96%;
    margin: 0 2%;
  }
  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin: 5%;
  }
  .about p {
    font-size: 1 rem;
    line-height: 1.3 rem;
  }
}
`
export default AboutStyled;