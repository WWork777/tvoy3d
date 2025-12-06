"use client";

import styles from "./map.module.scss";
import "./map-second.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function YandexMap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.section_map}>
      <YMaps>
        <div className="ymaps">
          <Map
            className="map"
            defaultState={{
              center: [55.580844, 38.919833],
              zoom: isMobile ? 14 : 15.5,
            }}
          >
            <Placemark
              geometry={[55.580844, 38.919833]}
              options={{ preset: "islands#darkBlueDotIcon" }}
            />
          </Map>
          <div
            className={`${styles.info_block} ${isMobile ? styles.mobile : ""}`}
          >
            <h2>Контакты</h2>

            <div className={styles.info_block_adress}>
              <h3>Адрес</h3>
              <p>Куровское, ул. Советская 105</p>
            </div>

            <div className={styles.info_block_adress}>
              <h3>Мы на связи</h3>
              <div className={styles.info_block_contacts}>
                <Link href="mailto:tvoy-3d@yandex.ru">
                  <p>tvoy-3d@yandex.ru</p>
                </Link>
                <h5>
                  <Link href="tel:+7 (993) 630-70-48">
                    <p>+7 (993) 630-70-48</p>
                  </Link>
                </h5>
              </div>
            </div>

            <div className={styles.info_block_bottom}>
              <Link
                href="mailto:tvoy-3d@yandex.ru"
                className={styles.info_block_bottom_item}
              >
                <p>Email</p>
                <img src="/email.svg" alt="Email" />
              </Link>
              <Link
                href="https://t.me/Tvoy3d"
                className={styles.info_block_bottom_item}
              >
                <p>Telegram</p>
                <img src="/tg.svg" alt="Telegram" />
              </Link>
            </div>

            <div className={styles.mobile_note}>
              <small>
                Мы работаем ежедневно с 9:00 до 21:00. Отвечаем в течение часа.
                Telegram — самый быстрый способ связи.
              </small>
            </div>
          </div>
        </div>
      </YMaps>
    </div>
  );
}
