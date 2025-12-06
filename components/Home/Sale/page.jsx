import './style.scss';
import Image from 'next/image';
import img from './img.jpg.webp';

const Sale = () => {
    return (
        <div className='sale'>
            <div href={'/products/terea'} className="services-card">
                    <div>
                      <p>Скидка на любой заказ <span className='bold'>15%</span></p>
                      <span><span className='red'>ДО КОНЦА МАЯ</span> закажи услугу по 3Д печати и получи скидку 15% <br></br> вне зависимоти от объема заказа</span>
                    </div>
            </div>
            <Image src={img} alt="IQOS Iluma" width={1000} height={1000} className='sale-img'/>
        </div>
    );
};

export default Sale;