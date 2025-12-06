import "../ServicesInfo.scss";
import Link from "next/link";
import Form from "../../../../components/ContactForm/ContactForm";
import {
  FaCut,
  FaRuler,
  FaBolt,
  FaMagic,
  FaShippingFast,
} from "react-icons/fa";
import ContactBlock from "../../../../components/ContactsForm/ContactsForm";

export const metadata = {
  title: "Лазерная резка в Москве | Точная обработка материалов",
  description:
    "Профессиональная лазерная резка CO2: акрил, фанера, МДФ, пластик, ткань. Сквозная и гравировка с ЧПУ управлением. Доставка по России. Расчет стоимости онлайн.",
  alternates: {
    canonical: "https://tvoy3d.ru/services/rezkaco2",
  },
  keywords: [
    "лазерная резка",
    "резка CO2",
    "лазерная резка Москва",
    "резка акрила",
    "резка фанеры",
    "резка МДФ",
    "лазерная гравировка",
    "ЧПУ резка",
    "лазерная резка пластика",
    "лазерная резка металла",
    "лазерная резка на заказ",
    "лазерная резка с доставкой",
    "недорогая лазерная резка",
    "Твой 3D",
    "лазерная резка дерева",
    "резка картона",
    "лазерная обработка материалов",
    "прецизионная резка",
    "лазерный раскрой",
  ],
};

