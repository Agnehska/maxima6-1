import React from 'react'
import './Button.scss'

export default function Button({class_btn, children}) {
  return (
    <button className={`btn ${class_btn}`}>{children}</button>
  )
}
