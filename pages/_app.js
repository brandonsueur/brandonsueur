import Head from "next/head";

import "../styles/globals.css";
import "../styles/markdown-styles.css";

const App = ({ Component, pageProps }) => {
  const og = pageProps.data?.og;
  const title = pageProps.data?.title;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* Rating level and Langage */}
        <meta name="rating" content="General" />
        <meta name="language" content="fr" />

        {/* Author */}
        <meta name="copyright" content="Brandon Sueur" />
        <meta name="publisher" content="Brandon Sueur" />
        <meta name="author" content="Brandon Sueur" />
        <meta
          name="DC.creator"
          content="Brandon Sueur — https://brandonsueur.fr"
        />

        {/* Google Bot */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />

        {/* Mobile Data */}
        <meta name="apple-mobile-web-app-title" content="Brandon Sueur" />
        <meta name="application-name" content="Brandon Sueur" />
        <meta name="theme-color" content="#6366f1" />

        <link rel="canonical" href="https://brandonsueur.fr" />
      </Head>

      <div className="container mx-auto">
        <Component />
      </div>
    </>
  );
};

export default App;
