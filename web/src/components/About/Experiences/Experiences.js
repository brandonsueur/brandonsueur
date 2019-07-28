import React from 'react';

import './Experiences.scss';

const Experiences = () => {
  return (
    <div className="experiences">
      <h3>Expériences</h3>

      <div className="experience">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h4>Freelance</h4>
            <span className="date">janv 2019 — Maintenant</span>
            <p>Développeur Web & UI Designer</p>
          </div>
        </div>
      </div>

      <div className="experience">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h4>CGI</h4>
            <span className="date">fév 2017 — jan 2019</span>
            <p>Analyste Programmeur</p>
          </div>
        </div>
      </div>

      <div className="experience">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h4>Intermarché</h4>
            <span className="date">oct — nov 2015</span>
            <p>Développeur Web</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
