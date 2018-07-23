import React from 'react';
import { Router } from "@reach/router";
import { Link } from '@reach/router'

// components
import Background from "../Background/Background";
import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Contact from "../Contact/Contact";

// css
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="split-background">
          <Link to="/">
            <Background />
          </Link>
        </div>

        <main className="split-container">
          <Menu />

          <Router>
            <Banner path="/" />
            <About path="/about" />
            <Contact path="/contact" />
          </Router>
        </main>

        <div className="circle-bottom"></div>
      </div>
    )
  }
}

export default App;
