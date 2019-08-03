import React from 'react';

import './Strategy.scss';

const Strategy = () => {
  return (
    <section className="strategy">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="title">
              <span>Les étapes importantes</span>
              <h1>
                Comment je travail en
                <br />
                étant indépendant ?
              </h1>
            </div>

            <p>
              Je suis axès sur le service à la clientièle, toujours engagé,
              toujours attachés à une qualité supérieure et à des résultats
              concrets. C’est comme ça que je travail. Du concept à la création,
              je souhaites que vous soyez informé et satisfait tout au long du
              processus. Donner la priorité aux besoins de mes clients est la
              clé pour établir des relations stables et solides.
            </p>

            <a
              href="https://github.com/brandonsueur"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réaliser un devis
            </a>
          </div>

          <div className="col-md-offset-1 col-md-6">
            <div className="block">
              <h3>1. Stratégie</h3>
              <p>
                Établissez les objectifs du projet, les maquettes mais aussi un
                petit cahier des charges. L'objectif étant de créer des
                solutions rentables.
              </p>
            </div>

            <div className="block">
              <h3>2. Réalisation</h3>
              <p>
                J'ai les connaissances et l'attitude nécessaires pour mener à
                bien un projet de A à Z. En apprenant sans cesse !
              </p>
            </div>

            <div className="block">
              <h3>3. Livraison</h3>
              <p>
                L'objectif étant d'utiliser des outils efficasses et
                compréhensible. Cela m'a valu des clients réguliers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
