import React from 'react'
import './Calc.scss'
import { useNavigate } from 'react-router-dom'

export default function Calc({text, status}) {
  const navigate = useNavigate();

  return (
    <div className='calc'>
        <button className="calc__btn" onClick={() => navigate('/ideal-home')}>
            {text}
        </button>
        {status && <a href="mailto:info@house.world" className="calc__link">info@house.world</a>}
    </div>
  )
}
