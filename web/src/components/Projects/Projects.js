import React from 'react';

import Button from '../Button/Button';

import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="title">
              <span>Mes projets</span>
              <h1>
                Des produits, pour rendre le monde meilleur (mais pas que){' '}
                <span role="img" aria-label="like">
                  😎
                </span>
              </h1>
            </div>

            <p>
              Après quelques mois d'entreprenariat j'ai appris une chose. Il
              faut savoir décrocher, écrire et réaliser.
            </p>
            <p>
              Les projets, permettent d’<strong>apprendre</strong>, d’
              <strong>échanger</strong> et <strong>performer</strong> ! C’est
              pour moi une façon d’évacuer mes « idées » qui me passe par la
              tête(même si c’est nul, j’en ai besoin), d’apprendre des nouvelles
              technologies mais aussi d’échanger avec énormément de personne sur
              mes idées et de les améliorer.
            </p>
            <p>
              Avoir l’idée c’est simple, la développer, maintenir et sortir le
              produit ça l’ai beaucoup moins. Ca demande du temps, de la
              réfléxion mais aussi un soutiens ! C’est pour cela que je rends au
              maximum maintenant mes projets open-source, que j’échange au
              maximum mes projets sur les réseaux sociaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
