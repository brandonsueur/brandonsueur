import React, { useState, useEffect } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";

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
      <div className="writing-container">
        <h1 className="mt-32 mb-20 text-center tracking-tight font-bold xl:text-5xl lg:text-4xl md:text-5xl text-4xl">
          {post.header.title}
        </h1>

        {/* <p className="mt-5 text-xl text-gray-500 leading-relaxed">
          {post.header.date}
        </p> */}

        <ReactMarkdown
          source={post.content}
          escapeHtml={false}
          renderers={{
            inlineCode: ({ value }) => {
              return (
                <div className="inline-block text-indigo-600 text-xl">
                  `{value}`
                </div>
              );
            },
            code: CodeBlock,
            link: (props) => {
              if (!props.href.startsWith("http")) {
                return (
                  <a href={props.href} rel="nofollow noreferrer noopener">
                    {props.children}
                  </a>
                );
              }

              return (
                <a
                  href={props.href}
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  {props.children}
                </a>
              );
            },
          }}
        />
      </div>
    )
  );
};

Post.getInitialProps = async (context) => {
  const content = await import(`../../content/${context.query.slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default Post;
