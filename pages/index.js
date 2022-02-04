import React from "react";
import Link from "next/link";
import Head from "next/head";
import usePosts from "../utils/getPosts";

const TITLE = "Brandon Sueur — Expert React.js, React Native";

const Homepage = (props) => (
  <>
    <Head>
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@_brandonsueur" />
      <meta name="twitter:creator" content="@_brandonsueur" />
      <meta name="twitter:title" content={TITLE} />
      <meta
        name="twitter:description"
        content={`Mon expertise couvre l'ensemble du processus de conception de produits numériques pour les sites web et les applications mobiles.`}
      />
      <meta name="twitter:domain" content="https://brandonsueur.fr" />
      <meta
        name="twitter:image"
        content="https://brandonsueur.fr/_next/image?url=%2Ftwitter.jpg&w=1200&h=630"
      />

      {/* Open Graph Data */}
      <meta property="og:type" content={"website"} />
      <meta property="og:title" content={"Brandon Sueur"} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Brandon Sueur" />
      <meta property="og:url" content="https://brandonsueur.fr" />
      <meta
        property="og:image"
        content="https://brandonsueur.fr/_next/image?url=%2Ftwitter.jpg&w=1200&h=630"
      />
      <meta
        property="og:description"
        content={`Mon expertise couvre l'ensemble du processus de conception de produits numériques pour les sites web et les applications mobiles.`}
      />

      <link rel="canonical" href="https://brandonsueur.fr" />

      <title>{TITLE}</title>
    </Head>
  </>
);

export default Homepage;
