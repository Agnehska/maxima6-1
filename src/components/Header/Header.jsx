import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="header__wrap">
        <nav className='header__nav'>
          <ul className="header__menu">
            <li className="header__item">
              <Link to="/popular" className="header__link">проекты</Link>
            </li>
            <li className="header__item">
              <Link to="/promise" className="header__link">Дома и бани</Link>
            </li>
            <li className="header__item">
              <Link to="/multiple-items" className="header__link">акции</Link>
            </li>
            <li className="header__item">
              <Link to="/ideal-home" className="header__link">Рассчет</Link>
            </li>
            <li className="header__item">
              <Link to="/gallery" className="header__link">заказчику</Link>
            </li>
            <li className="header__item">
              <Link to="/contacts" className="header__link">контакты</Link>
            </li>
            <li className="header__item">
              <Link to="/review" className="header__link header__link_select">отзывы</Link>
            </li>
            <li className="header__item">
              <Link to="/users" className="header__link header__link_search">пользователи</Link>
            </li>
          </ul>
        </nav>
        </div>
      </div>
      
    </div>
  )
}
