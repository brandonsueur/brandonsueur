import React from 'react';

import Background from "../Background/Background";
import Menu from "../Menu/Menu";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="split-background">
          <Background />
        </div>

        <main className="split-container">
          <Menu />
        </main>
      </div>
    )
  }
}

export default App;
