import React from 'react'
import './Promise.scss'
import PromiseColumn from './PromiseColumn/PromiseColumn'

const cardInfo1 = [
    {text: 'Каркасные', text1: 'дома', price: '21 800', img: 'bg_promise_big.png', size: 'big'},
    {text: 'Перевозные', text1: 'бани', price: '19 700', img: 'bg_promise_small1.png', size: 'small'}
]
const cardInfo2 = [
    {text: 'Дома', text1: 'из бруса', price: '19 700', img: 'bg_promise_small2.png', size: 'small'},
    {text: 'Бани', text1: 'из бруса', price: '19 700', img: 'bg_promise_small3.png', size: 'small'},
    {text: 'Срубы под', text1: 'усадку', price: '19 700', img: 'bg_promise_small4.png', size: 'small'},
]

const cardInfo3 = [
    {text: 'Срубы под', text1: 'усадку', price: '19 700', img: 'bg_promise_small5.png', size: 'small'},
    {text: 'Каркасные', text1: 'бани', price: '21 800', img: 'bg_promise_big.png', size: 'big'},
]


export default function Promise() {
  return (
    <div className='promise'>
        <div className="container">
            <h2 className="title promise__title">
            Мы строим деревянные дома и бани 
            <span> с учетом всех особенностей Курска</span>
            </h2>
            <div className="promise__row">
                <div className="promise__column">
                    <PromiseColumn cardInfo={cardInfo1} type={1} />
                </div>
                <div className="promise__column">
                    <PromiseColumn cardInfo={cardInfo2} type={2} />
                </div>
                <div className="promise__column">
                    <PromiseColumn cardInfo={cardInfo3} type={3} />
                </div>
            </div>        
        </div>
    </div>
  )
}
