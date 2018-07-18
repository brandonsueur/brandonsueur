import React, { Component } from 'react';

import Background from "../Background/Background";


import "./App.css";

class App extends Component {
  render() {
    return (
      <app>
        <div className="split-background">
          <Background />
        </div>

        <div className="split-container">
          {/* the code ... */}
        </div>
      </app>
    )
  }
}

export default App;
