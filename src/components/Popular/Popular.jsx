import React, { useState } from 'react';
import './Popular.scss';
import TabButton from '../blocks/TabButton/TabButton';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusForFilter } from '../../redux/slices/filterSlice';
import PopularBlock from './PopularBlock/PopularBlock';

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
    const [status, setStatus] = useState('all');
    const statusFilterStore = useSelector((state) => state.filter.filter);
    const dispatch = useDispatch();

    function changeHouses(filterType){
        dispatch(setStatusForFilter({filterType}));
        // console.log(statusFilterStore)
    }

return (
<div className='popular'>
    <div className="container">
        <h2 className="popular__title">Посмотрите популярные проекты домов {statusFilterStore}</h2>
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
                <p className="popular__all" onClick={() => {setStatus('all')}}>Смотреть все</p>
            </div>
            
            <div className="popular__row">
                {((status === 'all') &&
                    houses.map(house => {
                        return (
                            <PopularBlock key={house.id} />
                        )
                    })) || 
                    houses.filter(house => house.status === status).map(house => {
                        return (
                            <PopularBlock key={house.id} />
                        )
                    })}  
            </div>
        </div>
    </div>  
</div>
)
}
