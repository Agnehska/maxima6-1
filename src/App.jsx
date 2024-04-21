import './App.scss';
import React from 'react';
import Intro from './components/Intro/Intro';
import Promise from './components/Promise/Promise'
import Popular from './components/Popular/Popular';
import IdealHome from './components/IdealHome/IdealHome';

function App() {
  return (
    <div >
      <Intro />
      <Promise />
      <Popular />
      <IdealHome />
    </div>
  );
}

export default App;
