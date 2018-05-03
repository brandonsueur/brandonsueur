import React, { Component } from 'react';

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Services from './components/Services/Services'

class App extends Component {
  render() {
    return (
        <div>
            <Header/>

            <Banner />

            <hr />

            <Services />

            <hr />
        </div>
    );
  }
}

export default App;
