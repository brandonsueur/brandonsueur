import React from "react";
import matter from "gray-matter";
import Banner from "../components/Banner";

function Homepage({ posts }) {
  console.log(posts);
  return (
    <div className="container mx-auto">
      <Banner />

      <h2 className="font-semibold mb-8 tracking-tight text-2xl text-black dark:text-white">
        Mes articles
      </h2>

      <div>
        <a
          className="text-lg text-indigo-600 border-b-2 border-white hover:border-indigo-600"
          href="/"
        >
          Ca c mon premier article de ouf
        </a>
      </div>
    </div>
  );
}

Homepage.getInitialProps = async (ctx) => {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });

    return data;
  })(require.context("../content", true, /\.md$/));

  return {
    posts: [...posts],
  };
};

export default Homepage;
