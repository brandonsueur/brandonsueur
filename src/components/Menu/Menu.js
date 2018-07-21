import React from 'react';
import { Link } from '@reach/router'

import Socials from "../Socials/Socials"

import "./Menu.css";

class Menu extends React.Component {
  render() {
    return(
      <nav className="menu">
        <ul className="links">
          <li><Link to="about">À propos</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>

        <div className="align-right">
          <Socials />
        </div>
      </nav>
    )
  }
}

export default Menu;
