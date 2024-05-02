import React from "react";
import Slider from "react-slick";
import './Slider.scss'
import NextArrow from './Arrows/NextArrow/NextArrow'
import PrevArrow from "./Arrows/PrevArrow/PrevArrow";
import SliderBlock from "./SliderBlock/SliderBlock";
import { useSelector } from "react-redux";


const slidersInfo = [
  {
    id: 1, img: '../../assets/img/img1.png', subttile: 'Любая перепланировка в подарок!',
    text: `Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
              когда нужно выстро заполнить макеты или прототипы содержимым.`},
  {
    id: 2, img: '../../assets/img/img2.png', subttile: 'Металлическая дверь в подарок!',
    text: `Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
              когда нужно выстро заполнить макеты или прототипы содержимым.`},
  {
    id: 3, img: '../../assets/img/img1.png', subttile: 'Металлическая дверь в подарок!',
    text: `Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
              когда нужно выстро заполнить макеты или прототипы содержимым.`},
  {
    id: 4, img: '../../assets/img/img2.png', subttile: 'Любая перепланировка в подарок!',
    text: `Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
              когда нужно выстро заполнить макеты или прототипы содержимым.`},
  {
    id: 5, img: '../../assets/img/img1.png', subttile: 'Металлическая дверь в подарок!',
    text: `Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
              когда нужно выстро заполнить макеты или прототипы содержимым.`},
]

function MultipleItems() {
  const count = useSelector((state) => state.counter.value);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="slider">
      <div className="container">
        <h2 className="slider__title"><span>{count} Акции и подарки</span> для каждой семьи</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {slidersInfo.map(info => {
              return (
                <SliderBlock info={info} key={info.id} />
              )
            })}
          </Slider>
        </div>
      </div>
    </div>

  );
}

export default MultipleItems;
