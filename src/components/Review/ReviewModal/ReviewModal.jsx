import React, { useState } from 'react';
import './ReviewModal.scss';
import { uuid } from '../../../api/helpers';

const ReviewModal = ({getReviews, showModal, setShowModal}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [body, setBody] = useState('');
  

  async function handlerSaveReview(event){
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/comments`,{
      method: 'POST',
      headers: {'Content-Type': 'applecation/json'},
      body: JSON.stringify({id: uuid(8),name, date, body, email: 'test@mail.ru'})
    });
    const reviews = await response.json();
    if (reviews){
      getReviews();
      setShowModal(false);
    }
  }

  return (
    <div className={showModal ? 'modal' : 'modal hide'}>
      <div className="modal__close" onClick={() => setShowModal(false)}>X</div>
      <form className="modal__form">
          <input type="text" className="modal__input" placeholder='Name'  value={name} onChange={event => setName(event.target.value)}/>
          <input type="date" className="modal__input" required pattern="\d{4}-\d{2}-\d{2}" value={date} onChange={event => setDate(event.target.value)}/>
          <textarea className="modal__textarea" placeholder='Your review' onChange={event => setBody(event.target.value)}>{body}</textarea>
            <button className="modal__btn" onClick={handlerSaveReview}>Save</button>
      </form>
    </div>
  );
}

export default ReviewModal;
