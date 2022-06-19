import React, { useState } from "react";
import { Button, SectionTitle } from "@components/index";

import background from "../public/moi.jpg";
import Socials from "@components/Socials";

const Me = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mb-56 grid grid-cols-1 gap-16 md:grid-cols-12">
      <div className="col-span-5">
        <div
          className="hidden rounded-lg md:block"
          style={{
            height: "615px",
            width: "100%",
            backgroundImage: `url(/moi-full.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div
          className="hidden items-center justify-center md:flex"
          style={{
            marginTop: "-30px"
          }}>
          <Button>
            <div className="mx-4">
              500€ <span className="text-sm font-normal">/ jour</span>
            </div>
          </Button>
        </div>
      </div>

      <div className="col-span-7">
        <SectionTitle noMb title="Je suis Brandon Sueur" />

        <div className="relative w-full">
          <p
            style={{ height: "396px" }}
            className="mt-8 overflow-hidden font-body font-light leading-8 text-blue-gray">
            Mon expertise couvre l'ensemble du processus de conception de
            produits numériques pour les sites web et les applications mobiles,
            y compris la communication visuelle et de marque. J'aime créer de
            nouveaux produits de zéro ou optimiser les produits existants afin
            qu'ils fonctionnent mieux du point de vue de l'utilisateur et de
            l'entreprise.
            <br />
            <br />
            Je me suis spécialisé dans les technologies web et j'ai développé
            une expertise sur React.js, Next.js/React Native, Expo et les
            interfaces UI/UX. Je suis plutôt spécialisé Front-End, mais aussi à
            l'aise avec le Back-End en Laravel/Node.js. Rigoureux et soucieux de
            réaliser du travail de qualité, je contribue régulièrement à des
            projets open-source et suis toujours à la recherche des meilleures
            pratiques, outils et standards.
          </p>

          <div
            style={{
              background:
                "linear-gradient(to bottom, rgba(17,19,30,0),rgba(17,19,30,0.4), rgba(17,19,30,1))",
              position: "absolute",
              bottom: "15px",
              padding: "15px 0",
              height: "170px",
              width: "100%"
            }}
          />
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-2 mb-8 text-left font-bold text-white underline opacity-100 transition transition-opacity ease-in-out hover:opacity-80">
          En savoir plus
        </button>

        <div className="mt-4 flex">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Me;
