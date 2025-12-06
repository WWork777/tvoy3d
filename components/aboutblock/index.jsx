"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

import image1 from "./company1.webp";
import image2 from "./company2.webp";
import image3 from "./company3.webp";
import image4 from "./company4.webp";

const AboutBlock = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>
          О компании <span>Твой3Д</span>
        </h1>
        <p className={styles.description}>
          ООО Твой3Д — инновационная компания, объединяющая передовые аддитивные
          технологии и собственное современное производство. Мы специализируемся
          на создании высокоточных прототипов, уникальных деталей и
          мелкосерийного производства с помощью 3D-печати, что позволяет нашим
          клиентам быстро реализовывать самые смелые идеи.
          <br />
          <br />
          <span className={styles.inn}>ИНН: 5034068084</span>
        </p>
      </div>

      <div className={styles.sliderBlock}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image
                src={image2}
                alt="Наши изделия"
                fill
                className={styles.image}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image
                src={image4}
                alt="Наши изделия"
                fill
                className={styles.image}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image
                src={image3}
                alt="3D печать"
                fill
                className={styles.image}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image
                src={image1}
                alt="Наше оборудование"
                fill
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AboutBlock;
