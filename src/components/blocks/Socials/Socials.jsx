import React from 'react'
import './Socials.scss'
import wa from '../../../assets/img/watsapp_green.svg'

export default function Socials() {
  return (
    <div className='socials'>
        <div className="socials__block">
            <p className="socials__text">Мы онлайн</p>
            <div className="socials__icon">
                <img src={wa} alt="wa" />
            </div>
        </div>
        <div className="socials__block">
            <p className="socials__text">Без выходных с 10:00 до 20:00</p>
            <p className="socials__phone">+7 (800) 000-00-00</p>
            <a href="#" className="socials__link">Заказать обратный звонок</a>
        </div>
    </div>
  )
}
