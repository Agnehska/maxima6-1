import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPrice } from '../../../redux/slices/calculationSlice';

export default function CalculatorBlock2({ info }) {
  const [checkedElem, setCheckedElem] = useState(1);
  const dispatch = useDispatch();
  const price = useSelector(calculator => calculator.calculator.price)
  
  function changeValue(event) {
    setCheckedElem(event.target.value)
  }
  
  function makeChoice(event){
    dispatch(addPrice(info.price[checkedElem]))
    console.log(price)
  }

  return (
    <>
    <h4 className="calculator__title">Примерный результат вашего расчета</h4>
      <div className="calculator__blocks">
        <div className="calculator__block">
            <label htmlFor='bathhouse' className="calculator__text">{price} рублей</label>
        </div>
      </div>
      <div className="calculator__bottom">
        <p className="calculator__variant">Для более подробной информации закажите звонок специалиста</p>
        <button className="calculator__btn">Заказать звонок менеджера</button>
      </div>
      <div className="calculator__footer"></div>
    </>
  )
}

