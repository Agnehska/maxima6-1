import React from 'react'
import './Promise__cart.scss'


export default function Promise__cart({size, text, text1, price}) {
  return (
    <div className={`promise-cart promise-cart_${size}`}>
        <div className="promise-cart__block">
            <h4 className="promise-cart__title">
                <p>{text}</p>
                <p>{text1}</p>
            </h4>
            <p className="promise-cart__notice">
                100+ проектов
            </p>
        </div>
        <div className={size === 'small'? 'promise-cart__pay': "promise-cart__pay promise-cart__pay_order"}>
            <button className="btn promise-cart__btn">
                смотреть проекты
            </button>
            <p className="promise-cart__price">
                от <span> {price} </span> руб/м
            </p>
        </div>
    </div>
  )
}
