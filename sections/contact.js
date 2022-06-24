import React from "react";

import { SectionTitle } from "@components/index";
import Socials from "@components/Socials";

const Contact = () => {
  return (
    <div>
      <SectionTitle
        title="Me contacter"
        paragraph="Créons ensemble un projet incroyable !"
      />

      <div className="space-y-16 md:space-y-32">
        <a
          className="text-2xl md:text-6xl font-body text-white font-bold underline"
          href="mailto:contact@brandonsueur.fr">
          contact@brandonsueur.fr
        </a>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Contact;
