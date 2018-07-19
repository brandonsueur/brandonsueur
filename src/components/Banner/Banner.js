import React from 'react';

import "./Banner.css";

class Banner extends React.Component {
  render() {
    return(
      <header>
        <div className="hello">Salut, mon nom est</div>

        <h1>Brandon Sueur <span>&</span><br/>
          Je conçois de belles choses<br/>
          puis j'écris du beau code.
        </h1>

        <div className="available">
          <div className="circle"></div>
          Disponible pour des missions freelance à temps partiel.
        </div>
      </header>
    )
  }
}

export default Banner;
