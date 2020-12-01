import React, { useState } from "react";
import parse from "html-react-parser";
import StyledWriting from "../styles/writingStyles";

// remember to parse text!
export default function Writing(props) {
  const {title, date, summary, text} = props;
  const [visible, setVisible] = useState(false);
  
  return (
    <StyledWriting>
      <h3>{title} - {date}</h3>
      <p className="blog-summary">{summary}</p>
      <button onClick={() => {setVisible(!visible)}} className="expand">-{visible ? "Close" : "Read More"}-</button>  
      <p className={visible ? "blog-full visible":"blog-full"} >{parse(text)}</p>
    </StyledWriting>
  );
};