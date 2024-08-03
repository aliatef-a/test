import React from 'react'
import style from './servies.module.css'
import { Container } from 'react-bootstrap'
import { ArrowLeft, Salad, Timer, User } from 'lucide-react'
import Link from 'next/link'


const Servies = () => {
    const data = [
        {
            icon: <Timer size={50} className={style.icon} />,
            title_line1: 'سرعة التوصول',
            title_line2: 'وصول سريع وسهل',
            des: 'نسعى لتوفير أفضل تجربة ممكنة لعملائنا، سواء كانوا يتناولون الطعام في المطعم أو يفضلون الطلب من المنزل',
            url: '/menu'
        },
        {
            icon: <Salad size={50} className={style.icon} />,
            title_line1: 'اطيب الاكلات',
            title_line2: 'نكهات لا تُقاوم',
            des: 'نفخر بتقديم مجموعة من الأطباق الشهية التي تلبي أذواق جميع زوارنا. تم إعداد كل طبق بعناية باستخدام أفضل المكونات الطازجة،',
            url: '/menu'
        },
        {
            icon: <User size={50} className={style.icon} />,
            title_line1: 'حجز VIP',
            title_line2: 'رفاهية لا مثيل لها',
            des: 'اختبر الراحة والخصوصية في جلساتنا المصممة خصيصاً لضيوف VIP، والتي توفر لك أجواء هادئة ومريحة.',
            url: '/reservation'
        }
    ]
    return (
        <Container>
            <section className={style.servies}>
                <div className={style.header}>
                    <h2>نقدم لكم العديد من</h2>
                    <br />
                    <h2 style={{ color: '#F6C61C' }}>خدماتنا</h2>
                </div>
                <div className={style.servies_content}>
                    {data.map((item , index) => {
                        return (
                            <div key={index} className={style.group}>
                                {item.icon}
                                <div></div>
                                <div className={style.text}>
                                    <h5>{item.title_line1}</h5>
                                    <h6>{item.title_line2}</h6>
                                </div>
                                <p>{item.des}</p>
                                <div className={style.link}>
                                    <Link href={item.url}>اطلب طعامك االان<ArrowLeft width={20} /></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Container>
    )
}

export default Servies