function Rezka() {
  return (
    <div className="servicesinfo">
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Лазерная резка CO<sub>2</sub>
          </h1>
          <p className="hero-text">
            Высокоточная обработка материалов с чистым резом и минимальной зоной
            термического влияния
          </p>
          <Link href="#order" className="cta-button">
            Рассчитать стоимость
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/services/servicesInfo/lazer.webp"
            alt="Лазерная резка материалов"
          />
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <FaCut />
          </div>
          <h3>Чистый рез</h3>
          <p>Идеальные кромки без заусенцев и механических повреждений</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaRuler />
          </div>
          <h3>Высокая точность</h3>
          <p>Точность позиционирования до 0,1 мм</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaBolt />
          </div>
          <h3>Быстрое выполнение</h3>
          <p>Сроки изготовления от 2 часов</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaMagic />
          </div>
          <h3>Сложные формы</h3>
          <p>Возможность вырезать детали любой конфигурации</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Возможности лазерной резки</h2>
        <p style={{ textAlign: "center" }}>
          Мы предлагаем высококачественные услуги лазерной резки СО<sub>2</sub>
          <br></br>
          Наше современное оборудование позволяет обрабатывать листы размером до
          1500х1000 мм, а толщина реза достигает до 20 мм, в зависимости от типа
          материала. Обеспечиваем точность, чистоту и высокое качество
          выполнения заказов любой сложности.
        </p>
      </div>

      <div className="tables-container">
        <div className="tables-row">
          <div className="onetable">
            <h3>Акрил (Оргстекло)</h3>
            <p style={{ textAlign: "center" }} className="onetable-text">
              Цена резки за погонный метр материала
            </p>
            <div className="table-wrapper">
              <table className="material-prices">
                <thead>
                  <tr>
                    <td>Толщина материала</td>
                    <td>до 100 м.п.</td>
                    <td>до 500 м.п.</td>
                    <td>до 1500 м.п.</td>
                    <td>от 1500 м.п.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 мм</td>
                    <td>10р.</td>
                    <td>9р.</td>
                    <td>8р.</td>
                    <td>7р.</td>
                  </tr>
                  <tr>
                    <td>2 мм</td>
                    <td>11р.</td>
                    <td>10р.</td>
                    <td>9р.</td>
                    <td>8р.</td>
                  </tr>
                  <tr>
                    <td>3 мм</td>
                    <td>14р.</td>
                    <td>12р.</td>
                    <td>12р.</td>
                    <td>10р.</td>
                  </tr>
                  <tr>
                    <td>4 мм</td>
                    <td>21р.</td>
                    <td>19р.</td>
                    <td>18р.</td>
                    <td>17р.</td>
                  </tr>
                  <tr>
                    <td>5 мм</td>
                    <td>28р.</td>
                    <td>26р.</td>
                    <td>24р.</td>
                    <td>22р.</td>
                  </tr>
                  <tr>
                    <td>6 мм</td>
                    <td>33р.</td>
                    <td>31р.</td>
                    <td>28р.</td>
                    <td>26р.</td>
                  </tr>
                  <tr>
                    <td>8 мм</td>
                    <td>46р.</td>
                    <td>42р.</td>
                    <td>38р.</td>
                    <td>34р.</td>
                  </tr>
                  <tr>
                    <td>10 мм</td>
                    <td>91р.</td>
                    <td>85р.</td>
                    <td>79р.</td>
                    <td>73р.</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                *Цена указана без учета стоимости материала
              </p>
            </div>
          </div>

          <div className="onetable">
            <h3>Фанера, ДСП, МДФ</h3>
            <p style={{ textAlign: "center" }} className="onetable-text">
              Цена резки за погонный метр материала
            </p>
            <div className="table-wrapper">
              <table className="service-prices">
                <thead>
                  <tr>
                    <td>Толщина материала</td>
                    <td>до 100 м.п.</td>
                    <td>до 500 м.п.</td>
                    <td>до 1500 м.п.</td>
                    <td>от 1500 м.п.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3 мм</td>
                    <td>11р.</td>
                    <td>10р.</td>
                    <td>8р.</td>
                    <td>7р.</td>
                  </tr>
                  <tr>
                    <td>4 мм</td>
                    <td>12р.</td>
                    <td>11р.</td>
                    <td>9р.</td>
                    <td>8р.</td>
                  </tr>
                  <tr>
                    <td>6 мм</td>
                    <td>24р.</td>
                    <td>22р.</td>
                    <td>18р.</td>
                    <td>16р.</td>
                  </tr>
                  <tr>
                    <td>8 мм</td>
                    <td>34р.</td>
                    <td>32р.</td>
                    <td>28р.</td>
                    <td>26р.</td>
                  </tr>
                  <tr>
                    <td>9 мм</td>
                    <td>38р.</td>
                    <td>36р.</td>
                    <td>32р.</td>
                    <td>30р.</td>
                  </tr>
                  <tr>
                    <td>10 мм</td>
                    <td>42р.</td>
                    <td>40р.</td>
                    <td>36р.</td>
                    <td>34р.</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                *Цена указана без учета стоимости материала
              </p>
            </div>
          </div>

          <div className="onetable">
            <h3>АБС, Поликарбонат, Полистирол и др.</h3>
            <p style={{ textAlign: "center" }} className="onetable-text">
              Цена резки за погонный метр материала
            </p>
            <div className="table-wrapper">
              <table className="service-prices">
                <thead>
                  <tr>
                    <td>Толщина материала</td>
                    <td>до 100 м.п.</td>
                    <td>до 500 м.п.</td>
                    <td>до 1500 м.п.</td>
                    <td>от 1500 м.п.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0.5 мм</td>
                    <td>10р.</td>
                    <td>9р.</td>
                    <td>8р.</td>
                    <td>7р.</td>
                  </tr>
                  <tr>
                    <td>1 мм</td>
                    <td>11р.</td>
                    <td>10р.</td>
                    <td>9р.</td>
                    <td>8р.</td>
                  </tr>
                  <tr>
                    <td>1.5 мм</td>
                    <td>14р.</td>
                    <td>12р.</td>
                    <td>12р.</td>
                    <td>10р.</td>
                  </tr>
                  <tr>
                    <td>2 мм</td>
                    <td>21р.</td>
                    <td>19р.</td>
                    <td>18р.</td>
                    <td>17р.</td>
                  </tr>
                  <tr>
                    <td>3 мм</td>
                    <td>28р.</td>
                    <td>36р.</td>
                    <td>24р.</td>
                    <td>22р.</td>
                  </tr>
                  <tr>
                    <td>4 мм</td>
                    <td>33р.</td>
                    <td>31р.</td>
                    <td>28р.</td>
                    <td>26р.</td>
                  </tr>
                  <tr>
                    <td>5 мм</td>
                    <td>46р.</td>
                    <td>42р.</td>
                    <td>38р.</td>
                    <td>34р.</td>
                  </tr>
                  <tr>
                    <td>6 мм</td>
                    <td>91р.</td>
                    <td>85р.</td>
                    <td>79р.</td>
                    <td>73р.</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                *Цена указана без учета стоимости материала
              </p>
            </div>
          </div>

          <div className="onetable">
            <h3>Пенопоэтилен (Ложемент), Поролон, EVA</h3>
            <p style={{ textAlign: "center" }} className="onetable-text">
              Цена резки за погонный метр материала
            </p>
            <div className="table-wrapper">
              <table className="service-prices">
                <thead>
                  <tr>
                    <td>Толщина материала</td>
                    <td>до 100 м.п.</td>
                    <td>до 500 м.п.</td>
                    <td>до 1500 м.п.</td>
                    <td>от 1500 м.п.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>до 10 мм</td>
                    <td>10р.</td>
                    <td>9р.</td>
                    <td>8р.</td>
                    <td>7р.</td>
                  </tr>
                  <tr>
                    <td>до 20 мм</td>
                    <td>20р.</td>
                    <td>19р.</td>
                    <td>18р.</td>
                    <td>17р.</td>
                  </tr>
                  <tr>
                    <td>до 30 мм</td>
                    <td>50р.</td>
                    <td>49р.</td>
                    <td>48р.</td>
                    <td>47р.</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                *Цена указана без учета стоимости материала
              </p>
            </div>
          </div>

          <div className="onetable">
            <h3>Бумага, Картон</h3>
            <p style={{ textAlign: "center" }} className="onetable-text">
              Цена резки за погонный метр материала
            </p>
            <div className="table-wrapper">
              <table className="service-prices">
                <thead>
                  <tr>
                    <td>Толщина материала</td>
                    <td>до 100 м.п.</td>
                    <td>до 500 м.п.</td>
                    <td>до 1500 м.п.</td>
                    <td>от 1500 м.п.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Бумага и картон до 200 гр/кв. м.</td>
                    <td>18р.</td>
                    <td>15р.</td>
                    <td>13р.</td>
                    <td>11р.</td>
                  </tr>
                  <tr>
                    <td>Гофрокартон до 10 мм</td>
                    <td>23р.</td>
                    <td>19р.</td>
                    <td>16р.</td>
                    <td>14р.</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                *Цена указана без учета стоимости материала
              </p>
            </div>
          </div>

          <div className="onetable">
            <h3>Дополнительные услуги</h3>
            <div className="table-wrapper">
              <table className="service-prices">
                <thead>
                  <tr>
                    <td>Услуга</td>
                    <td>Цена</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Быстрый рез (контурная гравировка)</td>
                    <td>Цена договорная</td>
                  </tr>
                  <tr>
                    <td>Гравировка</td>
                    <td>Цена договорная</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Преимущества технологии</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Бесконтактная обработка</h3>
            <p>
              Отсутствие механических повреждений материала в процессе резки
            </p>
          </div>
          <div className="benefit-item">
            <h3>Точность до 0,1 мм</h3>
            <p>Идеальное соответствие чертежам и техническим требованиям</p>
          </div>
          <div className="benefit-item">
            <h3>Чистый рез</h3>
            <p>Отсутствие стружки и минимальная зона термического влияния</p>
          </div>
          <div className="benefit-item">
            <h3>Возможность гравировки</h3>
            <p>Нанесение маркировок, логотипов и сложных узоров</p>
          </div>
        </div>
      </div>

      <div className="process-section">
        <h2>Как мы работаем</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Заявка</h3>
            <p>Отправляете нам файл с чертежом или описание задачи</p>
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
            <h3>Доставка</h3>
            <p>Готовые изделия отправляем вам или можете забрать самовывозом</p>
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

export default Rezka;
