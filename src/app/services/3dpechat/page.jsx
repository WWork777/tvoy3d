import "../ServicesInfo.scss";
import Link from "next/link";
import Form from "../../../../components/ContactForm/ContactForm";
import {
  FaPrint,
  FaClock,
  FaShapes,
  FaLeaf,
  FaFileUpload,
} from "react-icons/fa";
import CardComponent from "./card";
import ContactBlock from "../../../../components/ContactsForm/ContactsForm";

export const metadata = {
  title:
    "3D Печать на Заказ в Москве | Быстрое прототипирование и изготовление деталей",
  description:
    "Профессиональная 3D печать на заказ: FDM (PLA, ABS, TPU), SLA, SLS технологии. Печать моделей, прототипов, деталей для инженерии и дизайна с доставкой. Расчет стоимости онлайн.",
  alternates: {
    canonical: "https://tvoy3d.ru/services/3dpechat",
  },
  keywords: [
    "3D печать",
    "3D печать на заказ",
    "3D печать Москва",
    "FDM печать",
    "SLA печать",
    "SLS печать",
    "печать PLA",
    "печать ABS",
    "печать TPU",
    "3D печать деталей",
    "3D печать моделей",
    "3D печать прототипов",
    "3D печать в лизинг",
    "3D печать с доставкой",
    "быстрая 3D печать",
    "3D печать на заказ недорого",
    "Твой 3D",
    "3D печать фотополимером",
    "3D печать металлом",
    "3D печать ювелирных изделий",
  ],
};

function Pechat() {
  return (
    <div className="servicesinfo">
      <div className="hero-section">
        <div className="hero-content">
          <h1>3D Печать на Заказ</h1>
          <p className="hero-text">
            Профессиональная 3D печать любой сложности с гарантией качества и
            точности
          </p>
          <Link href="#order" className="cta-button">
            <FaFileUpload /> Рассчитать стоимость
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/services/servicesInfo/3dpechat.webp"
            alt="3D печать на заказ"
          />
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <FaPrint />
          </div>
          <h3>Широкий выбор материалов</h3>
          <p>PLA, ABS, PETG, Flex, поликарбонат, фотополимер и другие</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaClock />
          </div>
          <h3>Быстрое выполнение</h3>
          <p>Сроки изготовления от 1 дня в зависимости от сложности</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaShapes />
          </div>
          <h3>Любая сложность</h3>
          <p>Реализуем проекты с высокой детализацией и сложной геометрией</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaLeaf />
          </div>
          <h3>Экологичность</h3>
          <p>Используем биоразлагаемые материалы и минимизируем отходы</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Технологии 3D печати</h2>
        <p style={{ textAlign: "center" }}>
          Мы используем современное оборудование и только качественные
          материалы, что позволяет нам обеспечивать высокое качество продукции.
          Обладая обширным опытом в данной сфере, мы гарантируем изготовление
          изделий в строгом соответствии с требованиями заказчика и технической
          документацией, обеспечивая надежность и точность каждой детали.
        </p>
      </div>

      <CardComponent />

      <div className="benefits-section">
        <h2>Преимущества 3D печати у нас</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Быстрое прототипирование</h3>
            <p>
              Создавайте прототипы за часы, а не недели. Идеально для
              тестирования идей и концептов.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Свобода дизайна</h3>
            <p>
              Воплощайте сложные геометрические формы, недоступные традиционным
              методам производства.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Экономия ресурсов</h3>
            <p>
              Минимизация отходов и возможность печати деталей по запросу без
              необходимости больших тиражей.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Широкий выбор материалов</h3>
            <p>
              От стандартных PLA и ABS до нейлона, гибких полимеров и
              металлокомпозитов.
            </p>
          </div>
        </div>
      </div>

      <div className="process-section">
        <h2>Как мы работаем</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Заявка</h3>
            <p>Оставляете заявку с описанием задачи или прикрепляете файл</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Расчет</h3>
            <p>Мы оцениваем проект и сообщаем стоимость и сроки</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Подтверждение</h3>
            <p>Вы согласовываете детали и мы приступаем к работе</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Результат</h3>
            <p>Вы получаете готовое изделие с доставкой</p>
          </div>
        </div>
      </div>

      {/* <div className="contactform services-form" id="order">
        <h3>Отправьте заявку</h3>
        <p>
          Прикрепите файл или опишите задачу — мы рассчитаем стоимость и сроки
          выполнения.
        </p>
        <Form />
        <h5>
          Отправляя форму, Вы соглашаетесь на обработку{" "}
          <Link href="/personal">
            <span className="blue">персональных данных.</span>
          </Link>
        </h5>
      </div> */}

      <ContactBlock />

      <Link href="/services" className="back-button">
        Назад к услугам
      </Link>
    </div>
  );
}

export default Pechat;
