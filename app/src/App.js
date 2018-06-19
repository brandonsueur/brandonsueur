import React, { Component } from 'react';

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

class App extends Component {
  render() {
    return (
        <div>
            <Header/>

            <Banner />

            <hr />

            <Services />

            <hr />

            <Projects />

            <hr />

            <Contact />
        </div>
    );
  }
}

export default App;
