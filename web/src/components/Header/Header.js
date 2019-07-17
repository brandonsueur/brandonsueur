import React from 'react';

import Typer from './Typer';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="username">
        <h4>Brandon Sueur</h4>
        <p className="me">
          Développeur & <Typer />
        </p>
      </div>
    </div>
  );
};

export default Header;
