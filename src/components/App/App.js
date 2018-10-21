import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Background from "../Background/Background";
import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Contact from "../Contact/Contact";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <div>
            <div className="split-background">
              <Link to={'/'}>
                <Background />
              </Link>
            </div>

            <main className="split-container">
              <Menu />

              <Switch>
                <Route exact path='/' component={Banner} />
                <Route exact path='/a-propos' component={About} />
                <Route exact path='/contact' component={Contact} />
              </Switch>
            </main>
          </div>
        </Router>

        <div className="circle-bottom"></div>
      </div>
    )
  }
}

export default App;
