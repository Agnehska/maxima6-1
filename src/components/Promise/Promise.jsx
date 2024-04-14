import React from 'react'
import './Promise.scss'
import Promise__cart from '../blocks/Promise__cart/Promise__cart'

const cart_info = [
    {text: 'Каркасные', text1: 'дома', price: '21 800', img: 'bg_promise_big.png', size: 'big'},
    {text: 'Перевозные', text1: 'бани', price: '19 700', img: 'bg_promise_small1.png', size: 'small'},
    {text: 'Дома', text1: 'из бруса', price: '19 700', img: 'bg_promise_small2.png', size: 'small'},
    {text: 'Бани', text1: 'из бруса', price: '19 700', img: 'bg_promise_small3.png', size: 'small'},
    {text: 'Срубы под', text1: 'усадку', price: '19 700', img: 'bg_promise_small4.png', size: 'small'},
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
                        <Promise__cart 
                            size={cart_info[0].size} 
                            text={cart_info[0].text} 
                            text1={cart_info[0].text1} 
                            price={cart_info[0].price}
                        />
                        <Promise__cart 
                            size={cart_info[1].size} 
                            text={cart_info[1].text} 
                            text1={cart_info[1].text1} 
                            price={cart_info[1].price}
                        />
                </div>
                <div className="promise__column">
                        <Promise__cart 
                            size={cart_info[2].size} 
                            text={cart_info[2].text} 
                            text1={cart_info[2].text1} 
                            price={cart_info[2].price}
                        />
                        <Promise__cart 
                            size={cart_info[3].size} 
                            text={cart_info[3].text} 
                            text1={cart_info[3].text1} 
                            price={cart_info[3].price}
                        />
                        <Promise__cart 
                            size={cart_info[4].size} 
                            text={cart_info[4].text} 
                            text1={cart_info[4].text1}
                            price={cart_info[4].price}
                        />
                </div>
                <div className="promise__column">
                        <Promise__cart 
                            size={cart_info[5].size} 
                            text={cart_info[5].text} 
                            text1={cart_info[5].text1}
                            price={cart_info[5].price}
                        />
                        <Promise__cart 
                            size={cart_info[6].size} 
                            text={cart_info[6].text} 
                            text1={cart_info[6].text1}
                            price={cart_info[6].price}
                        />
                </div>
            </div>
            
        </div>
    </div>
  )
}
