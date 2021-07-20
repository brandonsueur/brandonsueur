import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { useRouter } from "next/router";
import Head from "next/head";

import CodeBlock from "../../components/CodeBlock";
import { dateAgo } from "../../utils/dateUtils";

const Post = (props) => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(async () => {
    const slug = window.location.pathname.replace("/writing/", "");
    const mdContent = await import(`../../content/${slug}.md`);
    const { data, content } = matter(mdContent.default);

    setDescription(content.toString().substring(0, 155) + "...");

    setPost({
      header: data,
      content: content,
    });
  }, []);

  return (
    post &&
    description && (
      <>
        <Head>
          {/* Content SEO */}
          <meta name="description" content={description} />

          {/* Twitter */}
          <meta
            name="twitter:title"
            content={`Brandon Sueur — ${post.header.title.substring(0, 30)}...`}
          />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:domain"
            content={`https://brandonsueur.fr/writing/${window.location.pathname.replace(
              "/writing/",
              ""
            )}`}
          />
          <meta
            name="twitter:image:src"
            content="https://brandonsueur.fr/_next/image?url=%2Ffavicon%2Fapple-icon.png&w=256&q=100"
          />

          {/* Open Graph Data */}
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={`Brandon Sueur — ${post.header.title.substring(0, 30)}...`}
          />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:site_name" content="Brandon Sueur" />
          <meta property="og:description" content={description} />
          <meta
            property="og:url"
            content={`https://brandonsueur.fr/writing/${window.location.pathname.replace(
              "/writing/",
              ""
            )}`}
          />
          <meta
            property="og:image"
            content={`https://brandonsueur.fr/_next/image?url=%2Ffavicon%2Fapple-icon.png&w=256&q=100`}
          />

          <link rel="canonical" href="https://brandonsueur.fr" />

          <title>
            {`Brandon Sueur — ${post.header.title.substring(0, 30)}...`}
          </title>
        </Head>

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
