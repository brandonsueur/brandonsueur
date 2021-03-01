import React from "react";
import Link from "next/link";
import Banner from "../components/Banner";
import usePosts from "../utils/getPosts";
import { dateAgo } from "../utils/dateUtils";

const Homepage = (props) => {
  const { data, loading } = usePosts();

  return (
    <>
      <Banner />

      {!loading && data.length >= 1 && (
        <>
          <h2 className="font-semibold mb-8 tracking-tight text-2xl text-black">
            Mes articles
          </h2>

          <div>
            {data.map((post, i) => {
              const { title, visibility } = post.header;

              if (visibility === false) return;

              return (
                <div className="grid my-5" key={i}>
                  <Link
                    href={{
                      pathname: "/writing/[slug]",
                      query: { slug: post.slug },
                    }}
                    key={i}
                  >
                    <a className="text-xl leading-relaxed text-indigo-600 hover:text-indigo-500 w-max">
                      {title}
                    </a>
                  </Link>

                  <span className="text-gray-500 text-base">
                    {dateAgo(post.header.date)}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;
