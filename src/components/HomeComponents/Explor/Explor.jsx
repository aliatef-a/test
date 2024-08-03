import React from 'react'
import style from './explor.module.css'
import logo from '../../../../public/logo.png'
import Image from 'next/image'
import Buttonyellow from '../Button/Button'
import { Container } from 'react-bootstrap'


const Explor = () => {
    return (
        <section className={style.explor}>
           <Container className={style.conatiner}>
             <Image src={logo} width={180} height={120} alt='' />
             <div className={style.explorContent}>
                 <h2>ليست مجرد قهوة في <span>Lali</span></h2>
                 <h3>نحن ندرك أن القهوة هي أكثر من مجرد مشروب إنها تجربة و لحظة من الاسترخاء، ووسيلة للتواصل. نقدم لك قهوة مميزة تجمع بين الجودة العالية والنكهات الفريدة لتكون كل رشفة تجربة لا تُنسي</h3>
                 <Buttonyellow url={'/menu'} text={'استكشف الان'}/>
             </div>
           </Container>
        </section>
    )
}

export default Explor