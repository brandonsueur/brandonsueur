import React, { Component } from 'react';

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'

class App extends Component {
  render() {
    return (
        <div>
            <Header/>

            <Banner />

            <hr />
        </div>
    );
  }
}

export default App;
