import React from "react";
import styled from "styled-components";

const StyledProject = styled.div` 

`

export default function Project(props) {
  return (
    <StyledProject>
      <img src={props.src} />
      <p>{props.text}</p>
    </StyledProject>
  ) 
}