import React from 'react';

import Socials from '../Socials/Socials';

import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="title">
                <span>Travaillons ensemble</span>
                <h1>
                  Besoin d'un nouveau site web ou d'une application mobile ? Ou
                  simplement échanger et obtenir des conseils ?
                </h1>
              </div>
            </div>

            <div className="col-md-6 end-md right">
              <a className="mail" href="http://google.Fr/">
                contact@brandonsueur.fr
              </a>

              <p>
                Clique, c&rsquo;est gratuit !{' '}
                <span role="img" aria-label="heart">
                  ❤️
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <p>
                Passez une bonne journée !{' '}
                <span role="img" aria-label="hello">
                  👋🏻
                </span>
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
