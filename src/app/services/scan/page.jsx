import "../ServicesInfo.scss";
import Link from "next/link";
import Form from "../../../../components/ContactForm/ContactForm";
import { FaSearch, FaRuler, FaStopwatch, FaBox, FaCheck } from "react-icons/fa";
import ContactBlock from "../../../../components/ContactsForm/ContactsForm";

export const metadata = {
  title: "3D Сканирование в Москве | Высокоточное сканирование объектов",
  description:
    "Профессиональное 3D сканирование объектов любой сложности. Точность до 0,01 мм. Цифровые копии для реверс-инжиниринга, контроля качества и дизайна. Расчет стоимости онлайн.",
  alternates: {
    canonical: "https://tvoy3d.ru/services/scan",
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

function Scan() {
  return (
    <div className="servicesinfo">
      <div className="hero-section">
        <div className="hero-content">
          <h1>3D Сканирование</h1>
          <p className="hero-text">
            Точные цифровые копии физических объектов с разрешением до 0,01 мм
            для профессиональных задач
          </p>
          <Link href="#order" className="cta-button">
            Заказать сканирование
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/services/servicesInfo/scan.jpg"
            alt="Профессиональное 3D сканирование"
          />
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <FaRuler />
          </div>
          <h3>Высокая точность</h3>
          <p>Точность сканирования до 0,01 мм для самых требовательных задач</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaBox />
          </div>
          <h3>Любые объекты</h3>
          <p>От ювелирных изделий до автомобилей и архитектурных сооружений</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaStopwatch />
          </div>
          <h3>Быстрое выполнение</h3>
          <p>Сканирование простых объектов от 15 минут</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaSearch />
          </div>
          <h3>Разные технологии</h3>
          <p>Лазерное, фотограмметрия, структурированный свет</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Технологии 3D сканирования</h2>
        <p>
          Мы используем различные технологии 3D сканирования, чтобы обеспечить
          оптимальный результат для каждого типа объектов и задач.
        </p>
      </div>

      <div className="tables-container">
        <div className="tables">
          <div className="onetable">
            <h3>Типы сканирования</h3>
            <table className="material-prices">
              <thead>
                <tr>
                  <th>Технология</th>
                  <th>Точность</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Лазерное сканирование</td>
                  <td>до 0,01 мм</td>
                </tr>
                <tr>
                  <td>Фотограмметрия</td>
                  <td>0,1-0,5 мм</td>
                </tr>
                <tr>
                  <td>Структурированный свет</td>
                  <td>0,02-0,1 мм</td>
                </tr>
                <tr>
                  <td>Ручные сканеры</td>
                  <td>0,05-0,3 мм</td>
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
                  <td>Сканирование мелких деталей</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>Сканирование средних объектов</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>Сканирование крупных объектов</td>
                  <td>15000</td>
                </tr>
                <tr>
                  <td>Обработка скана</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>Подготовка для 3D печати</td>
                  <td>2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Преимущества нашего сканирования</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Цифровые двойники</h3>
            <p>Быстрое создание точных цифровых копий физических объектов</p>
          </div>
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Реверс-инжиниринг</h3>
            <p>Идеально для анализа и модификации существующих деталей</p>
          </div>
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Контроль качества</h3>
            <p>Сравнение с CAD-моделями с микронной точностью</p>
          </div>
          <div className="benefit-item">
            <div className="feature-icon">
              <FaCheck />
            </div>
            <h3>Сохранение наследия</h3>
            <p>Цифровые архивы для культурных и исторических объектов</p>
          </div>
        </div>
      </div>

      <div className="process-section">
        <h2>Процесс работы</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Консультация</h3>
            <p>Обсуждаем ваш объект и выбираем метод сканирования</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Сканирование</h3>
            <p>Проводим 3D сканирование объекта с высокой точностью</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Обработка</h3>
            <p>Преобразуем данные скана в 3D модель</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Результат</h3>
            <p>Предоставляем готовую модель в нужном формате</p>
          </div>
        </div>
      </div>

      {/* <div className="contactform services-form" id="order">
        <h3>Отправьте заявку</h3>
        <p>
          Опишите объект для сканирования — мы рассчитаем стоимость и сроки
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

export default Scan;
