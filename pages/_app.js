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

        {/* Content SEO */}
        <meta name="subject" content="website" />
        <meta
          name="description"
          content="Développeur, Designer et créateur de choses."
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

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_brandonsueur" />
        <meta name="twitter:creator" content="@_brandonsueur" />
        <meta name="twitter:title" content="Brandon Sueur" />
        <meta
          name="twitter:description"
          content="Développeur, Designer et créateur de choses."
        />
        <meta name="twitter:domain" content="https://brandonsueur.fr" />
        <meta
          name="twitter:image:src"
          content="https://brandonsueur.fr/og/default.png"
        />

        {/* Open Graph Data */}
        <meta property="og:title" content={title || `Brandon Sueur`} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Brandon Sueur" />
        <meta
          property="og:description"
          content={
            og ? og.description : `Développeur, Designer et créateur de choses.`
          }
        />
        <meta
          property="og:image"
          content={og ? og.image : `https://telmo.im/og/default.png`}
        />

        <title>
          {(title && title + " • Brandon Sueur") || `Brandon Sueur`}
        </title>
      </Head>

      <div className="container mx-auto">
        <Component />
      </div>
    </>
  );
};

export default App;
