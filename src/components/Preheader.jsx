import React from 'react'
import Logo from './blocks/Logo'
import Raiting from './blocks/Raiting'
import Calc from './blocks/Calc'
import Socials from './blocks/Socials'

export default function Preheader() {
  return (
    <div className='preheader'>
      <div className="container">
        <div className="preheader__wrap">
          <Logo />
          <Raiting />
          <Calc />
          <Socials />
        </div>
      </div>
    </div>
  )
}
