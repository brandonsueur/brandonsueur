import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

function PostTemplate({ content, data }) {
  const frontmatter = data;

  return (
    <>
      <h1 className="mt-32 text-center leading-tight mb-20 font-black xl:text-6xl lg:text-6xl text-4xl tracking-tight text-black dark:text-white">
        {frontmatter.title}
      </h1>

      <div className="xl:w-7/12 lg:w-9/12 mx-auto">
        <p className="mb-6 text-sm text-gray-400 dark:text-gray-700">
          20 Janvier 2020
        </p>
        <ReactMarkdown source={content} />
      </div>
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
