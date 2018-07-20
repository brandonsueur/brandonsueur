import React from 'react';

import Background from "../Background/Background";
import Menu from "../Menu/Menu";

// import Banner from "../Banner/Banner";
import About from "../About/About";
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

          <About />

          {/* <Banner /> */}
        </main>

        <div className="circle-bottom"></div>
      </div>
    )
  }
}

export default App;
