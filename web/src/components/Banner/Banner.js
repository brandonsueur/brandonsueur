import React from 'react';

import Socials from '../Socials/Socials';
import Button from '../Button/Button';
import Dots from '../Dots/Dots';

import './Banner.scss';

import imageMe from './img/me.png';

const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="banner">
          <div className="col-xs-12 col-sm-8 col-md-6">
            <h1>
              Je conçois de jolis sites web pour agences et particuliers !
            </h1>

            <p>
              Ma curiosité et ma motivation pour le monde du web font de moi
              quelqu’un de passioné et de travailleur.
            </p>

            <Button
              text="Découvrir mes articles"
              link="https://medium.com/@brandonsueur"
            />

            <Socials darked />
          </div>

          <div className="col-sm-6 col-md-6 img">
            <img src={imageMe} width="100%" alt="Me" />
            <div className="dots-banner">
              <Dots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
