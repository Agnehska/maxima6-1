import React from 'react';
import './IdealHomeBlock.scss';
import picture from '../../../assets/img/advice.png';

const titles = [
    {id: 1, title: 'Согласование проекта коттеджа'},
    {id: 2, title: 'Оформление документов'},
    {id: 3, title: 'Составление сметы на строительство'},
    {id: 4, title: 'Подготовительные работы и закладка фундамента'},
    {id: 5, title: 'Возведение стен и межэтажных перекрытий'},
    {id: 6, title: 'Кровельные работы'},
]

export default function IdealHomeBlock({stage}) {
  return (
    <div className="ideal-home__block">
        <img src={picture} alt="people" className='ideal-home__img' />
        <div className="ideal-home__info">
            <p className="ideal-home__time">Время: <span> {stage.id} день</span></p>
            {titles.map((elem, index) => {
                return (
                    <h2 className="ideal-home__title" key={index}>
                        {stage.id === elem.id && elem.title}
                    </h2>
                )
            })}
            <ul className="ideal-home__list">
                <li className="ideal-home__item"><p>Выбор <span>  объекта</span></p></li>
                <li className="ideal-home__item"><p>Расчет <span>  стоимости</span></p></li>
                <li className="ideal-home__item"><p>Утверждение <span>  планировки</span></p></li>
            </ul>
            <div className="ideal-home__card">
                <p className="ideal-home__text">
                Первый этап 
                <span> помогает вам узнать преимущества работы с нами </span>    
                    и ни к чему вас не обязывает
                </p>
            </div>
        </div>
    </div>
  )
}
