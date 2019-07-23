import React from 'react';

import './Quotes.scss';

export default function Quotes() {
  return (
    <section className="quotes">
      <div className="container">
        <div className="title">
          <span>Quelques avis</span>
          <h1>Ce que disent les gens de moi</h1>
        </div>

        <p>
          Il y a déjà 13 personnes qui me recommandes, toi aussi{' '}
          <span role="img" aria-label="like">
            👍
          </span>{' '}
          ?
        </p>

        <div className="row">
          <div className="comments">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="comment">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M9.983 0v7.391C9.983 13.095 6.252 16.961 1 18l-.995-2.151C2.437 14.932 4 12.211 4 10H0V0h9.983zM24 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151C16.437 14.932 18 12.211 18 10h-3.983V0H24z"
                  />
                </svg>
                <p>
                  Brandon a su parfaitement répondre à mes attentes en qualité
                  de web designer ! De belles propositions et d'intelligentes
                  suggestions de sa part, nous ont permis d'affiner mon produit
                  (site internet) et d'engager une meilleure visibilité sur
                  notre objectif principal. Le respect des bonnes pratiques et
                  sa disponibilité en ont fait un superbe prestataire pour notre
                  projet.
                </p>
                <span>— Pierre Tondereau</span>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="comment darked">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
                  <path
                    fill="white"
                    fillRule="nonzero"
                    d="M9.983 0v7.391C9.983 13.095 6.252 16.961 1 18l-.995-2.151C2.437 14.932 4 12.211 4 10H0V0h9.983zM24 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151C16.437 14.932 18 12.211 18 10h-3.983V0H24z"
                  />
                </svg>
                <p>
                  J'ai été surpris des compétences de Brandon ainsi que sa
                  capacité à tenir les délais qu'il nous avait proposé. Nous lui
                  avons confié une tâche assez précise et complexe qu'il a su
                  réaliser en quelques jours. Brandon nous a accompagné jusqu'à
                  l'installation du produit, chose qui n'était même pas convenu
                  dans notre contrat. Brandon allie compétences, écoute et
                  disponibilité qui font de lui un excellent Freelance !
                </p>
                <span>— Emmanuel Namer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
