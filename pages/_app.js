import Head from "next/head";

import "../styles/globals.css";
import "../styles/markdown-styles.css";

const App = ({ Component, pageProps }) => {
  // const og = pageProps.data?.og;
  // const title = pageProps.data?.title;

  return (
    <div className="bg-blue-dark">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
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
        <meta name="theme-color" content="#11131E" />

        <link rel="canonical" href="https://brandonsueur.fr" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Caudex:ital@0;1&family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nova+Round&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </div>
  );
};

export default App;
