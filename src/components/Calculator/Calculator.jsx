import React, { useState } from 'react';
import './Calculator.scss';
import { LinearProgress } from '@mui/material';
import CalculatorBlock1 from './CalculatorBlocks/CalculatorBlock1';
import CalculatorBlock2 from './CalculatorBlocks/CalculatorBlock2';
import { useSelector } from 'react-redux';

const infoCalc = [
  {id: 1, text: 'Что будем строить?', choses: ['Дом', 'Баня'], price: [1000, 500]},
  {id: 2, text: 'Из какого материала?', choses: ['Брус', 'Блоки'], price: [2000, 1500]},
  {id: 3, text: 'Выберите тип отделки?', choses: ['Черновая', 'Под ключ'], price: [1500, 5000]},
  {id: 4, text: 'Выберите тип фундамента?', choses: ['Ленточный', 'Ж/б плита'], price: [4000, 5000]},
  {id: 5, text: 'Выберите тариф?', choses: ['Эконом', 'Стандарт'], price: [500, 700]},
  {id: 6, text: 'Выберите тариф?', choses: ['Эконом', 'Стандарт'], price: [500, 700]},
]


export default function Calculator() {
  const [progress, setProgress] = useState(20);
  const [page, setPage] = useState(0);
  const slideNumber = useSelector(calculator => calculator.calculator.stage);
  let info = infoCalc.find(info => info.id === slideNumber);
  console.log(slideNumber);
  console.log(info)

  return (
    <div className='calculator'>
      <div className="container">
        <h2 className="calculator__title">Рассчитайте предварительную стоимость <span>дома за 1 минуту</span></h2>
        <LinearProgress  variant='determinate' color="success" value={slideNumber*16.66} className='calculator__progress' />
        { (slideNumber < 6) ? <CalculatorBlock1 info={info} /> : <CalculatorBlock2 />}
        
      </div>
    </div>
  )
}
