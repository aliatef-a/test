import React from 'react'
import style from './button.module.css'
import Link from 'next/link'
const Buttonyellow = ({ url, text , className }) => {
  return (
    <div className={style.btn}>
      <div className={style.btnYellow}>
        <Link className={className} href={url}>{text}</Link>
      </div>
    </div>
  )
}

export default Buttonyellow

export const ButtonWhite = ({ url, text , className }) => {
  return (
    <div className={style.btn}>
      <div className={style.buttonWhite}>
        <Link className={className} href={url}>{text}</Link>
      </div>
    </div>
  )
}

