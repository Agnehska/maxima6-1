import React from 'react'
import './Button.scss'

export default function Button({class_btn, functionBtn, children}) {
  return (
    <button className={`btn ${class_btn}`} onClick={functionBtn}>{children}</button>
  )
}
