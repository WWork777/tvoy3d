"use client";
import "./Portfolio.scss";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Zoom } from "swiper/modules";
import "swiper/css/zoom";
import Image from "next/image";

import item3 from "/public/content/3d3.jpg";
import item4 from "/public/content/3d4.jpg";
import item6 from "/public/content/3d6.jpg";
import item14 from "/public/content/3d14.jpg";
import item17 from "/public/content/3d17.webp";
import item20 from "/public/content/3d20.webp";
import item21 from "/public/content/3d21.webp";
import item22 from "/public/content/3d22.webp";
import item26 from "/public/content/3d26.webp";
import item27 from "/public/content/3d28.webp";
import item28 from "/public/content/3d29.webp";
import item29 from "/public/content/3d30.webp";
import item30 from "/public/content/3d51.jpg";
import item31 from "/public/content/3d52.jpg";
import item32 from "/public/content/3d53.jpg";
import item33 from "/public/content/3d54.jpg";
import item34 from "/public/content/3d55.jpg";
import item35 from "/public/content/3d60.jpg";
import item36 from "/public/content/3d61.jpg";
import item37 from "/public/content/3d62.jpg";
import item38 from "/public/content/3d63.jpg";

function Portfolio() {
  const [images] = useState([
    {
      original: item35,
      thumbnail: item35,
      thumbnailHeight: 70,
      title: "Title 3",
    },
    {
      original: item36,
      thumbnail: item31,
      thumbnailHeight: 70,
      title: "Title 3",
    },
    {
      original: item37,
      thumbnail: item32,
      thumbnailHeight: 70,
      title: "Title 3",
    },
    {
      original: item38,
      thumbnail: item33,
      thumbnailHeight: 70,
      title: "Title 3",
    },
    {
      original: item30,
      thumbnail: item30,
      thumbnailHeight: 70,
      title: "Title 3",
    },
    {
      original: item31,
      thumbnail: item31,
      thumbnailHeight: 70,
      title: "Title 3",
    },
    {
      original: item32,
      thumbnail: item32,
      thumbnailHeight: 70,
      title: "Title 3",
    },
    {
      original: item4,
      thumbnail: item4,
      thumbnailHeight: 70,
      title: "Title 4",
    },
    {
      original: item6,
      thumbnail: item6,
      thumbnailHeight: 70,
      title: "Title 4",
    },
    {
      original: item14,
      thumbnail: item14,
      thumbnailHeight: 70,
      title: "Title 4",
    },
    {
      original: item17,
      thumbnail: item17,
      thumbnailHeight: 70,
      title: "Title 4",
    },
    {
      original: item20,
      thumbnail: item20,
      thumbnailHeight: 70,
      title: "Title 4",
    },
    {
      original: item21,
      thumbnail: item21,
      thumbnailHeight: 70,
      title: "Title 4",
    },
    {
      original: item22,
      thumbnail: item22,
      thumbnailHeight: 70,
      title: "Title 4",
    },
    {
      original: item26,
      thumbnail: item26,
      thumbnailHeight: 70,
      title: "Title 4",
    },
    {
      original: item27,
      thumbnail: item27,
      thumbnailHeight: 70,
      title: "Title 4",
    },
    {
      original: item28,
      thumbnail: item28,
      thumbnailHeight: 70,
      title: "Title 4",
    },
  ]);

  return (
    <div className="slider-container">
      <h3>Галерея работ, обработанных и напечатанных у нас</h3>
      <p>
        Мы изготавливаем быстрые прототипы и малосерийные производственные
        заказы для клиентов в различных отраслях.
      </p>
      <div className="galary">
        {/* <ImageGallery items={images} additionalClass="custom-gallery" thumbnailHeight={50} /> */}
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          navigation={true}
          zoom={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            140: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1900: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          modules={[Pagination, Navigation, Zoom]}
          className="mySwiper"
        >
          {images.length > 0 ? (
            images.map((article) => (
              <SwiperSlide key={article.original}>
                <div className="swiper-zoom-container">
                  <Image
                    src={article.original}
                    alt={article.title}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="no-articles">Статьи не найдены</p>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
