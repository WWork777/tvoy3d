'use client'
import './Partners.scss'
import Link from "next/link";

function Partners(){

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return(
        <>
            <div className='partners'>
                <div className='container-partners'>
                <h4>Создавайте будущее уже сейчас вместе с нами</h4>
                <p>Мы уже сотрудничаем с крупными компаниями, такими как:<br></br><a href="https://www.panavto.ru/" className='link'>ПАНАВТО</a>, <a href="https://larte-design.ru/" className='link'>LARTE DESIGN</a>, <a href="https://www.trecol.ru/" className='link'>ТРЭКОЛ</a>, <a href="https://avtoros.shop/" className='link'>АВТОРОС</a>, <a href="http://bogema-auto.com/" className='link'>БОГЕМА-АВТО</a><br></br> и другими</p>
                
                <p>Ваш успех - наш приоритет!</p>
                <Link smooth="true" href='/contactform' onClick={() => window.scrollTo(0, 0)} className='d-btn'><button>ОТПРАВИТЬ ПРЕДЛОЖЕНИЕ ДЛЯ ПРОИЗВОДСТВА</button></Link>
                </div>
            </div>
        </>
    )
}
export default Partners