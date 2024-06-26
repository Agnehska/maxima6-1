import React, { useState } from 'react';
import './IdealHome.scss';
// import dogovor from '../../assets/img/dogovor.svg';
// import house from '../../assets/img/roof_icon.svg'
import TabButton from '../blocks/TabButton/TabButton';
import IdealHomeBlock from './IdealHomeBlock/IdealHomeBlock';
import { useDispatch, useSelector } from 'react-redux';
// import { increment } from '../../redux/slices/counterSlice';
import { setStageForStore, addPrice, decPrice } from '../../redux/slices/stageSlice';
import Questions from '../Questions/Questions';
import Calculator from '../Calculator/Calculator';


const stages = [
  { id: 1, status: 'stage1', title: 'Этап 1', price: 100 },
  { id: 2, status: 'stage2', title: 'Этап 2', price: 200 },
  { id: 3, status: 'stage3', title: 'Этап 3', price: 100 },
  { id: 4, status: 'stage4', title: 'Этап 4', price: 400 },
  { id: 5, status: 'stage5', title: 'Этап 5', price: 500 },
  { id: 6, status: 'stage6', title: 'Этап 6', price: 1200 },
]

export default function IdealHome() {
  const [isActive, setIsActive] = useState(stages[0].status);
  const stageFromStore = useSelector((state) => state.stage.stage);
  const dispatch = useDispatch();

  function changeHouses(id, stage, price) {
    dispatch(setStageForStore(id));
    if (stageFromStore < id){
      dispatch(addPrice(price))
    } else {
      dispatch(decPrice(stages[id].price))
      console.log(stages[id].price)
    }
  }


  return (
    <>
    <Calculator />
      <div className="ideal-home">
        <div className="container">
          <h2 className="ideal-home__title"><span>Ваш</span> идеальный дом <span>всего за 6 этапов</span></h2>
          <div className="ideal-home__wrap">
            <div className="ideal-home__buttons">
                {stages.map(stage => {
                    return (
                        <TabButton key={stage.id}
                            class_btn={'tab__check ideal-home__check'}
                            isActive={isActive === stage.status}
                            setStatus={setIsActive}
                            elem={stage}
                            changeHouses={changeHouses}
                        >{stage.title}</TabButton>
                    )
                })}
            </div>
            {stages.map(stage => {
              if (stage.status === isActive) {
                return <IdealHomeBlock stage={stage} key={stage.id} />
              }
            })}
            {/* <div className="ideal-home__dogovor">
              <img src={house} alt="house" className='ideal-home__house' />
              <span className="ideal-home__line"></span>
              <p className="ideal-home__information">Пример договора - Этап №{stageFromStore}</p>
              <img src={dogovor} alt="house" className='ideal-home__house' />
            </div> */}
          </div>
        </div>
      </div>
      <Questions />
    </>
  )
}
