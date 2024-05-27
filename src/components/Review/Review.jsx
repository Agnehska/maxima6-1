import React, { useEffect, useState } from 'react';
import './Review.scss';
import Slider from 'react-slick';
import NextArrow from '../Slider/Arrows/NextArrow/NextArrow';
import PrevArrow from '../Slider/Arrows/PrevArrow/PrevArrow';
import ReviewBlock from './ReviewBlock/ReviewBlock';
import ReviewModal from './ReviewModal/ReviewModal';
import Director from '../Director/Director';

const Review = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handlerShowModal(){
    setShowModal(true);
  }

  async function getReviews(){
    const response = await fetch('http://localhost:5000/comments');
    const reviews = await response.json();
    setReviewsInfo(reviews);
  }

  useEffect(() => {
    getReviews()
  }, [])

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
    <>
      <Director />
      <section className="review">
        <div className="container">
          <h2 className="review__title"><span>Более 200 отзывов</span> от наших клиентов</h2>
          <button className="review__btn" onClick={handlerShowModal}> Add </button>
          <Slider {...settings}> 
            {reviewsInfo.map(review => {
              return (
                <ReviewBlock key={review.id} review={review} getReviews={getReviews} />
              )
            })}
            
          </Slider>
        </div>
        <ReviewModal getReviews={getReviews} showModal={showModal} setShowModal={setShowModal} />
      </section>
    </>
  );
}

export default Review;
