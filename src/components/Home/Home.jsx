import React from 'react'
import Buttonyellow, { ButtonWhite } from "@/components/HomeComponents/Button/Button";
import Hero from "@/components/HomeComponents/Hero/Hero";
import Info from "@/components/HomeComponents/Info/Info";
import img1 from "../../../public/infoImg1.jpeg";
import img2 from "../../../public/infoImg2.png";
import img3 from "../../../public/info3 (2).png";
import Servies from "@/components/HomeComponents/Servies/Servies";
import Image from "next/image";
import AboutProducts from "@/components/HomeComponents/About products/AboutProducts";
import './Home.css'
import Explor from '../HomeComponents/Explor/Explor';
import Rate from '../HomeComponents/rate/Rate';
const Home = () => {
    return (
        <>
            <Hero />
            <Info
                Title_h1={"تجربة فريدة ومميزة معنا مع "}
                title_span={"الذ الاطباق"}
                title_p={
                    "نحن ندرك أهمية تناول الطعام الصحي والمتوازن. لهذا السبب نقدم لك مجموعة متنوعة من الأطباق الصحية التي تجمع بين المذاق الرائع والفوائد الغذائية العالية. نحن نهتم بكل تفصيلة لضمان تقديم وجبات تغذي جسمك وتلبي احتياجاتك."
                }
                div_btn={
                    <>
                        <Buttonyellow url="/menu" text="اطلب الان" />
                        <ButtonWhite url="/reservation" text="احجز مقعدك المميز" />
                    </>
                }
                div_img={img1}
                width={500}
                height={500}
                div_imgAbslout={<Image width={420} height={420} src={img2} alt="" />}
                overlay={<div className="overlay"></div>}
            />
            <Servies />
            <div className="position-relative">
                <Info
                    Title_h1={"طعام صحي يقدم لك بكل "}
                    title_span={"عناية"}
                    title_p={
                        "نحن ندرك أهمية تناول الطعام الصحي والمتوازن. لهذا السبب نقدم لك مجموعة متنوعة من الأطباق الصحية التي تجمع بين المذاق الرائع والفوائد الغذائية العالية. نحن نهتم بكل تفصيلة لضمان تقديم وجبات تغذي جسمك وتلبي احتياجاتك."
                    }
                    div_btn={<Buttonyellow url={"/menu"} text={"اطلب الان"} />}
                    div_img={img3}
                    width={450}
                    height={500}
                    border={'img-border'}
                />
                <div className="position-absolute vector">
                    <Image src={'/Vector.png'} width={150} height={100} alt="" />
                </div>
            </div>
            <AboutProducts />
            <Explor/>
            <Rate/>
        </>
    )
}

export default Home