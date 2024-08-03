import React from 'react'
import info from './info.module.css'
import Buttonyellow, { ButtonWhite } from '../Button/Button'
import Image from 'next/image'
import img1 from '../../../../public/infoImg1.jpeg'
import img2 from '../../../../public/infoImg2.png'
import { Container } from 'react-bootstrap'

const Info = ({ Title_h1, title_span, title_p, div_btn, div_img, div_imgAbslout, overlay , width , height , border }) => {
    return (
        <Container>
            <section className={info.sectionInfo}>
                <div className={info.text}>
                    <h2>{Title_h1}<span>{title_span}</span></h2>
                    <p>{title_p}</p>
                    <div className={info.btn}>
                        {div_btn}
                    </div>
                </div>
                <div className={info.img}>
                    <div className={border}>
                        <Image className={info.img} width={width} height={height} src={div_img} alt='' />
                    </div> 
                    <div className={info.absloutImg}>
                        {div_imgAbslout}
                    </div>
                    {overlay}
                </div>
            </section>
        </Container>
    )
}

export default Info

