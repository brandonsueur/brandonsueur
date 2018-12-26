import React from 'react';

import me from './img/me.jpg';

import "./Background.css";

class Background extends React.Component {
  render() {
    return(
      <figure className="background-image">
        <img src={me} alt="Photo de moi"/>
      </figure>
    )
  }
}

export default Background;
