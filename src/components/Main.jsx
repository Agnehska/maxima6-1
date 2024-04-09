import React from 'react'
import Button from './blocks/Button'

export default function Main() {
  return (
    <div className='main'>
        <div className="container">
            <div className="main__wrap">
                <p className="main__title">
                    <span>Строительство деревянных домов</span> под ключ в Курске
                </p>
                <p className="main__text">
                    Построим теплый и надежный дом 
                    <span> с гарантией 10 лет</span>
                </p>
                <Button class_btn={'main__btn'}>рассчитать стоимость</Button>
            </div>
        </div>
    </div>
  )
}
