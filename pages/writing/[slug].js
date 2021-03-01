import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import matter from "gray-matter";

import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";
import { dateAgo } from "../../utils/dateUtils";

const Post = (props) => {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(async () => {
    const slug = window.location.pathname.replace("/writing/", "");
    const mdContent = await import(`../../content/${slug}.md`);
    const { data, content } = matter(mdContent.default);

    setPost({
      header: data,
      content: content,
    });
  }, []);

  return (
    post && (
      <>
        <header className=" mt-28 mb-32 text-center">
          <span
            className="cursor-pointer text-indigo-600 hover:text-indigo-500"
            onClick={() => router.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left inline-block align-bottom"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span className="ml-3">Retour</span>
          </span>

          <div className="text-center">
            <h1 className="mb-6 leading-loose font-bold xl:text-6xl lg:text-4xl md:text-5xl text-4xl">
              {post.header.title}
            </h1>
            <span className="text-gray-500 text-xl">
              {dateAgo(post.header.date)}
            </span>
          </div>
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
              link: ({ children, href }) => (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_self" : "_blank"}
                >
                  {children}
                </a>
              ),
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
