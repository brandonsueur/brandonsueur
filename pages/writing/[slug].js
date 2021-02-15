import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

function Post({ content, data }) {
  const { title, date } = data;

  return (
    <>
      <h1 className="mt-32 text-center leading-tight mb-20 font-black xl:text-6xl lg:text-6xl text-4xl tracking-tight text-black dark:text-white">
        {title}
      </h1>
      <div className="xl:w-7/12 lg:w-9/12 mx-auto">
        <p className="mb-6 text-sm text-gray-400 dark:text-gray-700">{date}</p>

        <ReactMarkdown source={content} />
      </div>
    </>
  );
}

Post.getInitialProps = async (context) => {
  const content = await import(`../../content/${context.query.slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default Post;
