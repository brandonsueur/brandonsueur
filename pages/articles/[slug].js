import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

function PostTemplate({ content, data }) {
  const frontmatter = data;

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown source={content} />
    </>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../content/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default PostTemplate;
