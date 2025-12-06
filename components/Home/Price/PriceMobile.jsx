'use client'
import React from 'react';
import Slider from 'react-slick';
import './Price.scss'; // Убедитесь, что стили для карусели подключены
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Настройки для react-slick
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, // Автоматическая высота для слайдов
};

const CardCarousel = ({ cards }) => {
    return (
        <Slider {...settings} className="card-carousel-mobile">
            {cards.map((card, index) => (
                <div className="card-price" key={index}>
                    <div className='price-container-mobile'>
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
                        <ul>
                            <li>{card.price}</li>
                            <li>{card.price2}</li>
                            <li>{card.price3}</li>
                        </ul>
                        <div className='block-buttons-price'>
                            <Link smooth="true" href={card.linkone} onClick={() => window.scrollTo(0, 0)}>
                                <button>Подробнее</button>
                            </Link>
                            <Link smooth="true" href='/contactform' onClick={() => window.scrollTo(0, 0)}>
                                <button>Заказать</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CardCarousel;
