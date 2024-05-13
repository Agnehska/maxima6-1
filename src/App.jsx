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
import Review from './components/Review/Review';
import Director from './components/Director/Director';
import Questions from './components/Questions/Questions';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
// import { Counter } from './components/Counter/Counter';
import { TestComments } from './components/TestComments/TestComments';
import Users from './components/Users/Users';

function App() {
  return (
    <div >
      {/* <Counter /> */}
      <TestComments />
      {/* <Users /> */}
      <Intro />
      {/* <Promise />
      <Popular />
      <IdealHome />
      <MultipleItems />
      <Gallery />
      <Consultation />
      <Catalog />
      <Review />
      <Director />
      <Questions />
      <Estimate />
      <Contacts />
      <Footer /> */}
    </div>
  );
}

export default App;
