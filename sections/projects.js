import React from "react";

import DiagorienteScreenShot from "public/projects/diagoriente.jpg";
import LyveatScreenShot from "public/projects/lyveat.jpg";
import NotiplusScreenShot from "public/projects/notiplus.jpg";
import { SectionTitle } from "@components/index";

const ITEMS = [
  {
    visible: true,
    color: "#F09776",
    title: "Diagoriente",
    description:
      "Diagoriente est une plateforme gratuite et ouverte à tous pour trouver le métier fait pour soi.",
    image: "diagoriente.jpg",
    skills: ["React.js", "TypeScript", "TailwindCSS"]
  },
  {
    visible: true,
    color: "#67C99C",
    title: "Lyveat",
    description:
      "Application française de livraison de restaurants, qui livre même les campagnes !",
    image: "lyveat.jpg",
    skills: ["Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    visible: true,
    color: "#3C6DF1",
    title: "Notiplus",
    description:
      "Notiplus est la solution notariale qui simplifie la gestion des ventes immobilières.",
    image: "notiplus.jpg",
    skills: ["React.js", "TypeScript", "Material-UI"]
  },
  {
    visible: true,
    color: "#A7AAC2",
    title: "Coliveri",
    description:
      "La livraison par coursier dans l'heure, là où les autres ne vont pas.",
    image: "coliveri.jpg",
    skills: ["Expo", "TypeScript", "TailwindCSS"]
  }
];

const Projects = () => {
  return (
    <div>
      <SectionTitle
        title="Réalisations"
        paragraph="Ils m’ont fait confiances"
      />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {ITEMS.filter(_ => _.visible).map(item => {
          return (
            <div>
              <div
                className="w-full rounded-2xl"
                style={{
                  width: "100%",
                  height: "303px",
                  backgroundImage: `url(./projects/${item.image})`,
                  backgroundSize: "cover",
                  boxShadow: `0px 30px 49px -40px ${item.color}`
                }}
              />

              <div className="mt-8">
                <div className="flex justify-between items-center justify-center">
                  <h3 className="mb-2 font-body font-bold text-white">
                    {item.title}
                  </h3>
                  <div className="mb-4">
                    {item.skills.map(skill => (
                      <span
                        style={{
                          backgroundColor: item.color
                        }}
                        className="mr-2 text-xs font-body font-light text-white px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="font-body font-light leading-8 text-blue-gray">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
