import React from 'react'
import PromiseCard from '../../blocks/PromiseCard/PromiseCard'
import '../../Promise/PromiseColumn/PromiseColumn.scss'

function PromiseColumn({cardInfo, type}) {
    let column = '';
    if (type === 1){
        column = cardInfo.map((card, index) => {
          return (
            <PromiseCard key={index}
                size={card.size} 
                text={card.text} 
                text1={card.text1} 
                price={card.price}
            />
          )
        }   
    )} else if (type === 2){
      column = cardInfo.map((card, index) => {
        return (
            <PromiseCard key={index}
                size={card.size} 
                text={card.text} 
                text1={card.text1} 
                price={card.price}
            />
        )
      })    
    } else if (type === 3){
      column = cardInfo.map((card, index) => {
        return (
            <PromiseCard key={index}
                size={card.size} 
                text={card.text} 
                text1={card.text1} 
                price={card.price}
            />
        )
      })    
    }

  return (
    <>
        {column}
    </> 
  )
}

export default PromiseColumn;