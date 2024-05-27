import React, { useState } from 'react';
import house from '../../../assets/img/house_calc.png';
import bathhouse from '../../../assets/img/bathhouse.png';
import { useDispatch, useSelector } from 'react-redux';
import { addPrice, setStageForCalc } from '../../../redux/slices/calculationSlice';

export default function CalculatorBlock1({ info }) {
  const [checkedElem, setCheckedElem] = useState("0");
  const dispatch = useDispatch();
  const price = useSelector(calculator => calculator.calculator.price);
  const slideNumber = useSelector(calculator => calculator.calculator.stage);
  
  function changeValue(event) {
    setCheckedElem(event.target.value)
  }
  
  function makeChoice(event){
    dispatch(addPrice(info.price[checkedElem]));
    dispatch(setStageForCalc(+slideNumber + 1))
    console.log(price)
  }

  return (
    <>
    <h4 className="calculator__text">0{info.id}. {info.text}</h4>
      <div className="calculator__blocks">
        <div className="calculator__block">
          <div className="calculator__img">
            <img src={house} alt="housePic" className='calculator__pic' />
          </div>
          <div className="calculator__check">
            <input 
              type="radio" 
              name='houseType' 
              id='house' 
              value='0'
              checked={checkedElem === '0' ? true : false}
              className='calculator__input' 
              onChange={changeValue}
            />
            <label htmlFor='house' className="calculator__info">{info.choses[0]}</label>
          </div>
        </div>
        <div className="calculator__block">
          <div className="calculator__img">
            <img src={bathhouse} alt="housePic" className='calculator__pic' />
          </div>
          <div className="calculator__check">
            <input 
              type="radio" 
              name='houseType' 
              id='bathhouse' 
              value='1'
              checked={checkedElem === '1' ? true : false} 
              className='calculator__input' 
              onChange={changeValue}/>
            <label htmlFor='bathhouse' className="calculator__info">{info.choses[1]}</label>
          </div>
        </div>
      </div>
      <div className="calculator__bottom">
        <p className="calculator__variant">Нажимайте на вариант ответа и переходите к следующему вопросу</p>
        <button className="calculator__btn" onClick={makeChoice}>Далее &raquo;</button>
      </div>
    </>
  )
}

