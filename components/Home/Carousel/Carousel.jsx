"use client";
import "./Carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import {
  EffectCreative,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Link from "next/link";

function Carousel() {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    );
  };
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <button
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
    );
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    { id: 1, url: "https://source.unsplash.com/1600x900/?nature,water" },
    { id: 2, url: "https://source.unsplash.com/1600x900/?nature,forest" },
    { id: 3, url: "https://source.unsplash.com/1600x900/?nature,mountain" },
  ];
  return (
    <>
      <Swiper
        grabCursor={false}
        effect={"creative"}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-40%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Navigation, Pagination]}
        className="mySwiper3"
      >
        <SwiperSlide>
          <div
            className="background-image"
            style={{ backgroundImage: `url("/carousel/hero.jpg")` }}
          >
            <div className="fon-img">
              <h1 className="slide-text" style={{ display: "none" }}>
                3д печать на заказ в москве
              </h1>
              <p className="slide-text slide-text-p">
                Создаем <span>уникальные</span> детали под ваши нужды и желания
              </p>
              <div className="car-line"></div>
              <div className="buttons-car">
                <Link
                  smooth="true"
                  href="/about"
                  onClick={() => window.scrollTo(0, 0)}
                  className="d-btn"
                >
                  <button>О НАС</button>
                </Link>
                <Link
                  href={"mailto:tvoy-3d@yandex.ru"}
                  smooth="true"
                  className="d-btn"
                >
                  <button>СВЯЗАТЬСЯ С НАМИ</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="background-image"
            style={{ backgroundImage: `url("/carousel/hero2.jpg")` }}
          >
            <div className="fon-img">
              <h1 className="slide-text" style={{ display: "none" }}>
                3д печать на заказ в москве
              </h1>
              <p className="slide-text slide-text-p">
                Проектируем <span>виртуальные</span> модели для{" "}
                <span>практичных</span> решений
              </p>
              <div className="car-line"></div>

              <div className="buttons-car">
                <Link
                  smooth="true"
                  href="/knowledgebase"
                  onClick={() => window.scrollTo(0, 0)}
                  className="d-btn"
                >
                  <button>БАЗА ЗНАНИЙ</button>
                </Link>
                <Link
                  href={"mailto:tvoy-3d@yandex.ru"}
                  smooth="true"
                  className="d-btn"
                >
                  <button>СВЯЗАТЬСЯ С НАМИ</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="background-image"
            style={{ backgroundImage: `url("/carousel/hero3.jpg")` }}
          >
            <div className="fon-img">
              <h1 className="slide-text" style={{ display: "none" }}>
                печать на 3д принтере на заказ москва
              </h1>{" "}
              <p className="slide-text slide-text-p">
                Сканируем <span>реальность</span> для <span>цифровых</span>{" "}
                решений
              </p>
              <div className="car-line"></div>
              <div className="buttons-car">
                <Link
                  smooth="true"
                  href="/about"
                  onClick={() => window.scrollTo(0, 0)}
                  className="d-btn"
                >
                  <button>О НАС</button>
                </Link>
                <Link
                  href={"mailto:tvoy-3d@yandex.ru"}
                  smooth="true"
                  className="d-btn"
                >
                  <button>СВЯЗАТЬСЯ С НАМИ</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Carousel;
