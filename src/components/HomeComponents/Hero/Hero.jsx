'use client'
import React from 'react'
import './hero.css'
import { Container } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const Hero = () => {
    const swiperImg = [
        {
            id: 1,
            src: '/ong4.jpeg',
        },
        {
            id: 2,
            src: '/png1.jpeg',
        },
        {
            id: 3,
            src: '/png2.jpeg',
        },
        {
            id: 4,
            src: '/png3.jpeg',
        }
    ]
    console.log(swiperImg);
    return (
        <>
            <section className='hero'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {swiperImg.map((links) => {
                        return (
                            <SwiperSlide className='swiper-content' key={links.id}>
                                <div className='img'>
                                    <Image priority src={links.src} fill alt='' />
                                    <div className='overlay'></div>
                                    <div className='text'>
                                        <h2>مرحبا بك في <span>Lali Cafe & Resturant</span></h2>
                                        <p>استمتع باشهي الاطباق التي تضم افضل المكونات في المملكة العربية الان</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </section>
        </>

    )
}

export default Hero
