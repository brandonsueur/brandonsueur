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
        <h1 className="mt-32 text-center leading-tight mb-20 font-black xl:text-6xl lg:text-6xl text-4xl tracking-tight text-black dark:text-white">
          {post.header.title}
        </h1>
        <div className="xl:w-7/12 lg:w-9/12 mx-auto">
          <p className="mb-6 text-sm text-gray-400 dark:text-gray-700">
            {post.header.date}
          </p>

          <ReactMarkdown source={post.content} />
        </div>
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
