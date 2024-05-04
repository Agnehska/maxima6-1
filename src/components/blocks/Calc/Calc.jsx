import React from 'react'
import './Calc.scss'

export default function Calc({text, status}) {
  return (
    <div className='calc'>
        <button className="calc__btn">
            {text}
        </button>
        {status && <a href="mailto:info@house.world" className="calc__link">info@house.world</a>}
    </div>
  )
}
