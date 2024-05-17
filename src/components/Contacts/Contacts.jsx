import React from 'react';
import './Contacts.scss';
import map from '../../assets/img/map.png';
import whatsapp from '../../assets/img/whatsapp_contacts.svg';
import email from '../../assets/img/mail_contacts.svg';
import Calc from '../blocks/Calc/Calc';
import Estimate from '../Estimate/Estimate';

const Contacts = () => {
  return (
    <>
      <Estimate />
      <section className="contacts">
        <div className="container">
          <div className="contacts__wrap">
            <div className="contacts__block">
              <h2 className="contacts__title">
                Наши контакты
              </h2>
              <p className="contacts__address">г. Москва, улица Рубинштейна, 43</p>
              <p className="contacts__time">Без выходных с 10:00 до 20:00</p>
              <a href="tel:+78000000000" className="contacts__phone">+ 7 (800) 000-00-00</a>
              <a href="/" className="contacts__link">Заказать обратный звонок</a>
              <p className="contacts__phrase">Пишите , мы онлайн</p>
              <div className="contacts__icons">
                <a href="/" className="contacts__icon">
                  <img src={whatsapp} alt="icon" />
                </a>
                <a href="/" className="contacts__icon">
                  <img src={email} alt="icon" />
                </a>
              </div>
              <Calc text={'Рассчитать стоимость'} status={false} />
            </div>
            <div className="contacts__btn">
              <h2 className="contacts__title">
                Приезжайте к нам в офис
              </h2>
              <div className="contacts__map">
                <img src={map} alt="map" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
}

export default Contacts;
