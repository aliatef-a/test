'use client'
import React from 'react'
import style from './rate.module.css'
import Header from '../Headers/Header'
import rateImg from '../../../../public/rate.jpeg'
import rateStar from '../../../../public/star.png'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'


const Rate = () => {
    return (
        <section style={{}}>
            <Header text_h2={'اراء '} text_span={'عملائنا'} />
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                modules={[Navigation]}
            >
                <SwiperSlide className={style.Swiper} >
                    <div className={style.cardRate}>
                        <div className={style.img}>
                            <Image src={rateImg} alt='' />
                        </div>
                        <div className={style.cardContent}>
                            <Image src={rateStar} alt='' />
                            <h4>حقيقي كانت تجربة مميزة جدا من المكان وهادي وجميل</h4>
                            <h5>ايمان احمد</h5>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={style.Swiper} >
                    <div className={style.cardRate}>
                        <div className={style.img}>
                            <Image src={rateImg} alt='' />
                        </div>
                        <div className={style.cardContent}>
                            <Image src={rateStar} alt='' />
                            <h4>حقيقي كانت تجربة مميزة جدا من المكان وهادي وجميل</h4>
                            <h5>ايمان احمد</h5>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={style.Swiper} >
                    <div className={style.cardRate}>
                        <div className={style.img}>
                            <Image src={rateImg} alt='' />
                        </div>
                        <div className={style.cardContent}>
                            <Image src={rateStar} alt='' />
                            <h4>حقيقي كانت تجربة مميزة جدا من المكان وهادي وجميل</h4>
                            <h5>ايمان احمد</h5>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={style.Swiper} >
                    <div className={style.cardRate}>
                        <div className={style.img}>
                            <Image src={rateImg} alt='' />
                        </div>
                        <div className={style.cardContent}>
                            <Image src={rateStar} alt='' />
                            <h4>حقيقي كانت تجربة مميزة جدا من المكان وهادي وجميل</h4>
                            <h5>ايمان احمد</h5>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={style.Swiper} >
                    <div className={style.cardRate}>
                        <div className={style.img}>
                            <Image src={rateImg} alt='' />
                        </div>
                        <div className={style.cardContent}>
                            <Image src={rateStar} alt='' />
                            <h4>حقيقي كانت تجربة مميزة جدا من المكان وهادي وجميل</h4>
                            <h5>ايمان احمد</h5>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className={style.shoppingIconContainer}>
                <div className={style.shoppingIcon}>
                    <Link href={''}>
                    <ShoppingCart className={style.icon} />
                    </Link>
                </div>
            </div>

        </section >
    )
}

export default Rate