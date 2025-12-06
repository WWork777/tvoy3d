import "../ServicesInfo.scss";
import Link from "next/link";
import Form from "../../../../components/ContactForm/ContactForm";
import {
  FaCube,
  FaRuler,
  FaClock,
  FaPrint,
  FaFileAlt,
  FaCheck,
} from "react-icons/fa";
import ContactBlock from "../../../../components/ContactsForm/ContactsForm";

export const metadata = {
  title: "3D Моделирование на заказ | Профессиональное создание 3D моделей",
  description:
    "Разработка 3D моделей любой сложности для 3D печати, визуализации и производства. Реверс-инжиниринг, оптимизация под печать, подготовка технической документации. Расчет стоимости онлайн.",
  alternates: {
    canonical: "https://tvoy3d.ru/services/model",
  },
  keywords: [
    "3D моделирование",
    "создание 3D моделей",
    "3D моделирование на заказ",
    "3D дизайн",
    "реверс-инжиниринг",
    "подготовка к 3D печати",
    "оптимизация 3D моделей",
    "3D визуализация",
    "CAD моделирование",
    "промышленный дизайн",
    "3D моделирование Москва",
    "недорогое 3D моделирование",
    "Твой 3D",
    "3D моделирование для игр",
    "архитектурное моделирование",
    "3D моделирование по чертежам",
    "3D моделирование по фото",
    "3D моделирование для производства",
  ],
};

function Model() {
  return (
    <div className="servicesinfo">
      <div className="hero-section">
        <div className="hero-content">
          <h1>3D Моделирование</h1>
          <p className="hero-text">
            Профессиональное создание и оптимизация 3D моделей для промышленного
            дизайна, 3D печати и производства
          </p>
          <Link href="#order" className="cta-button">
            Заказать моделирование
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/services/servicesInfo/model.webp"
            alt="3D моделирование на заказ"
          />
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <FaCube />
          </div>
          <h3>Любая сложность</h3>
          <p>От технических деталей до органических форм</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaRuler />
          </div>
          <h3>Точные размеры</h3>
          <p>Соблюдение всех технических требований</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaClock />
          </div>
          <h3>Оперативные сроки</h3>
          <p>Простое моделирование от 1 дня</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaPrint />
          </div>
          <h3>Подготовка к печати</h3>
          <p>Оптимизация под разные технологии 3D печати</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Наши возможности</h2>
        <p>
          Мы создаем 3D модели для различных целей - от прототипирования до
          серийного производства, учитывая все технологические требования и
          ограничения.
        </p>
      </div>

      <div className="tables-container">
        <div className="tables">
          <div className="onetable">
            <h3>Типы моделирования</h3>
            <table className="material-prices">
              <thead>
                <tr>
                  <th>Направление</th>
                  <th>Среднее время</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Промышленный дизайн</td>
                  <td>2-5 дней</td>
                </tr>
                <tr>
                  <td>Архитектурная визуализация</td>
                  <td>3-7 дней</td>
                </tr>
                <tr>
                  <td>Персонажи/органические формы</td>
                  <td>5-10 дней</td>
                </tr>
                <tr>
                  <td>Технические детали (CAD)</td>
                  <td>1-3 дня</td>
                </tr>
                <tr>
                  <td>Оптимизация под 3D печать</td>
                  <td>1-2 дня</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="onetable">
            <h3>Стоимость услуг</h3>
            <table className="service-prices">
              <thead>
                <tr>
                  <th>Услуга</th>
                  <th>Цена от (₽)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Простое моделирование</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td>Средняя сложность</td>
                  <td>8000</td>
                </tr>
                <tr>
                  <td>Сложное моделирование</td>
                  <td>15000</td>
                </tr>
                <tr>
                  <td>Реверс-инжиниринг</td>
                  <td>12000</td>
                </tr>
                <tr>
                  <td>Подготовка к 3D печати</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>Создание чертежей</td>
                  <td>4000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Преимущества нашего моделирования</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Все форматы</h3>
            <p>Работаем со STEP, IGES, STL, OBJ, FBX и другими форматами</p>
          </div>
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Технологичность</h3>
            <p>Учитываем ограничения производства и печати</p>
          </div>
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Точность</h3>
            <p>Соблюдаем размеры и допуски</p>
          </div>
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Подготовка</h3>
            <p>Готовим файлы для разных технологий 3D печати</p>
          </div>
        </div>
      </div>

      <div className="process-section">
        <h2>Как мы работаем</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Заявка</h3>
            <p>Вы отправляете ТЗ, чертежи или фото объекта</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Обсуждение</h3>
            <p>Уточняем детали и согласовываем сроки</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Моделирование</h3>
            <p>Создаем 3D модель по вашим требованиям</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Результат</h3>
            <p>Предоставляем готовую модель в нужных форматах</p>
          </div>
        </div>
      </div>

      {/* <div className="contactform services-form" id="order">
        <h3>Отправьте заявку</h3>
        <p>
          Прикрепите чертежи, фото или опишите задачу — мы рассчитаем стоимость
          и сроки моделирования.
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

export default Model;
