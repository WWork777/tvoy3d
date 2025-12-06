import styles from "./page.module.scss";
import Link from "next/link";
import { FaPrint, FaCut, FaCube, FaSearch, FaRocket } from "react-icons/fa";
import ContactBlock from "../../../components/ContactsForm/ContactsForm";

export const metadata = {
  title: "Заказать услуги 3D печати и моделирования | Твой 3D в Москве",
  description:
    "Полный спектр услуг 3D печати, сканирования, моделирования и прототипирования.",
  alternates: {
    canonical: "https://tvoy3d.ru/services",
  },
  keywords: [
    "3D сканирование",
    "3D сканер",
    "3D сканирование Москва",
    "сканирование деталей",
    "реверс-инжиниринг",
    "цифровая копия",
    "сканирование человека",
    "сканирование объектов",
    "3D модель по скану",
    "лазерное сканирование",
    "промышленное сканирование",
    "сканирование для 3D печати",
    "недорогое 3D сканирование",
    "Твой 3D",
    "сканирование помещений",
    "архитектурное сканирование",
    "контроль качества сканированием",
    "точное 3D сканирование",
  ],
};

export default function Services() {
  const services = [
    {
      id: "pechat",
      title: "3D Печать",
      icon: <FaPrint className={styles.serviceCardIcon} />,
      description:
        "Профессиональная 3D печать на заказ: FDM, SLA, SLS технологии",
      link: "/services/3dpechat",
    },
    {
      id: "rezka",
      title: "Лазерная резка",
      icon: <FaCut className={styles.serviceCardIcon} />,
      description: "Точная обработка акрила, фанеры, МДФ с чистым резом",
      link: "/services/rezkaco2",
    },
    {
      id: "scan",
      title: "3D Сканирование",
      icon: <FaSearch className={styles.serviceCardIcon} />,
      description: "Создание цифровых копий с точностью до 0,01 мм",
      link: "/services/scan",
    },
    {
      id: "model",
      title: "3D Моделирование",
      icon: <FaCube className={styles.serviceCardIcon} />,
      description: "Создание и оптимизация 3D моделей для производства",
      link: "/services/model",
    },
    {
      id: "prototip",
      title: "Прототипирование",
      icon: <FaRocket className={styles.serviceCardIcon} />,
      description: "Изготовление прототипов для тестирования концепций",
      link: "/services/prototip",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Наши услуги</h1>
          <p className={styles.heroText}>
            Полный цикл услуг от 3D моделирования до готовых изделий.
            Современное оборудование и профессиональный подход.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/services/servicesInfo/all-services.jpg"
            alt="Все услуги 3D печати и моделирования"
          />
        </div>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            {service.icon}
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link href={service.link} className={styles.serviceLink}>
              Подробнее об услуге
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.contentSection}>
        <h2>Как мы работаем</h2>
        <p>
          Мы предлагаем комплексный подход к реализации ваших проектов - от идеи
          до готового изделия. Наши специалисты помогут выбрать оптимальную
          технологию и материалы.
        </p>
      </div>

      <ContactBlock />

      {/* <div className={styles.contactCta}>
        <h3>Не нашли нужную услугу?</h3>
        <p>Опишите вашу задачу, и мы предложим оптимальное решение</p>
        <Link href="/contactform" className={styles.ctaButton}>
          Связаться с нами
        </Link>
      </div> */}
    </div>
  );
}
