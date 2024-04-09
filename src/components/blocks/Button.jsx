import React from 'react'

export default function Button({class_btn, children}) {
  return (
    <button className={class_btn}>{children}</button>
  )
}
