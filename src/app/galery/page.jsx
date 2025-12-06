import Galery from "../../../components/galery/galery";

export const metadata = {
  title: "3D печать на заказ | Галерея наших работ и проектов",
  description:
    "Примеры наших работ по 3D печати и моделированию. Посмотрите реализованные проекты и технологии, которые мы используем.",
  keywords: [
    "галерея 3D печати",
    "примеры 3D моделей",
    "3D печать фото",
    "наши работы 3D печать",
    "3D проекты",
    "3D визуализации",
    "портфолио 3D печати",
  ],
  alternates: {
    canonical: "https://tvoy3d.ru/gallery",
  },
  openGraph: {
    title: "Галерея работ по 3D печати | Твой3D",
    description: "Лучшие примеры наших работ по 3D печати и моделированию",
    url: "https://tvoy3d.ru/gallery",
    images: [
      {
        url: "https://tvoy3d.ru/carousel/3д-карусель19.jpg",
        width: 1200,
        height: 630,
        alt: "Примеры 3D печати",
      },
    ],
  },
};

export default function Gallery() {
  return <Galery />;
}
