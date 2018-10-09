import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// components
import Background from "../Background/Background";
import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Post from "../Post/Post";
import Contact from "../Contact/Contact";

// css
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
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/articles/:slug' component={Post} />
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
