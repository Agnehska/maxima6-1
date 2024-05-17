import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="header__wrap">
        <nav className='header__nav'>
          <ul className="header__menu">
            <li className="header__item">
              <a href="/" className="header__link header__link_arrow">проекты</a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link">фото работ</a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link">акции</a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link header__link_arrow">услуги</a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link header__link_arrow">заказчику</a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link">контакты</a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link header__link_select">избранное</a>
            </li>
            <li className="header__item">
              <a href="/" className="header__link header__link_search">поиск</a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
      
    </div>
  )
}
