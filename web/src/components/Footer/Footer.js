import React from 'react';

import Socials from '../Socials/Socials';

import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="top">
            <a href="http://google.Fr/">contact@brandonsueur.fr</a>
            <p>
              Clique, c&rsquo;est gratuit !{' '}
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </p>
          </div>

          <div className="col-md-6">
            <p>
              Passez une bonne journée !{' '}
              <span role="img" aria-label="hello">
                👋🏻
              </span>
            </p>
          </div>

          <div className="col-md-6">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
