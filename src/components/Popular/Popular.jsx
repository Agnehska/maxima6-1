import React, { useState } from 'react'
import './Popular.scss'
import pic from '../../assets/img/house.png'
import TabButton from '../blocks/TabButton/TabButton'

const houses = [
    {id: 1, title: 'Атаман', square: 108, price: 1780000, type: 'Каркасный', status: 'oneFlat'},
    {id: 2, title: 'Атаман', square: 108, price: 1780000, type: 'Каркасный', status: 'withMansard'},
    {id: 3, title: 'Атаман', square: 108, price: 1780000, type: 'Каркасный', status: 'withMansard'},
    {id: 4, title: 'Атаман', square: 108, price: 1780000, type: 'Каркасный', status: 'twoFlat'},
    {id: 5, title: 'Атаман', square: 108, price: 1780000, type: 'Каркасный', status: 'withPanarams'},
    {id: 6, title: 'Атаман', square: 108, price: 1780000, type: 'Каркасный', status: 'withGarage'},
]

const sortTypes = [
    {status: 'oneFlat', title: 'Одноэтажный'}, 
    {status: 'withMansard', title: 'С мансардой'}, 
    {status: 'twoFlat', title: 'Двухэтажный'},
    {status: 'withCokol', title: 'C цокольным этажом'},
    {status: 'threeFlat', title: 'Трехэтажные'},
    {status: 'withPanarams', title: 'С панорамными окнами'},
    {status: 'withGarage', title: 'С гаражом'},
    {status: 'frame', title: 'Каркасный'},    
]

export default function Popular() {
    const [status, setStatus] = useState(sortTypes[0].status);
    const [housesInfo, setHousesInfo] = useState(houses)

    function changeHouses(type){
        console.log(type);
        setHousesInfo((houses.filter(house => house.status === status)))
    }

  return (
    <div className='popular'>
        <div className="container">
            <h2 className="popular__title">Посмотрите популярные проекты домов</h2>
            <div className="popular__wrap">
                <div className="popular__choice">
                    <div className="popular__buttons">
                        {sortTypes.map((elem, index) => {
                            return (
                                <TabButton key={index} 
                                class_btn="tab__check"
                                isActive={status === elem.status}
                                setStatus={setStatus}
                                changeHouses={changeHouses}
                                elem={elem}
                                >
                                    {elem.title}
                                </TabButton>
                            )
                        })}
                    </div>
                    <a href="/" className="popular__all">Смотреть все</a>
                </div>
                
                <div className="popular__row">
                    {housesInfo.map(house => {
                        return (
                            <div className="popular__card" key={house.id}>
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
                                        <p className="popular__type_right">Каркасный</p>
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
                        )
                    })}        
                </div>
            </div>
        </div>
        
    </div>
  )
}
