import React from "react";
import Link from "next/link";
import Head from "next/head";
import Banner from "../components/Banner";
import usePosts from "../utils/getPosts";
import { dateAgo } from "../utils/dateUtils";

const Homepage = (props) => {
  const { data, loading } = usePosts();

  return (
    <>
      <Head>
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_brandonsueur" />
        <meta name="twitter:creator" content="@_brandonsueur" />
        <meta name="twitter:title" content="Brandon Sueur" />
        <meta
          name="twitter:description"
          content={`Mon expertise couvre l'ensemble du processus de conception de produits numériques pour les Sites web et les Applications mobiles, y compris la communication visuelle et de marque.`}
        />
        <meta name="twitter:domain" content="https://brandonsueur.fr" />
        <meta
          name="twitter:image"
          content="https://brandonsueur.fr/_next/image?url=%2Ffavicon%2Fapple-icon.png&w=256&q=100"
        />

        {/* Open Graph Data */}
        <meta property="og:type" content={"website"} />
        <meta property="og:title" content={"Brandon Sueur"} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Brandon Sueur" />
        <meta property="og:url" content="https://brandonsueur.fr" />
        <meta property="og:image" content="/me.png" />
        <meta
          property="og:description"
          content={`Mon expertise couvre l'ensemble du processus de conception de produits numériques pour les Sites web et les Applications mobiles, y compris la communication visuelle et de marque.`}
        />

        <link rel="canonical" href="https://brandonsueur.fr" />

        <title>{"Brandon Sueur"}</title>
      </Head>

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
