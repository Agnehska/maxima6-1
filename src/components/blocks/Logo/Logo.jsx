import React from 'react'
import './Logo.scss'
import logo from '../../../assets/img/logo.svg' 
import logo_text from '../../../assets/img/HOUSE_WORLD.svg'

export default function Logo() {
  return (
    <div className='logo'>
        <img src={logo} alt="logo" className='logo__img' />
        <div className='logo__block'>
            <img src={logo_text} alt="logo text" className='logo__text' />
            <p className="logo__info">Дома и бани от новгородских мастеров</p>
        </div>
    </div>
  )
}
