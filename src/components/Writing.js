import React from "react";
import parse from "html-react-parser";
import StyledWriting from "../styles/writingStyles";

// remember to parse text!
export default function Writing(props) {
  const {title, date, summary, text} = props;
  
  return (
    <StyledWriting>
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p>{summary}</p>
      <p>{parse(text)}</p>   
    </StyledWriting>
  );
};