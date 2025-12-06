'use client'
import React from 'react';
import Slider from 'react-slick';
import './Blog.scss'; // Убедитесь, что стили для карусели подключены

// Настройки для react-slick
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const BlogMobile = ({ cardsBlog }) => {
    return (    
        <>
        <div className='card-carousel-mobile'>
              <h1 style={{textAlign:"center"}}>Статьи</h1>
            <Slider {...settings} style={{width: '100% !important', height:'500px !important'}}>
                {cardsBlog.map((card, index) => (
                    <div className="card-blog-mobile" key={index} style={{width: '100% !important', height:'500px !important'}}>
                        <div className='blog-container-mobile'>
                            <h3>{card.title}</h3>
                            <img src={`/content/${encodeURIComponent(card.title)}.jpg`} style={{width: '100%', height:'90%'}}></img>
                            <p style={{marginTop:'10px'}}>{card.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
      
        </>
       
        
    );
};

export default BlogMobile;
