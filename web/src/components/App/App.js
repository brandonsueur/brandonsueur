import React from 'react';

import Header from '../Header/Header';
import Quotes from '../Quotes/Quotes';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Header />

      <Posts />
      <Projects />
      <Quotes />
      <Footer />
    </div>
  );
}
