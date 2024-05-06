import React from 'react';
import './SliderBlock.scss'
import Button from '../../blocks/Button/Button';
import img1 from '../../../assets/img/img1.png';
import img2 from '../../../assets/img/img2.png';

const SliderBlock = ({info}) => {
  return (
    <div className='slider__block'>
      <img src={info.id % 2 === 0 ? img1 : img2} alt="imageForSlider" className='slider__img' />
      <div className="slider__wrap">
        <h4 className="slider__subtitle">{info.subttile}</h4>
        <p className="slider__text">{info.text}</p>
        <Button class_btn="slider__btn">перейти к акции</Button>
      </div>
    </div>
  );
}

export default SliderBlock;
