import React from 'react';

import Header from '../Header/Header';
import Quotes from '../Quotes/Quotes';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Header />

      <Projects />
      <Quotes />
      <Footer />
    </div>
  );
}
