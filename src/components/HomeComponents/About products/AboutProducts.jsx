'use client'
import React from 'react'
import style from './AboutProducts.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { ButtonWhite } from '../Button/Button';
import Image from 'next/image';
import Header from '../Headers/Header';

const AboutProducts = () => {
    return (
        <>
        <section className={style.products}>
           <Header text_h2={'نبذة عن '} text_span={'منتجاتنا'}/>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                modules={[Navigation]}
            >
                <SwiperSlide style={{color: 'red' , paddingRight: '100px'} }>
                    <div className={style.card}>
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <div style={{ position: 'relative' }}>
                                <Card.Img variant="top" src="/card.png" style={{ background: '#FDFAF1' }} />
                                <p style={{ position: 'absolute', top: '0', fontSize: '14px', fontWeight: '500', color: '#F6C61C', width: '90px', height: '25px', background: '#FFFFFF' }}>متاح 14 عنصر</p>
                            </div>
                            <Card.Body className={style.cardbody} style={{ textAlign: 'start', position: 'relative' }}>
                                <h3 style={{ fontSize: '15px', color: '#0000004D', fontWeight: '500' }}>طعام</h3>
                                <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#544827' }}>برجر لحم 3 طبقات</h2>
                                <h4 style={{ fontSize: '17px', fontWeight: '#CED7E8', color: '#CED7E8' }}>مميز بثلاث طبقات من اللحم الشهي الطازج</h4>
                                <h5 style={{ fontSize: '19px', fontWeight: '#F6C61C', color: '#F6C61C', position: 'absolute', left: '0' }}>110ر.س</h5>
                                <div style={{ marginTop: '20px', width: '100%' }}>
                                    <Link href={''} className={style.cardbtn}>اضف للسلة</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{color: 'red' , paddingRight: '100px'} }>
                    <div className={style.card}>
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <div style={{ position: 'relative' }}>
                                <Card.Img variant="top" src="/card.png" style={{ background: '#FDFAF1' }} />
                                <p style={{ position: 'absolute', top: '0', fontSize: '14px', fontWeight: '500', color: '#F6C61C', width: '90px', height: '25px', background: '#FFFFFF' }}>متاح 14 عنصر</p>
                            </div>
                            <Card.Body className={style.cardbody} style={{ textAlign: 'start', position: 'relative' }}>
                                <h3 style={{ fontSize: '15px', color: '#0000004D', fontWeight: '500' }}>طعام</h3>
                                <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#544827' }}>برجر لحم 3 طبقات</h2>
                                <h4 style={{ fontSize: '17px', fontWeight: '#CED7E8', color: '#CED7E8' }}>مميز بثلاث طبقات من اللحم الشهي الطازج</h4>
                                <h5 style={{ fontSize: '19px', fontWeight: '#F6C61C', color: '#F6C61C', position: 'absolute', left: '0' }}>110ر.س</h5>
                                <div style={{ marginTop: '20px', width: '100%' }}>
                                    <Link href={''} className={style.cardbtn}>اضف للسلة</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide style={{color: 'red' , paddingRight: '100px'} }>
                    <div className={style.card}>
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <div style={{ position: 'relative' }}>
                                <Card.Img variant="top" src="/card.png" style={{ background: '#FDFAF1' }} />
                                <p style={{ position: 'absolute', top: '0', fontSize: '14px', fontWeight: '500', color: '#F6C61C', width: '90px', height: '25px', background: '#FFFFFF' }}>متاح 14 عنصر</p>
                            </div>
                            <Card.Body className={style.cardbody} style={{ textAlign: 'start', position: 'relative' }}>
                                <h3 style={{ fontSize: '15px', color: '#0000004D', fontWeight: '500' }}>طعام</h3>
                                <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#544827' }}>برجر لحم 3 طبقات</h2>
                                <h4 style={{ fontSize: '17px', fontWeight: '#CED7E8', color: '#CED7E8' }}>مميز بثلاث طبقات من اللحم الشهي الطازج</h4>
                                <h5 style={{ fontSize: '19px', fontWeight: '#F6C61C', color: '#F6C61C', position: 'absolute', left: '0' }}>110ر.س</h5>
                                <div style={{ marginTop: '20px', width: '100%' }}>
                                    <Link href={''} className={style.cardbtn}>اضف للسلة</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide style={{color: 'red' , paddingRight: '100px'} }>
                    <div className={style.card}>
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <div style={{ position: 'relative' }}>
                                <Card.Img variant="top" src="/card.png" style={{ background: '#FDFAF1' }} />
                                <p style={{ position: 'absolute', top: '0', fontSize: '14px', fontWeight: '500', color: '#F6C61C', width: '90px', height: '25px', background: '#FFFFFF' }}>متاح 14 عنصر</p>
                            </div>
                            <Card.Body className={style.cardbody} style={{ textAlign: 'start', position: 'relative' }}>
                                <h3 style={{ fontSize: '15px', color: '#0000004D', fontWeight: '500' }}>طعام</h3>
                                <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#544827' }}>برجر لحم 3 طبقات</h2>
                                <h4 style={{ fontSize: '17px', fontWeight: '#CED7E8', color: '#CED7E8' }}>مميز بثلاث طبقات من اللحم الشهي الطازج</h4>
                                <h5 style={{ fontSize: '19px', fontWeight: '#F6C61C', color: '#F6C61C', position: 'absolute', left: '0' }}>110ر.س</h5>
                                <div style={{ marginTop: '20px', width: '100%' }}>
                                    <Link href={''} className={style.cardbtn}>اضف للسلة</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide style={{color: 'red' , paddingRight: '100px'} }>
                    <div className={style.card}>
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <div style={{ position: 'relative' }}>
                                <Card.Img variant="top" src="/card.png" style={{ background: '#FDFAF1' }} />
                                <p style={{ position: 'absolute', top: '0', fontSize: '14px', fontWeight: '500', color: '#F6C61C', width: '90px', height: '25px', background: '#FFFFFF' }}>متاح 14 عنصر</p>
                            </div>
                            <Card.Body className={style.cardbody} style={{ textAlign: 'start', position: 'relative' }}>
                                <h3 style={{ fontSize: '15px', color: '#0000004D', fontWeight: '500' }}>طعام</h3>
                                <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#544827' }}>برجر لحم 3 طبقات</h2>
                                <h4 style={{ fontSize: '17px', fontWeight: '#CED7E8', color: '#CED7E8' }}>مميز بثلاث طبقات من اللحم الشهي الطازج</h4>
                                <h5 style={{ fontSize: '19px', fontWeight: '#F6C61C', color: '#F6C61C', position: 'absolute', left: '0' }}>110ر.س</h5>
                                <div style={{ marginTop: '20px', width: '100%' }}>
                                    <Link href={''} className={style.cardbtn}>اضف للسلة</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide style={{color: 'red' , paddingRight: '100px'} }>
                    <div className={style.card}>
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <div style={{ position: 'relative' }}>
                                <Card.Img variant="top" src="/card.png" style={{ background: '#FDFAF1' }} />
                                <p style={{ position: 'absolute', top: '0', fontSize: '14px', fontWeight: '500', color: '#F6C61C', width: '90px', height: '25px', background: '#FFFFFF' }}>متاح 14 عنصر</p>
                            </div>
                            <Card.Body className={style.cardbody} style={{ textAlign: 'start', position: 'relative' }}>
                                <h3 style={{ fontSize: '15px', color: '#0000004D', fontWeight: '500' }}>طعام</h3>
                                <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#544827' }}>برجر لحم 3 طبقات</h2>
                                <h4 style={{ fontSize: '17px', fontWeight: '#CED7E8', color: '#CED7E8' }}>مميز بثلاث طبقات من اللحم الشهي الطازج</h4>
                                <h5 style={{ fontSize: '19px', fontWeight: '#F6C61C', color: '#F6C61C', position: 'absolute', left: '0' }}>110ر.س</h5>
                                <div style={{ marginTop: '20px', width: '100%' }}>
                                    <Link href={''} className={style.cardbtn}>اضف للسلة</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className='d-flex justify-content-center mt-5'>
                 <ButtonWhite className={style.Allproductsbtn} url='/menu' text = 'عرض الجميع'/>
            </div>
        </section >
    </>
    )
}

export default AboutProducts