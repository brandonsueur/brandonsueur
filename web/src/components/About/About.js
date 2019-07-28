import React from 'react';

import Skills from './Skills/Skills';
import Experiences from './Experiences/Experiences';

import './About.scss';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="title">
          <span>Ma vision & qui suis-je ?</span>
          <h1>
            Je me forme contituellement et m’inspire tous les jours pour
            réinveter la vie des sites web et applications mobile de mes
            clients. L’inspiration et le savoir, c’est la clé !
          </h1>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6">
            <p>
              J’adore apprendre, chaque jour j’essaye d’apprendre au moins une
              chose, dans n’importe quel domaine mais au moins apprendre une
              nouvelle chose !{' '}
              <strong>
                Nous ne pouvons inspirer les autres que si nous sommes inspirés
                par ce que nous faisons.
              </strong>
            </p>
          </div>
          <div className="col-sm-6 col-md-6">
            <p>
              Une fois inspiré par ce que je fais, je peux proposer mes services
              à des prospects. Après avoir compris fonctionnellement l’objectif
              du projet, je me permet de faire mon maximum concernant mon
              inspiration, c’est là que pour moi ça a le plus d’impact.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Skills />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Experiences />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
