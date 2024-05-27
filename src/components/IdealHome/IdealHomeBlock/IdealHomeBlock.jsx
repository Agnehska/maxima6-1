import React from 'react';
import './IdealHomeBlock.scss';
import picture from '../../../assets/img/advice.png';
import { useSelector } from 'react-redux';

const titles = [
    {id: 1, title: 'Подготовительные работы'},
    {id: 2, title: 'Подбор участка'},
    {id: 3, title: 'Составление сметы '},
    {id: 4, title: 'Закладка фундамента'},
    {id: 5, title: 'Возведение стен'},
    {id: 6, title: 'Кровельные работы'},
]

export default function IdealHomeBlock({stage}) {
    const priceFromStore = useSelector((state) => state.stage.price);

  return (
    <div className="ideal-home__block">
        <img src={picture} alt="people" className='ideal-home__img' />
        <div className="ideal-home__info">
            <p className="ideal-home__time">Время: <span> {stage.id} день</span></p>
            {titles.map((elem, index) => {
                return (
                    <div key={index}>
                        <h2 className="ideal-home__title" >
                            {stage.id === elem.id && elem.title}
                        </h2>
                        
                    </div >
                )
            })}
            <p className="ideal-home__item">
                Перед строительством дома необходимо выравнивание участка, удаление деревьев и кустарников, корчевание пней, устройство временного забора, и в случае необходимости, проведение геологических и геодезических изысканий, разработка проектной документации, согласование процесса строительства.
            </p>
            <div className="ideal-home__card">
                <p className="ideal-home__text">
                Первый этап 
                <span> помогает вам узнать преимущества работы с нами </span>    
                    и ни к чему вас не обязывает
                </p>
            </div>
            <p className="ideal-home__item">Стоимость этапа: {stage.price} рублей</p>
            <p className="ideal-home__item">Итоговая стоимость: {priceFromStore} рублей</p>
        </div>
    </div>
  )
}
