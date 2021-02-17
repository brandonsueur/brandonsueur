import React, { useState, useEffect } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";
import { dateAgo } from "../../utils/dateUtils";

const Post = (props) => {
  const [post, setPost] = useState(null);

  useEffect(async () => {
    const slug = window.location.pathname.replace("/writing/", "");
    const content = await import(`../../content/${slug}.md`);
    const data = matter(content.default);

    setPost({
      header: data.data,
      content: data.content,
    });
  }, []);

  return (
    post && (
      <>
        <header className="mt-32 mb-32 text-center">
          <h1 className="mb-6 leading-loose font-bold xl:text-6xl lg:text-4xl md:text-5xl text-4xl">
            {post.header.title}
          </h1>
          <span className="text-gray-500 text-xl">
            {dateAgo(post.header.date)}
          </span>
        </header>

        <div className="writing-container">
          <ReactMarkdown
            source={post.content}
            escapeHtml={false}
            renderers={{
              inlineCode: ({ value }) => (
                <span className="inline-block text-indigo-600 text-xl">
                  `{value}`
                </span>
              ),
              code: CodeBlock,
              link: ({ children, href }) => {
                return (
                  <a
                    href={href}
                    ref="nofollow noreferrer noopener"
                    target={href.startsWith("http") ? "_self" : "_blank"}
                  >
                    {children}
                  </a>
                );
              },
            }}
          />

          <p className="footer">
            Merci d'avoir lu jusqu'au bout ! N'hésitez pas à partager l'article
            sur {` `}
            <a
              href={`https://twitter.com/share?text=${encodeURI(
                post.header.title
              )}&url=${encodeURI(window.location.href)}`}
            >
              Twitter
            </a>
            .
          </p>
        </div>
      </>
    )
  );
};

export default Post;
