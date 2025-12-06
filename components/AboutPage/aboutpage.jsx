"use client";
import "./about.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Zoom } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "./company1.webp";
import image2 from "./company2.webp";
import image3 from "./company3.webp";
import image4 from "./company4.webp";

export default function About() {
  return (
    <div className="about">
      <div className="hero-block_image">
        <div className="dark-fon">
          <h1>
            О компании Твой3Д<div className="div-dec"></div>
          </h1>
        </div>
      </div>
      <div className="about-info">
        <div className="about-text">
          <h2>Студия 3D печати «Твой 3D»</h2>
          <p>
            ООО Твой3Д — инновационная компания, объединяющая передовые
            аддитивные технологии и собственное современное производство. Мы
            специализируемся на создании высокоточных прототипов, уникальных
            деталей и мелкосерийного производства с помощью 3D-печати, что
            позволяет нашим клиентам быстро реализовывать самые смелые идеи.
            <br></br>
            <br></br>
            Наша миссия — сделать современные технологии доступными для каждого,
            помогая бизнесу и дизайнерам воплощать в жизнь самые сложные
            проекты. Благодаря наличию собственного производственного цеха и
            современного оборудования, мы обеспечиваем контроль качества на
            каждом этапе и минимальные сроки выполнения заказов.
            <br></br>
            <br></br>В спектр наших услуг входит широкий набор методов
            аддитивных технологий, использование разнообразных материалов и
            индивидуальный подход к каждому клиенту. Мы работаем с предприятиями
            различных отраслей: от машиностроения и медицины до дизайна и
            архитектуры.
          </p>
        </div>
        <div className="about-img">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="aboutpageswiper"
          >
            <SwiperSlide className="aboutpageslide">
              <Image src={image2} alt="" width={800} height={500} />
            </SwiperSlide>
            <SwiperSlide className="aboutpageslide">
              <Image src={image4} alt="" width={800} height={500} />
            </SwiperSlide>
            <SwiperSlide className="aboutpageslide">
              <Image src={image3} alt="" width={800} height={500} />
            </SwiperSlide>
            <SwiperSlide className="aboutpageslide">
              <Image src={image1} alt="" width={800} height={500} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="about-info-second">
        <div
          className="about-img-second"
          style={{ backgroundImage: `url("/about/2.jpg")` }}
        ></div>
        <div className="about-text-second">
          <h2>Преимущества Твой3Д:</h2>
          <p>
            Собственное современное производство Высокое качество и точность
            изделий Быстрые сроки исполнения Индивидуальный подход к каждому
            проекту Постоянное внедрение новых технологий Команда Твой3Д — это
            профессионалы, увлечённые своим делом, готовые предложить
            инновационные решения для реализации ваших идей. Мы стремимся стать
            надежным партнером в области аддитивных технологий и помочь вам
            добиться успеха в любой сфере деятельности.
          </p>
        </div>
      </div>
    </div>
  );
}
