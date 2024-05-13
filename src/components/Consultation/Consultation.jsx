import React, { useState } from 'react';
import './Consultation.scss';
import Button from '../blocks/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addConsultation } from '../../redux/slices/consultationSlice';

const Consultation = () => {
  const [dateInfo, setDateInfo] = useState('2022-01-23');
  const [phone, setPhone] = useState('');
  const consultationsData = useSelector(state => state.consultations.consultations);
  const dispatch = useDispatch();

  function makeOrder(event){
    // event.preventDefault();
    dispatch(addConsultation({dateInfo, phone}));
  }

  return (
    <section className="consultation"> 
      <div className="container">
        <div className="consultation__wrap">
          <h2 className="consultation__title">Запишитесь на <span> бесплатную экскурсию</span> по строящимся объектам</h2>
          <p className="consultation__text">На экскурсии вы сможете пообщаться с прорабом и строителями, а также:</p>
          <div className="consultation__block">
            <div className="consultation__info"><p><span>Познакомитесь</span> с технологией строительства</p></div>
            <div className="consultation__info"><p><span>Оцените</span> качество материалов на стройплощадке</p></div>
            <div className="consultation__info"><p><span>Зададите</span> вопросы руководителю строительства</p></div>
          </div>
          <div className="consultation__form">
            <div className="consultation__elem">
              <label htmlFor="1" className="consultation__label">Укажите дату:</label>
              <input type="date" className="consultation__input" value={dateInfo} onChange={event => setDateInfo(event.target.value)}/>
            </div>
            <div className="consultation__elem">
              <label htmlFor="1" className="consultation__label">Введите телефон:</label>
              <input type="tel" pattern="+7[0-9]{3}-[0-9]{3}-[0-9]{4}" className="consultation__input" placeholder='+7' 
              value={phone} onChange={event => setPhone(event.target.value)}/>
            </div>
          </div>
          <Button class_btn={'consultation__btn'} functionBtn={makeOrder}>Записаться на экскурсию</Button>
          {/* {console.log(consultationsData)} */}
          <div className="consultation__politics">
            <p className="consultation__politics-text">Нажимая на кнопку, вы соглашаетесь с условиями</p>
            <a href="/" className="consultation__politics-link">Политики конфиденциальности</a>
          </div>   
        </div>
      </div>
    </section>
  );
}

export default Consultation;
