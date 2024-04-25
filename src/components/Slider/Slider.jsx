import React from "react";
import Slider from "react-slick";
import './Slider.scss'
import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img2.png'
import Button from "../blocks/Button/Button";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider">
      <div className="container">
        <h2 className="slider__title"><span>Акции и подарки</span> для каждой семьи</h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className='slider__block'>
                <img src={img1} alt="imageForSlider" className='slider__img' />
                <div className="slider__wrap">
                  <h4 className="slider__subtitle">Любая перепланировка в подарок!</h4>
                  <p className="slider__text">Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно выстро заполнить макеты или прототипы содержимым.</p>
                  <Button class_btn="slider__btn">перейти к акции</Button>
                </div>
              </div>
            </div>
            <div>
              <div className='slider__block'>
                <img src={img2} alt="imageForSlider" className='slider__img' />
                <div className="slider__wrap">
                  <h4 className="slider__subtitle">Металлическая дверь <br /> в подарок!</h4>
                  <p className="slider__text">Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно выстро заполнить макеты или прототипы содержимым.</p>
                  <Button class_btn="slider__btn">перейти к акции</Button>
                </div>
              </div>
            </div>
            <div>
              <div className='slider__block'>
                <img src={img2} alt="imageForSlider" className='slider__img' />
                <div className="slider__wrap">
                  <h4 className="slider__subtitle">Металлическая дверь <br /> в подарок!</h4>
                  <p className="slider__text">Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно выстро заполнить макеты или прототипы содержимым.</p>
                  <Button class_btn="slider__btn">перейти к акции</Button>
                </div>
              </div>
            </div>
            <div>
              <div className='slider__block'>
                <img src={img1} alt="imageForSlider" className='slider__img' />
                <div className="slider__wrap">
                  <h4 className="slider__subtitle">Любая перепланировка в подарок!</h4>
                  <p className="slider__text">Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно выстро заполнить макеты или прототипы содержимым.</p>
                  <Button class_btn="slider__btn">перейти к акции</Button>
                </div>
              </div>
            </div>
            <div>
              <div className='slider__block'>
                <img src={img1} alt="imageForSlider" className='slider__img' />
                <div className="slider__wrap">
                  <h4 className="slider__subtitle">Любая перепланировка в подарок!</h4>
                  <p className="slider__text">Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно выстро заполнить макеты или прототипы содержимым.</p>
                  <Button class_btn="slider__btn">перейти к акции</Button>
                </div>
              </div>
            </div>
            <div>
              <div className='slider__block'>
                <img src={img2} alt="imageForSlider" className='slider__img' />
                <div className="slider__wrap">
                  <h4 className="slider__subtitle">Металлическая дверь <br /> в подарок!</h4>
                  <p className="slider__text">Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно выстро заполнить макеты или прототипы содержимым.</p>
                  <Button class_btn="slider__btn">перейти к акции</Button>
                </div>
              </div>
            </div>
            <div>
              <div className='slider__block'>
                <img src={img1} alt="imageForSlider" className='slider__img' />
                <div className="slider__wrap">
                  <h4 className="slider__subtitle">Любая перепланировка в подарок!</h4>
                  <p className="slider__text">Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно выстро заполнить макеты или прототипы содержимым.</p>
                  <Button class_btn="slider__btn">перейти к акции</Button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>

  );
}

export default MultipleItems;
