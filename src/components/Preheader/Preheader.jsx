import React from 'react'
import './Preheader.scss'
import Logo from '../blocks/Logo/Logo'
import Rating from '../blocks/Rating/Rating'
import Calc from '../blocks/Calc/Calc'
import Socials from '../blocks/Socials/Socials'

export default function Preheader() {
  return (
    <div className='preheader'>
      <div className="container">
        <div className="preheader__wrap">
          <Logo />
          <Rating />
          <Calc />
          <Socials />
        </div>
      </div>
    </div>
  )
}
