import React from 'react'
import '../TabButton/TabButton.scss'

export default function TabButton({class_btn, isActive, setStatus, elem, changeHouses, children}) {

  return (
    <button className={isActive ? class_btn + ' active' : class_btn}
        onClick={() => {setStatus(elem.status); 
        changeHouses(elem.id, elem.status, elem.price)}}>
            {children}
    </button>
  )
}
