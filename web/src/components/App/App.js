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
import Banner from '../Banner/Banner';

export default function App() {
  return (
    <div className="app">
      <Header />

      <Banner />

      <About />

      <Dots name="strategy" />
      <Strategy />
      <Posts />

      <Dots name="projects-before" />
      <Projects />
      <Dots name="projects-after" />

      <Quotes />

      <Dots name="footer" />
      <Footer />
    </div>
  );
}
