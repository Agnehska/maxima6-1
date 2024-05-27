import React from 'react';
import './PromiseCard.scss';


function PromiseCard({size, text, text1, price}) {
  return (
    <div className={`promise-card promise-card_${size}`}>
        <div className="promise-card__block">
            <h4 className="promise-card__title">
                <p>{text}</p>
                <p>{text1}</p>
            </h4>
            <p className="promise-card__notice">
                100+ проектов
            </p>
        </div>
        <div className={size === 'small'? 'promise-card__pay': "promise-card__pay promise-card__pay_order"}>
            <button className="btn promise-card__btn">
                смотреть проекты
            </button>
            <p className="promise-card__price">
                от <span> {price} </span> руб/м
            </p>
        </div>
    </div>
  )
}

export default PromiseCard;