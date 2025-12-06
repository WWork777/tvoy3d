"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

// Импорт изображений
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

const galleryItems = [
  {
    image: item35,
    title: "3D Моделирование мебели",
    description:
      "Эксклюзивный дизайн кресла для офисного пространства. Детализированная проработка материалов и текстур.",
    date: "Декабрь 2023",
    technologies: ["Blender", "Substance Painter"],
  },
  {
    image: item36,
    title: "3D Моделирование мебели",
    description:
      "Эксклюзивный дизайн кресла для офисного пространства. Детализированная проработка материалов и текстур.",
    date: "Декабрь 2023",
    technologies: ["Blender", "Substance Painter"],
  },
  {
    image: item37,
    title: "3D Моделирование мебели",
    description:
      "Эксклюзивный дизайн кресла для офисного пространства. Детализированная проработка материалов и текстур.",
    date: "Декабрь 2023",
    technologies: ["Blender", "Substance Painter"],
  },
  {
    image: item38,
    title: "3D Моделирование мебели",
    description:
      "Эксклюзивный дизайн кресла для офисного пространства. Детализированная проработка материалов и текстур.",
    date: "Декабрь 2023",
    technologies: ["Blender", "Substance Painter"],
  },
  {
    image: item30,
    title: "3D Моделирование мебели",
    description:
      "Эксклюзивный дизайн кресла для офисного пространства. Детализированная проработка материалов и текстур.",
    date: "Декабрь 2023",
    technologies: ["Blender", "Substance Painter"],
  },
  {
    image: item31,
    title: "3D Моделирование мебели",
    description:
      "Эксклюзивный дизайн кресла для офисного пространства. Детализированная проработка материалов и текстур.",
    date: "Декабрь 2023",
    technologies: ["Blender", "Substance Painter"],
  },
  {
    image: item32,
    title: "3D Моделирование мебели",
    description:
      "Эксклюзивный дизайн кресла для офисного пространства. Детализированная проработка материалов и текстур.",
    date: "Декабрь 2023",
    technologies: ["Blender", "Substance Painter"],
  },

  {
    image: item3,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  {
    image: item4,
    title: "Архитектурный проект",
    description:
      "Частный дом в современном стиле с эксплуатируемой кровлей и террасой. Визуализация выполнена с учетом окружающего ландшафта.",
    date: "Март 2023",
    technologies: ["3ds Max", "V-Ray", "AutoCAD"],
  },
  {
    image: item6,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    date: "Январь 2023",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  {
    image: item14,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    date: "Январь 2023",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  {
    image: item17,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    date: "Январь 2023",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  {
    image: item20,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    date: "Январь 2023",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  {
    image: item21,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    date: "Январь 2023",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  {
    image: item22,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    date: "Январь 2023",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  {
    image: item26,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    date: "Январь 2023",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  {
    image: item27,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    date: "Январь 2023",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  {
    image: item28,
    title: "3D Визуализация интерьера",
    description:
      "Современная гостиная в стиле лофт с панорамными окнами и оригинальной мебелью. Проект включает детальную проработку материалов и освещения.",
    date: "Январь 2023",
    technologies: ["3ds Max", "Corona Renderer", "Photoshop"],
  },
  // ... остальные элементы с описаниями
];

export default function Galery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState(Array(galleryItems.length).fill(false));
  const [showInfo, setShowInfo] = useState(false);

  const openModal = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
    setShowInfo(false);
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;

    setShowInfo(false);
    setTimeout(() => {
      if (direction === "prev") {
        setSelectedImage((prev) =>
          prev === 0 ? galleryItems.length - 1 : prev - 1
        );
      } else {
        setSelectedImage((prev) =>
          prev === galleryItems.length - 1 ? 0 : prev + 1
        );
      }
      setShowInfo(true);
    }, 200);
  };

  const handleImageLoad = (index) => {
    setLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  useEffect(() => {
    if (selectedImage !== null) {
      const timer = setTimeout(() => setShowInfo(true), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedImage]);
  return (
    <section className={styles.gallerySection}>
      <div className={styles.header}>
        <h1 className={styles.title}>Галерея работ</h1>
        <p className={styles.subtitle}>Наши проекты</p>
      </div>

      <div className={styles.galleryContainer}>
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.galleryItem} ${
              loaded[index] ? styles.loaded : ""
            }`}
            onClick={() => openModal(index)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
                placeholder="blur"
                onLoadingComplete={() => handleImageLoad(index)}
              />
              <div className={styles.overlay}>
                <span className={styles.zoomIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 15L21 21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="7"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                {/* <div className={styles.imageTitle}>{item.title}</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={`${styles.modalContent} ${
              showInfo ? styles.showInfo : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className={styles.modalImageContainer}>
              <Image
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].title}
                fill
                className={styles.modalImage}
                priority
              />
            </div>

            <div className={styles.modalInfo}>
              {/* <div className={styles.infoHeader}>
                <h3 className={styles.modalTitle}>
                  {galleryItems[selectedImage].title}
                </h3>
              </div> */}

              {/* <p className={styles.modalDescription}>
                {galleryItems[selectedImage].description}
              </p> */}

              {/* {galleryItems[selectedImage].technologies && (
                <div className={styles.technologies}>
                  <h4 className={styles.techTitle}>
                    Использованные технологии:
                  </h4>
                  <div className={styles.techList}>
                    {galleryItems[selectedImage].technologies?.map(
                      (tech, i) => (
                        <span key={i} className={styles.techItem}>
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )} */}
            </div>

            <div className={styles.imageCounter}>
              {selectedImage + 1} / {galleryItems.length}
            </div>

            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
