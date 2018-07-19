import React, { Component } from 'react';

import Background from "../Background/Background";
import Socials from "../Socials/Socials";

import "./App.css";

class App extends Component {
  render() {
    return (
      <app className="wrapper">
        <div className="split-background">
          <Background />
        </div>

        <main className="split-container">
          <Socials />

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque assumenda adipisci fugit, numquam placeat eius doloribus praesentium quo, magnam laborum quas beatae fuga explicabo earum quod sunt reiciendis optio porro, odio tempore eveniet molestiae sed. Quasi ducimus ea unde, obcaecati recusandae asperiores, facilis quas exercitationem voluptatum saepe magnam! Neque nihil suscipit unde esse accusantium necessitatibus, id, aut eius perferendis facilis ipsa molestias accusamus laudantium! Molestiae fuga sint beatae eveniet, aperiam error reprehenderit. Facere ea sed quos in voluptatibus doloribus, voluptate. Vero placeat illo, minima! Rem id sapiente, dolores, fugiat neque, voluptates provident placeat consequuntur repellendus quidem aspernatur corporis maxime asperiores.
        </main>
      </app>
    )
  }
}

export default App;
