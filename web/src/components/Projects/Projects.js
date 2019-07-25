import React from 'react';

import Button from '../Button/Button';

import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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

            <a href="https://github.com/brandonsueur">Découvrir mon GitHub</a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5">
            <div className="projects row">
              <div className="col-xs-12 col-sm-6 col-md-12">
                <div className="project pull-right">
                  <div className="logo">
                    <svg
                      width="70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 116 116"
                    >
                      <g fill="#6C87EF" fillRule="nonzero">
                        <path d="M31.047 71.7c-7.602-7.561-7.602-19.834 0-27.394L69.9 5.68c.353-.351.72-.689 1.1-1.013-7.738-6.588-19.25-6.156-26.459 1.013L5.701 44.306c-7.602 7.56-7.602 19.833 0 27.393l38.84 38.626c7.195 7.156 18.721 7.601 26.445 1.013-.38-.324-.746-.662-1.1-1.013L31.048 71.7z" />
                        <path d="M56.636 71.794L83.5 99l26.864-27.22c7.515-7.61 7.515-19.963 0-27.574L83.5 17 56.636 44.22c-7.515 7.61-7.515 19.95 0 27.574z" />
                      </g>
                    </svg>
                  </div>

                  <h3>Hulli</h3>

                  <p>
                    Une application mobile et un site web permettant de gérer la
                    liste de vos prochains cours dans vos magasins préférés.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-12">
                <div className="project">
                  <div className="logo">
                    <svg
                      width="70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 116 116"
                    >
                      <defs>
                        <linearGradient
                          id="a"
                          x1="21.918%"
                          x2="87.699%"
                          y1="87.933%"
                          y2="12.073%"
                        >
                          <stop offset="0%" stopColor="#F3F3F3" />
                          <stop offset="100%" stopColor="#FFF" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="261"
                        cy="116"
                        r="58"
                        fill="url(#a)"
                        fileRule="evenodd"
                        transform="translate(-203 -58)"
                      />
                    </svg>
                  </div>

                  <h3>Une idée de projet ?</h3>

                  <p>
                    Tu as une idée de projet ? Tu souhaites le rendre
                    open-source et tu travail dans la bonne humeur, je suis
                    partant pour travailler avec toi !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
