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
// import {TestComments} from './components/TestComments/TestComments';
import Users from './components/Users/Users';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/users' element={<Users />} />
        <Route path='/promise' element={<Promise />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/ideal-home' element={<IdealHome />} />
        <Route path='/multiple-items' element={<MultipleItems />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/review' element={<Review />} />
        <Route path='/consultation' element={<Consultation />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/director' element={<Director />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/estimate' element={<Estimate />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
