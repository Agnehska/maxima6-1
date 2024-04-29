import './App.scss';
import React from 'react';
import Intro from './components/Intro/Intro';
import Promise from './components/Promise/Promise'
import Popular from './components/Popular/Popular';
import IdealHome from './components/IdealHome/IdealHome';
import MultipleItems from './components/Slider/Slider'
import Gallery from './components/Gallery/Gallery';
import Consultation from './components/Consultation/Consultation';
import Catalog from './components/Catalog/Catalog';
import Estimate from './components/Estimate/Estimate';

function App() {
  return (
    <div >
      <Intro />
      <Promise />
      <Popular />
      <IdealHome />
      <MultipleItems />
      <Gallery />
      <Consultation />
      <Catalog />
      <Estimate />
    </div>
  );
}

export default App;
