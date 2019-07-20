import React from 'react';

import Typer from './Typer';

import './Header.scss';

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="username">
          <h4>Brandon Sueur</h4>
          <p className="me">
            Développeur & <Typer />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
