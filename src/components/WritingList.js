import React from "react";
import styled from "styled-components";

import blogs from "../data/blogs";
import Writing from "./Writing";

const StyledWritingList = styled.section`


`

export default function WritingList() {
  return (
    <StyledWritingList>
      Blog Posts
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