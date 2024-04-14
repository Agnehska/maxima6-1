import React from 'react'
import './Intro.scss'
import Preheader from '../Preheader/Preheader'
import Header from '../Header/Header'
import Main from '../Main/Main'

export default function Intro() {
  return (
    <div className='intro'>
        <Preheader />
        <Header />
        <Main />
    </div>
  )
}
