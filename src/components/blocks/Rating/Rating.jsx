import React from 'react'
import './Rating.scss'
import star from '../../../assets/img/Star_1.svg'

export default function Rating() {
  return (
    <div className='rating'>
      <div className="rating__flag">
        <p className="rating__rate">4,9</p>
      </div>
      <div className="rating__block">
        <div className="rating__stars">
          <img src={star} alt="star" className="rating__star" />
          <img src={star} alt="star" className="rating__star" />
          <img src={star} alt="star" className="rating__star" />
          <img src={star} alt="star" className="rating__star" />
        </div>
        <p className="rating__text">Рейтинг в Google на основании 180 отзывов</p>
      </div>
    </div>
  )
}
