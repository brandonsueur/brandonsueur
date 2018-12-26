import React from 'react';

import Tags from "../Tags/Tags";

import "./About.css";

class About extends React.Component {
  render() {
    return(
      <div className="container">
        <section className="about">
          <h2 className="title">Mon parcours</h2>

          <div className="content">
            <p>Développeur Front-End & Back-End, ma curiosité et ma motivation pour le monde du web font de moi quelqu'un de passionné et de travailleur.</p>
            <p>J'ai un parcours atypique, j'ai commencé le développement web à mes 14 ans, j'ai arrêté les études 3 jours après la rentrée de terminal et j'ai ouvert mon entreprise en tant qu'Auto-Entrepreneur à 18 ans puis six mois après, j'ai signé mon premier CDI chez CGI France en tant que Développeur Full Stack.</p>
            <p>J'ai passé beaucoup de temps derrière mon ordinateur en tant qu’autodidacte, j'ai appris énormément sur Internet. Je n'ai pas fait d'étude pour créer une société, pour réaliser un site internet, une application mobile ou encore à me vendre. J'ai appris grâce à des vidéos, des amis ou encore sur des articles.</p>
            <p>A temps partiel, je suis toujours Freelance en étant Auto-Entrepeneur. Je fais principalement du Front-End. J'intègre avec précision les maquettes que l'on me fournit et je mets en place les fonctionnalités qui leur sont liées. Je réalise également leur version responsive en prenant en compte les contraintes d'accessibilité et d'ergonomie, et je n'hésite pas à apporter mes conseils en la matière.</p>
          </div>

          <h2 className="title">Mes comptétences</h2>

          <div className="content">
            <p>Mon ensemble de compétences est vaste et je me réjouis de tous les défis qui me sont lancés. Je n'arrêterai jamais d'apprendre, mon objectif actuel est de développer au maximum mes compétences pour couvrir n'importe quel projet. J'ai un vif intérêt pour la création de site internet rapide, beau et fonctionnelle.</p>

            <Tags />
          </div>
        </section>
      </div>
    )
  }
}

export default About;
