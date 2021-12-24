import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Head from "next/head";

import CodeBlock from "../../components/CodeBlock";
import { dateAgo } from "../../utils/dateUtils";

const Post = ({ post }) => {
  const router = useRouter();
  const [fullUrl, setFullUrl] = useState(null);

  useEffect(() => {
    if (window) setFullUrl(window.location.href);
  }, []);

  const description = post?.description;
  const url = `https://brandonsueur.fr/writing/${router.query.slug}`;
  const urlTwitter = `https://twitter.com/share?text=${encodeURI(
    post.header.title
  )}&url=${encodeURI(fullUrl)}`;

  return (
    <>
      <Head>
        {/* Content SEO */}
        <meta name="description" content={description} />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content={`Brandon Sueur — ${post.header.title}`}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:domain" content={url} />

        {/* Open Graph Data */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`Brandon Sueur — ${post.header.title}`}
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Brandon Sueur" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={post?.header?.og?.image || "/me.png"}
        />

        <link rel="canonical" href="https://brandonsueur.fr" />

        <title>{`Brandon Sueur — ${post.header.title}`}</title>
      </Head>

      <header className="mt-28 mb-32">
        <span
          className="cursor-pointer text-indigo-600 hover:text-indigo-500"
          onClick={() => router.push("/")}
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
          <a href={urlTwitter}>Twitter</a>.
        </p>
      </div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  const content = fs.readFileSync(`content/${slug}.md`).toString();

  const document = matter(content);

  const post = {
    header: document.data,
    content: document.content,
    description: document?.content.substring(0, 150),
  };

  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {
  const paths = fs.readdirSync("content").map((file) => ({
    params: {
      slug: file.split(".")[0],
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export default Post;
