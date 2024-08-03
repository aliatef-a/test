import React from 'react'
import arrowright from '../../../../public/arrowRight.svg'
import arrowLeft from '../../../../public/arrowLeft.svg'
import style from './header.module.css'
import Image from 'next/image'
const Header = ({text_h2 , text_span}) => {
  return (
    <>
         <div className={style.header} style={{position: 'relative'}}>
                <h2>{text_h2}<span>{text_span}</span></h2>
                <div className='position-absolute top-0 d-flex gap-2' style={{left: "8%" , cursor: 'pointer'}}>
                    <Image className='arrow-left arrow' src={arrowright} width={43} height={43} alt=''/>
                    <Image className='arrow-right arrow' src={arrowLeft} width={43} height={43} alt=''/>
                </div>
            </div>
    </>
  )
}

export default Header