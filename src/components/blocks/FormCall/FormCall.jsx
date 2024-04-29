import React from 'react';
import './FormCall.scss';
import whatsapp from '../../../assets/img/whatsapp.svg';
import viber from '../../../assets/img/viber.svg';
import telegram from '../../../assets/img/telegram.svg';
import Button from '../../blocks/Button/Button';

const FormCall = ({ title, title2, text, subtitle }) => {
  return (
    <div className="catalog__window">
      <h4 className="catalog__window-title"><span>{title}</span> {title2}</h4>
      <p className="catalog__window-text">{text}</p>
      <p className="catalog__window-subtitle">{subtitle}</p>
      <div className="catalog__socials">
        <div className="catalog__socials-block">
          <div className="catalog__socials-icon">
            <img src={whatsapp} alt="whatsapp" />
          </div>
          <p className="catalog__socials-text">What’s app</p>
        </div>
        <div className="catalog__socials-block">
          <div className="catalog__socials-icon">
            <img src={viber} alt="viber" />
          </div>
          <p className="catalog__socials-text">Viber</p>
        </div>
        <div className="catalog__socials-block">
          <div className="catalog__socials-icon">
            <img src={telegram} alt="telegram" />
          </div>
          <p className="catalog__socials-text">Telegram</p>
        </div>
      </div>
      <input type="tel" pattern="+7[0-9]{3}-[0-9]{3}-[0-9]{4}" className="catalog__input" placeholder='+7' />
      <Button class_btn={'catalog__btn'}>Получить каталог проектов</Button>
      <div className="catalog__politics">
        <p className="catalog__politics-text">Нажимая на кнопку, вы соглашаетесь с условиями</p>
        <a href="/" className="catalog__politics-link">Политики конфиденциальности</a>
      </div> 
    </div>
  );
}

export default FormCall;
