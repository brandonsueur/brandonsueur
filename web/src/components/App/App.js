import React from 'react';

import Header from '../Header/Header';
import Button from '../Button/Button';
import Socials from '../Socials/Socials';
import Tags from '../Tags/Tags';

import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Socials />

      <Button text="Salut tout le monde" link="http://google.fr" />

      <Tags />
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga
        reprehenderit ratione optio qui eum, minus non! Sed labore commodi et
        error magnam quia deserunt, vitae ex illo dolores voluptatum.
      </div>
    </div>
  );
}
