import React from 'react';

import Header from '../Header/Header';
import Socials from '../Socials/Socials';
import Button from '../Button/Button';

import './App.scss';

export default function App() {
  return (
    <div className="container">
      <Header />

      <Button text="Découvrir mes projets" link="http://google.fr/" />
    </div>
  );
}
