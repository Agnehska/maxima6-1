import React from 'react';
import './ReviewBlock.scss';
import pic1 from '../../../assets/img/pic1.png';
import pic2 from '../../../assets/img/pic2.png';
import google from '../../../assets/img/google.svg';

const ReviewBlock = ({review}) => {
  return (
    <div className='review__block'>
      <div className="review__wrap">
        <img src={review.id % 2 === 0 ? pic2 : pic1} alt="imageForSlider" className='review__img' />
        <div className="review__info">
          <h4 className="review__subtitle">{review.name}</h4>
          <p className="review__date">{review.date}</p>
        </div>
        <img src={google} alt="icon" />
      </div>
        <p className="review__text">{review.text}</p>
        <a href="/" className="review__link">Читать дальше</a>
    </div>
  );
}

export default ReviewBlock;
