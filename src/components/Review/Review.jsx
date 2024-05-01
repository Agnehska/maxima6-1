import React from 'react';
import './Review.scss';
import Slider from 'react-slick';
import NextArrow from '../Slider/Arrows/NextArrow/NextArrow';
import PrevArrow from '../Slider/Arrows/PrevArrow/PrevArrow';
import ReviewBlock from './ReviewBlock/ReviewBlock';


const reviewsInfo = [
  {id:0, 
    name: 'Дарья Достоевская1', 
    date: '23 декабря 2022', 
    text: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым...'},
  {id:1, 
    name: 'Евгений Маяковский1', 
    date: '23 декабря 2022', 
    text: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым...'},
  {id:2, 
    name: 'Дарья Достоевская2', 
    date: '23 декабря 2022', 
    text: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым...'},
  {id:3, 
    name: 'Евгений Маяковский2', 
    date: '23 декабря 2022', 
    text: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым...'},
]

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <section className="review">
      <div className="container">
        <h2 className="review__title"><span>Более 200 отзывов</span> от наших клиентов</h2>
        <Slider {...settings}> 
          {reviewsInfo.map(review => {
            return (
              <ReviewBlock key={review.id} review={review}/>
            )
          })}
          
        </Slider>
      </div>
    </section>
  );
}

export default Review;
