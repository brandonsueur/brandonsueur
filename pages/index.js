import React from "react";
import Link from "next/link";

import { parseISO, formatDistance } from "date-fns";
import { fr } from "date-fns/locale";
import Banner from "../components/Banner";
import usePosts from "../utils/getPosts";

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
              const { title } = post.header;

              console.log(post.header.date);

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
                    Il y a{" "}
                    {formatDistance(parseISO(post.header.date), new Date(), {
                      locale: fr,
                    })}
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
