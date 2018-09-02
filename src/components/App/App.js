import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Background />
        </div>

        <main className="split-container">
          <Router>
            <div>
              <Menu />

              <Switch>
                <Route exact path='/' component={Banner} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
              </Switch>
            </div>
          </Router>
        </main>

        <div className="circle-bottom"></div>
      </div>
    )
  }
}

export default App;
