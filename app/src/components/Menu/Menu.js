import React from 'react';
import { Link } from 'react-router-dom';

import Socials from "../Socials/Socials"

import "./Menu.css";

class Menu extends React.Component {
  render() {
    return(
      <nav className="menu">
        <ul className="links">
          <li><Link to={'/a-propos'}>À propos</Link></li>
          <li><Link to={'/articles'}>Articles</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>

        <div className="align-right">
          <Socials />
        </div>
      </nav>
    )
  }
}

export default Menu;
