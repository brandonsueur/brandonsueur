import React from 'react';

import Header from '../Header/Header';
import Quotes from '../Quotes/Quotes';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Strategy from '../Strategy/Strategy';
import About from '../About/About';

import './App.scss';
import Dots from '../Dots/Dots';

export default function App() {
  return (
    <div className="app">
      <Header />

      <About />

      <div className="dots-strategy">
        <Dots />
      </div>
      <Strategy />
      <Posts />

      <div className="dots-projects-1">
        <Dots />
      </div>
      <Projects />
      <div className="dots-projects-2">
        <Dots />
      </div>

      <Quotes />

      <div className="dots-footer">
        <Dots />
      </div>
      <Footer />
    </div>
  );
}
