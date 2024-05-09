import React, { useState } from 'react';
import './ReviewBlock.scss';
import pic1 from '../../../assets/img/pic1.png';
import pic2 from '../../../assets/img/pic2.png';
import google from '../../../assets/img/google.svg';

const ReviewBlock = ({review, getReviews}) => {
  const [name, setName] = useState(review.name);
  const [date, setDate] = useState(review.date);
  const [body, setBody] = useState(review.body);
  const [isModified, setIsModified] = useState(false);

  function handlerChangeReview(){
    setIsModified(true);
  }

  async function handlerSaveReview(id){
    const response = await fetch(`http://localhost:5000/comments/${id}`,{
      method: 'PUT',
      headers: {'Content-Type': 'applecation/json'},
      body: JSON.stringify({name, date, body, email: review.email})
    });
    const reviews = await response.json();
    if (reviews){
      setIsModified(false);
      getReviews();
    }
  }
  return (
    <div className='review__block'>
      <div className="review__wrap">
        <img src={review.id % 2 === 0 ? pic2 : pic1} alt="imageForSlider" className='review__img' />
        {isModified ? 
        <>
          <div className="review__info">
            <input type="text" className="review__input"  value={name} onChange={event => setName(event.target.value)}/>
            <input type="date" className="review__input" required pattern="\d{4}-\d{2}-\d{2}" value={date} onChange={event => setDate(event.target.value)}/>
          </div>
        </> : 
        <>
          <div className="review__info">
            <h4 className="review__subtitle" onClick={() => handlerChangeReview()}>{review.name}</h4>
            <p className="review__date">{review.date}</p>
          </div>
        </>}
        
        <img src={google} alt="icon" />
      </div>
          {isModified ? 
          <>
            <textarea className='review__textarea' onChange={event => setBody(event.target.value)}>{body}</textarea>
            <button className="review__btn" onClick={() => handlerSaveReview(review.id)}>Save</button>
          </> : 
          <>
            <p className="review__text">{review.body}</p>
            <a href="/" className="review__link">Читать дальше</a>
          </>}
        
    </div>
  );
}

export default ReviewBlock;
