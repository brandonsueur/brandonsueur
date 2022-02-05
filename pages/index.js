import React from "react";
import Head from "next/head";

import { Banner, Button, SectionTitle } from "../components";

const TITLE = "Brandon Sueur — Expert React.js, React Native";

const Homepage = props => (
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
        content="https://brandonsueur.fr/twitter.jpg"
      />

      {/* Open Graph Data */}
      <meta property="og:type" content={"website"} />
      <meta property="og:title" content={"Brandon Sueur"} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Brandon Sueur" />
      <meta property="og:url" content="https://brandonsueur.fr" />
      <meta property="og:image" content="https://brandonsueur.fr/twitter.jpg" />
      <meta
        property="og:description"
        content={`Mon expertise couvre l'ensemble du processus de conception de produits numériques pour les sites web et les applications mobiles.`}
      />

      <link rel="canonical" href="https://brandonsueur.fr" />

      <title>{TITLE}</title>
    </Head>

    <section className="relative" id="header">
      <div className="container mx-auto">
        <Banner />

        <SectionTitle
          title="Prestations de service"
          paragraph="Nécessaire pour une entreprise numérique prospère"
        />
      </div>

      {/*<div className="fixed top-96 right-[-380px] xl:right-[-210px]  w-[420px] h-[523px]">*/}
      {/*  <svg*/}
      {/*    xmlns="http://www.w3.org/2000/svg"*/}
      {/*    fill="none"*/}
      {/*    viewBox="0 0 421 524">*/}
      {/*    <path*/}
      {/*      stroke="#fff"*/}
      {/*      d="M420.415 235c0 29.035-15.681 61.558-41.124 94.048-25.433 32.478-60.571 64.86-99.371 93.603-38.798 28.743-81.242 53.835-121.275 71.741C118.601 512.302 81.014 523 51.915 523c-14.535 0-25.375-3.036-33.251-8.526-7.87-5.484-12.831-13.455-15.545-23.429-5.44-19.99-1.821-47.927 5.48-79.63 4.48-19.455 10.333-40.271 16.297-61.486 3.752-13.346 7.549-26.851 11.076-40.273 9.127-34.729 16.443-68.884 16.443-98.156 0-58.36 10.167-111.123 34.866-149.281C111.958 24.094 151.171.5 209.415.5c58.228 0 110.974 29.46 149.175 73.524C396.792 118.09 420.415 176.726 420.415 235Z"*/}
      {/*    />*/}
      {/*    <path*/}
      {/*      stroke="#fff"*/}
      {/*      stroke-width="5"*/}
      {/*      d="M397.5 237.882c0 25.494-13.822 54.367-36.69 83.531-22.816 29.099-54.391 58.171-89.317 84.012-34.919 25.835-73.11 48.381-109.104 64.459-36.049 16.102-69.673 25.616-95.52 25.616-12.852 0-22.186-2.682-28.85-7.32-6.629-4.615-10.875-11.348-13.227-19.981-4.76-17.473-1.628-42.197 4.967-70.797 4.038-17.508 9.294-36.177 14.666-55.259 3.39-12.041 6.826-24.247 10.032-36.429 8.243-31.326 14.911-62.343 14.911-89.021 0-52.439 9.158-99.552 31.148-133.48 21.88-33.76 56.617-54.713 108.543-54.713 51.852 0 98.94 26.202 133.128 65.586 34.192 39.389 55.313 91.788 55.313 143.796Z"*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*</div>*/}
    </section>
  </>
);

export default Homepage;
