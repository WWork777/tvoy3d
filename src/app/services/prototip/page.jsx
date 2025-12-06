import "../ServicesInfo.scss";
import Link from "next/link";
import Form from "../../../../components/ContactForm/ContactForm";
import {
  FaBoxOpen,
  FaTools,
  FaClock,
  FaLayerGroup,
  FaCheck,
} from "react-icons/fa";
import ContactBlock from "../../../../components/ContactsForm/ContactsForm";

export const metadata = {
  title: "Прототипирование на заказ | Быстрое изготовление прототипов в Москве",
  description:
    "Профессиональное прототипирование изделий с использованием 3D печати, литья и других технологий. Создание функциональных прототипов для тестирования и презентаций. Расчет стоимости онлайн.",
  alternates: {
    canonical: "https://tvoy3d.ru/services/prototip",
  },
  keywords: [
    "прототипирование",
    "изготовление прототипов",
    "прототипирование на заказ",
    "3D прототипирование",
    "быстрое прототипирование",
    "функциональный прототип",
    "прототип изделия",
    "макетирование",
    "прототипирование Москва",
    "промышленное прототипирование",
    "прототипирование для стартапов",
    "недорогое прототипирование",
    "Твой 3D",
    "прототипирование пластиковых изделий",
    "прототипирование металлических деталей",
    "создание прототипов для производства",
    "инженерное прототипирование",
    "концепт-прототипы",
  ],
};

function Prototip() {
  return (
    <div className="servicesinfo">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Профессиональное прототипирование</h1>
          <p className="hero-text">
            Быстрое создание прототипов для тестирования концепций и подготовки
            к серийному производству
          </p>
          <Link href="#order" className="cta-button">
            Заказать прототип
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/services/servicesInfo/prototip.jpg"
            alt="Профессиональное прототипирование"
          />
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <FaBoxOpen />
          </div>
          <h3>Разные материалы</h3>
          <p>Пластик, резина, металл и композиты</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaTools />
          </div>
          <h3>Функциональные тесты</h3>
          <p>Прототипы для реальных испытаний</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaClock />
          </div>
          <h3>Быстрые сроки</h3>
          <p>Изготовление от 1 дня</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaLayerGroup />
          </div>
          <h3>Разные технологии</h3>
          <p>3D печать, литьё, фрезеровка</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Технологии прототипирования</h2>
        <p>
          Мы используем различные методы прототипирования, чтобы подобрать
          оптимальное решение для каждого проекта.
        </p>
      </div>

      <div className="tables-container">
        <div className="tables">
          <div className="onetable">
            <h3>Технологии прототипирования</h3>
            <table className="material-prices">
              <thead>
                <tr>
                  <th>Метод</th>
                  <th>Применение</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3D печать FDM</td>
                  <td>Быстрые концепт-прототипы</td>
                </tr>
                <tr>
                  <td>3D печать SLA/DLP</td>
                  <td>Детализированные макеты</td>
                </tr>
                <tr>
                  <td>SLS (нейлон)</td>
                  <td>Функциональные тесты</td>
                </tr>
                <tr>
                  <td>Вакуумное литьё</td>
                  <td>Малые серии (до 50 шт)</td>
                </tr>
                <tr>
                  <td>CNC-фрезеровка</td>
                  <td>Металлические прототипы</td>
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
                  <td>Концепт-прототип</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td>Визуальный макет</td>
                  <td>8000</td>
                </tr>
                <tr>
                  <td>Функциональный прототип</td>
                  <td>15000</td>
                </tr>
                <tr>
                  <td>Малая серия (5-10 шт)</td>
                  <td>25000</td>
                </tr>
                <tr>
                  <td>Инженерный прототип</td>
                  <td>20000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Преимущества нашего прототипирования</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Экономия времени</h3>
            <p>Сокращаем время вывода продукта на рынок в 2-3 раза</p>
          </div>
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Выявление недостатков</h3>
            <p>Помогаем найти конструктивные проблемы до производства</p>
          </div>
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Реальные материалы</h3>
            <p>Используем материалы, близкие к серийным</p>
          </div>
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Полный цикл</h3>
            <p>От модели до готового прототипа под ключ</p>
          </div>
        </div>
      </div>

      <div className="process-section">
        <h2>Процесс работы</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Консультация</h3>
            <p>Обсуждаем требования к прототипу</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Выбор технологии</h3>
            <p>Подбираем оптимальный метод изготовления</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Изготовление</h3>
            <p>Создаем прототип по вашим требованиям</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Результат</h3>
            <p>Предоставляем готовый прототип с отчетом</p>
          </div>
        </div>
      </div>

      {/* <div className="contactform services-form" id="order">
        <h3>Отправьте заявку</h3>
        <p>
          Опишите ваш проект или прикрепите файлы — мы предложим оптимальный
          метод прототипирования.
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

export default Prototip;
