import './App.scss';
import React from 'react';
import Footer from './components/Footer/Footer';
// import { Counter } from './components/Counter/Counter';
// import {TestComments} from './components/TestComments/TestComments';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import User from './components/Users/User/User';

const Intro = React.lazy(() => import('./components/Intro/Intro'));
const PromiseView = React.lazy(() => import('./components/Promise/Promise'));
const Popular = React.lazy(() => import('./components/Popular/Popular'));
const IdealHome = React.lazy(() => import('./components/IdealHome/IdealHome'));
const MultipleItems = React.lazy(() => import('./components/Slider/Slider'));
const Gallery = React.lazy(() => import('./components/Gallery/Gallery'));
const Review = React.lazy(() => import('./components/Review/Review'));
const Users = React.lazy(() => import('./components/Users/Users'));
const Questions = React.lazy(() => import('./components/Questions/Questions'));
const Contacts = React.lazy(() => import('./components/Contacts/Contacts'));

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
          path='*' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <Intro />
            </React.Suspense>
          } 
        />
        <Route 
          path='/promise' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <PromiseView />
            </React.Suspense>
          } 
        />
        <Route 
          path='/users' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <Users />
            </React.Suspense>
          } 
        />
        <Route 
          path='/popular' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <Popular />
            </React.Suspense>
          } 
        />
        <Route 
          path='/ideal-home' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <IdealHome />
            </React.Suspense>
          } 
        />
        <Route 
          path='/multiple-items' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <MultipleItems />
            </React.Suspense>
          } 
        />
        <Route 
          path='/gallery' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <Gallery />
            </React.Suspense>
          } 
        />
        <Route 
          path='/review' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <Review />
            </React.Suspense>
          } 
        />
        <Route 
          path='/questions' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <Questions />
            </React.Suspense>
          } 
        />
        <Route 
          path='/contacts' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <Contacts />
            </React.Suspense>
          } 
        />
        <Route 
          path='/users/:id' 
          element={
            <React.Suspense fallback={<Preloader />}>
              <User />
            </React.Suspense>
          } 
        />
      </Routes>
      <Footer />
    </>
  );
}


