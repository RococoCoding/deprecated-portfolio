import React from "react";
import styled from "styled-components";

import blogs from "../data/blogs";
import Writing from "./Writing";

const StyledWritingList = styled.section`
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 2%;
  }

`

export default function WritingList() {

  return (
    <StyledWritingList>
      <h2>Blog Posts</h2>
      {blogs.map((blog, idx) => {
        return (
          <Writing 
            key={idx}
            title={blog.title}
            date={blog.date}
            summary={blog.summary}
            text={blog.text}
          />
        )
      })}
    </StyledWritingList>
  );
};