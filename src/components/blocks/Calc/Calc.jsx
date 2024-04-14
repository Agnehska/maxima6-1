import React from 'react'
import './Calc.scss'

export default function Calc() {
  return (
    <div className='calc'>
        <button className="calc__btn">
            Прислать проект на расчет
        </button>
        <a href="mailto:info@house.world" className="calc__link">info@house.world</a>
    </div>
  )
}
