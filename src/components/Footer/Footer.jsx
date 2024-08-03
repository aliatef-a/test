'use client'
import React from 'react'
import style from './footer.module.css'
import logo from '../../../public/logo.png'
import { ArrowBigLeft, ArrowLeft, Mail, MapPinned, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Footer = () => {
    const pathName = usePathname();
    const yellowText = {
        color: '#EFCF6F' ,
        fontWeight: '700'
    }


    return (
        <>
            <footer className={style.footer}>
                <div className={style.footerlinks}>
                    <div className={style.contactContainer}>
                        <Image width={150} height={100} src={logo} alt='' />
                        <div className={style.contact}>
                            <Phone />
                            <p>112983838292</p>
                        </div>
                        <div className={style.contact}>
                            <Mail />
                            <p>Lali@gmail.com</p>
                        </div>
                        <div className={style.contact}>
                            <MapPinned />
                            <p>11 ش دوران النادي - جدة- السعودية</p>
                        </div>
                    </div>
                    <div className={style.links}>
                        <h2>الخدمات</h2>
                        <ul>
                            <Link style={pathName === '/' ? yellowText : null} href={'/'}>الصفحة الرئيسية</Link>
                            <Link style={pathName === '/menu' ? yellowText : null} href={'/menu'}>القائمة</Link>
                            <Link style={pathName === '/reservation' ? yellowText : null} href={'/reservation'}>حجز VIP</Link>
                            <Link style={pathName === '/contact' ? yellowText : null} href={'/contact'}>تواصل معنا</Link>
                            <Link style={pathName === '/about' ? yellowText : null} href={'/about'}>من نحن</Link>
                        </ul>
                    </div>
                    <div className={style.subscription}>
                        <h2>الاشتراك</h2>
                        <h5>أدخل بريدك الإلكتروني أدناه لتكون أول من يعرف عن عروضنا الجديدة</h5>
                        <div className={style.subinput}>
                            <div className='position-relative'>
                                <input type="email" placeholder='بريدك الإلكتروني' />
                                <Mail className={style.iconMail}/>
                                
                                <button>
                                    <ArrowLeft className={style.iconarrow}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.footerbottom}>
                    <div className={style.border}></div>
                    <div className={style.text}>
                        <p>2024</p>
                        <p>@كل الحقوق محفوظة</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer