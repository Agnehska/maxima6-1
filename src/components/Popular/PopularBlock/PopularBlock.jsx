import React from 'react';
import { useSelector  } from 'react-redux';
import pic from '../../../assets/img/house.png';

const PopularBlock = () => {
  const statusFilterStore = useSelector((state) => state.filter.filter);
  return (
    <div className="popular__card" >
      <img src={pic} alt="photoForCard" className="popular__pic" />
      <div className="popular__info">
          <h4 className="popular__name">“Атаман”</h4>
          <div className="popular__block">
              <div className="popular__measure">
                  <p className="popular__dim">Площадь: <span>108 м</span></p>
                  <p className="popular__dim">Размеры: <span>7х9</span></p>
              </div>
              <div className="popular__measure">
                  <p className="popular__dim">Срок стройки: <span>16 дней</span></p>
                  <p className="popular__dim">Комнат: <span>5</span></p>
              </div>
          </div>
          <div className="popular__block popular__block_2">
              <p className="popular__type">Тип дома: </p>
              <p className="popular__type_right">{statusFilterStore}</p>
          </div>
          <div className="popular__block popular__block_2">
              <p className="popular__type">Стоимость: </p>
              <p className="popular__type_right">от <span>1 780 000</span> руб</p>
          </div>
          <div className="popular__bottom">
              <button className="btn popular__btn"><p>смотреть проекты</p></button>
              <p className="popular__plan">
                  Индивидуальная планировка дома
              </p>
          </div>
      </div>
  </div>
  );
}

export default PopularBlock;
