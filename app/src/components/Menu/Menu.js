import React from 'react';
import { NavLink } from 'react-router-dom';

import Socials from "../Socials/Socials"

import "./Menu.css";

class Menu extends React.Component {
  render() {
    return(
      <nav className="menu">
        <ul className="links">
          <li><NavLink activeClassName="active" to={'/a-propos'}>À propos</NavLink></li>
          <li><NavLink activeClassName="active" to={'/articles'}>Articles</NavLink></li>
          <li><NavLink activeClassName="active" to={'/contact'}>Contact</NavLink></li>
        </ul>

        <div className="align-right">
          <Socials />
        </div>
      </nav>
    )
  }
}

export default Menu;
