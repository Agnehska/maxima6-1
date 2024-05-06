import React from 'react';
import './Director.scss';
import director from '../../assets/img/men.png';
import tree from '../../assets/img/tree1.png';

const Director = () => {
  return (
    <section className="director">
      <div className="container">
        <div className="director__wrap">
          <div className="director__img">
            <img src={director} alt="director" />
            <img src={tree} alt="tree" className='director__tree' />
          </div>
          <div className="director__block">
            <h2 className="director__title">
              <span>Здравствуйте, я Олег Соловьев,</span> директор и основатель компании.
            </h2>
            <p className="director__text">
              На рынке строительных услуг мы уже 14 лет. за это время нам удалось сформировать сплоченный коллектив специалистов с более чем двадцатилетним стажем. Вместе с тем я слежу за тем, чтобы наши специалисты оставались в курсе последних технологий, совершенствовали свои навыки.
            </p>
            <div className="director__box">
              <div className="director__card">
                <p className="director__info">
                  <span>10</span> лет
                </p>
                <p className="director__info">компания на рынке</p>
              </div>
              <div className="director__card">
                <p className="director__info">
                  <span>200</span> +
                </p>
                <p className="director__info">объектов построено</p>
              </div>
              <div className="director__card">
                <p className="director__info">
                  <span>5</span> лет
                </p>
                <p className="director__info">гарантия на работы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Director;
