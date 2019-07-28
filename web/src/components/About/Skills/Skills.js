import React from 'react';

import Tags from '../../Tags/Tags';

import './Skills.scss';

const Skills = () => {
  return (
    <div className="skills">
      <h3>Mes compétences</h3>

      <p>
        J’ai acquis mes compétences sur plusieurs années de pratique et de
        perfectionnement au travers différents projets personnels et
        professionnels.
      </p>

      <Tags />
    </div>
  );
};

export default Skills;
