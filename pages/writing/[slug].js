import React, { useState, useEffect } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const Post = (props) => {
  const [post, setPost] = useState(null);

  useEffect(async () => {
    const content = await import(
      `../../content/${window.location.pathname.replace("/writing/", "")}.md`
    );
    const data = matter(content.default);

    setPost({
      header: data.data,
      content: data.content,
    });
  }, []);

  return (
    post && (
      <>
        <h1 className="mt-32 mb-20 text-center tracking-tight font-bold xl:text-5xl lg:text-4xl md:text-5xl text-4xl">
          {post.header.title}
        </h1>

        <p className="mb-6 text-sm text-gray-400 dark:text-gray-700">
          {post.header.date}
        </p>

        <ReactMarkdown source={post.content} />
      </>
    )
  );
};

Post.getInitialProps = async (context) => {
  const content = await import(`../../content/${context.query.slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default Post;
