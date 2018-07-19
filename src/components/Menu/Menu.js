import React from 'react';

import Socials from "../Socials/Socials"

import "./Menu.css";

class Menu extends React.Component {
  render() {
    return(
      <nav className="menu">
        <ul className="links">
          <li><a href="#about">À propos</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@brandonsueur/">Articles</a></li>
        </ul>

        <div className="align-right">
          <Socials />
        </div>
      </nav>
    )
  }
}

export default Menu;
