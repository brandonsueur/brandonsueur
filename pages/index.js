import React from "react";
import Head from "next/head";

import { Banner } from "../components";
import Services from "@sections/services";
import Me from "@sections/me";
import Projects from "@sections/projects";
import Contact from "@sections/contact";

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
        content={`Expert React.js, React Native. Mon expertise couvre l'ensemble du processus de conception de produits numériques pour les sites web et les applications mobiles.`}
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
        content={`Expert React.js, React Native. Mon expertise couvre l'ensemble du processus de conception de produits numériques pour les sites web et les applications mobiles.`}
      />

      <link rel="canonical" href="https://brandonsueur.fr" />

      <title>{TITLE}</title>
    </Head>

    <div className="container mx-auto mb-48 space-y-48 px-4 lg:px-0">
      <Banner />

      <section id="services">
        <Services />
      </section>

      <section id="me">
        <Me />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  </>
);

export default Homepage;
