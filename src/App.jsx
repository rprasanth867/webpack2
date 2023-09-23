import React from 'react';
import Details from './components/Details';
import Header from './components/Header';
import './App.scss';
import { DisplayImages } from './components/DisplayImages';

function App() {
  return (
    <main>
      <Header />
      <Details />
      <DisplayImages />
    </main>
  );
}

export default App;
