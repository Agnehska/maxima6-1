import React from 'react';
import './Promise.scss';
import PromiseColumn from './PromiseColumn/PromiseColumn';
import { cardInfo1, cardInfo2, cardInfo3 } from './PromiseInfo';

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
