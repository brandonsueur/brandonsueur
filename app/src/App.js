import React, { Component } from 'react';

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Services from './components/Services/Services'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

class App extends Component {
  render() {
    return (
        <div>
            <Header/>

            <Banner />

            <hr />

            <Services />

            <hr />

            <About />

            <hr />

            <Projects />

            <hr />
        </div>
    );
  }
}

export default App;
