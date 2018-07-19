import React from 'react';

import Background from "../Background/Background";
import Socials from "../Socials/Socials";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="split-background">
          <Background />
        </div>

        <main className="split-container">
          <Socials />
        </main>
      </div>
    )
  }
}

export default App;
