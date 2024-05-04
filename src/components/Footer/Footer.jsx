import React from 'react';
import './Footer.scss';
import Header from '../Header/Header';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Header />
        <div className="footer__block">
          <p className="footer__rights">Все права защищены 2022.</p>
          <a href="/" className="footer__politics">
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
