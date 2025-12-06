import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Carousel from "../../components/Home/Carousel/Carousel";
import Quiz from "../../components/Home/Quiz/Quiz";
import Portfolio from "../../components/Home/Portfolio/Portfolio";
import CardGrid from "../../components/Home/Price/Price";
import CardCarousel from "../../components/Home/Price/PriceMobile";
import Blog from "../../components/Home/Blog/Blog";
import BlogMobile from "../../components/Home/Blog/BlogMobile";
import FormApplication from "../../components/Home/Forms/FormApplication";
import Partners from "../../components/Home/Partners/Partners";
import Sale from "../../components/Home/Sale/page";
import AboutBlock from "../../components/aboutblock";
import SaleBlock from "../../components/sale/sale";
import ContactsForm from "../../components/ContactsForm/ContactsForm";

export const metadata = {
  title: "3D Печать на Заказ в Москве",
  description:
    "Услуги 3D печати в Москве — печатаем по вашим моделям и создаём с нуля. Пластик PLA, ABS, PETG. Быстрое производство, доставка, помощь в моделировании. Заказать онлайн!",
  alternates: {
    canonical: "https://tvoy3d.ru/",
  },
  keywords: [
    "3D печать в Москве",
    "3D печать в Москве",
    "3D моделирование в Москве",
    "3D моделирование",
    "3D сканирование в Москве",
    "3D сканирование",
    "3D печать",
    "заказать 3D печать",
    "Твой 3д",
    "Твой 3D",
    "3д печать под заказ",
    "3д печать в больших количествах",
  ],
};

export default function Home() {
  const cards = [
    {
      title: "Экструзионная 3D-печать(FDM/FFF/FGF)",
      content: "Цена",
      price: "Минимальные модели (до 10x10x10 см): от 500 до 1500 рублей.",
      price2: "Средние модели (до 20x20x20 см): от 1500 до 5000 рублей.",
      price3:
        "Крупные модели (более 20x20x20 см): от 5000 рублей и выше, в зависимости от размера и сложности.",
      linkone: "/services/extrusion",
    },
    {
      title: "Стереолитография (SLA/DLP/MSLA)",
      content: "Цена",
      price: "Минимальные модели (до 10x10x10 см): от 1000 до 3000 рублей.",
      price2: "Средние модели (до 20x20x20 см): от 3000 до 8000 рублей.",
      price3:
        "Крупные модели (более 20x20x20 см): от 8000 рублей и выше, в зависимости от размера и сложности.",
      linkone: "/services/stereolithography",
    },
    {
      title: "Струйная 3D-печать (Multi Jet Printing/PolyJet Printing)",
      content: "Цена",
      price: "Минимальные модели (до 10x10x10 см): от 2000 до 5000 рублей.",
      price2: "Средние модели (до 20x20x20 см): от 5000 до 12000 рублей.",
      price3:
        "Крупные модели (более 20x20x20 см): от 12000 рублей и выше, в зависимости от размера и сложности.",
      linkone: "/services/inkjet",
    },
    {
      title: "Синтез на подложке (PBF/SLS/DMLS/SLM/EBM)",
      content: "Цена",
      price: "Минимальные модели (до 10x10x10 см): от 3000 до 7000 рублей.",
      price2: "Средние модели (до 20x20x20 см): от 7000 до 15000 рублей.",
      price3:
        "Крупные модели (более 20x20x20 см): от 15000 рублей и выше, в зависимости от размера и сложности.",
      linkone: "/services/synthesis",
    },
  ];

  const cardsBlog = [
    {
      title: "Четвертое измерение.Взгляд в будущее 3D-печати",
      date: "12.09.2022",
      text: "От микроскопических деталей до мостов и домов, 3D-печать охватывает все размеры.",
    },
    {
      title: "Что мир хочет знать о 3D-печати",
      date: "12.09.2022",
      text: "Что я могу напечатать? Сколько это стоит? И... что именно это такое? Мы изучили данные поиска Google, чтобы выяснить",
    },
    {
      title: "От прототипирования до производства – как развивается 3D-печать",
      date: "12.09.2022",
      text: "Печать серийных объемов деталей становится все более жизнеспособным решением.",
    },
    {
      title: "3D-печать и большие обещания искусственного интеллекта",
      date: "12.09.2022",
      text: "Стоит ли верить хайпу о будущем 3D-печати с искусственным интеллектом?",
    },
  ];

  return (
    <>
      <Carousel />
      {/* <Sale /> */}
      <SaleBlock />
      {/* <Quiz /> */}
      <ContactsForm />

      <AboutBlock />
      <Portfolio />

      <div className="navigate">
        <div className="nav1">
          <Link smooth="true" href="/knowledgebase">
            <div className="fon">
              <span className="d-btn">
                <button>О 3D-ПЕЧАТИ</button>
              </span>
            </div>
          </Link>
        </div>
        <div className="nav2">
          <div>
            <div className="nav21">
              <Link smooth="true" href="/blog">
                <div
                  className="fon"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.2) 100%)",
                  }}
                >
                  <span className="d-btn">
                    <button>БЛОГ</button>
                  </span>
                </div>
              </Link>
            </div>
            <div className="nav24">
              <Link smooth="true" href="/services">
                <div
                  className="fon"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.2) 100%)",
                  }}
                >
                  <span className="d-btn">
                    <button>УСЛУГИ</button>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className="nav22">
              <Link smooth="true" href="/plastic">
                <div
                  className="fon"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.3) 100%)",
                  }}
                >
                  <span className="d-btn">
                    <button>МАТЕРИАЛЫ</button>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-cards--progress">
        <h2 className="title">Наш процесс оформления заказа</h2>
        <div className="cards">
          <div className="card">
            <div className="card-title">Оставьте заявку онлайн</div>
            <div className="card-subtitle">
              Загрузите свой дизайн детали в нашу форму онлайн предложений и
              опишите свои требования к производству детали
            </div>
          </div>
          <div className="card">
            <div className="card-title">Получите мгновенное предложение</div>
            <div className="card-subtitle">
              Мы проанализируем ваш запрос, составим спецификации, определим
              цену и продолжительность производства
            </div>
          </div>
          <div className="card">
            <div className="card-title">Производство</div>
            <div className="card-subtitle">
              После согласования предложения производство начинается немедленно
            </div>
          </div>
          <div className="card">
            <div className="card-title">Контроль качества</div>
            <div className="card-subtitle">
              Мы несем полную ответственность за то, чтобы ваши детали были
              изготовлены в соответствии с нашими стандартами
            </div>
          </div>
          <div className="card">
            <div className="card-title">Доставка</div>
            <div className="card-subtitle">
              Проверяем заказ перед отправкой и доставляем транспортной
              компанией
            </div>
          </div>
        </div>
      </div>

      <Blog cardsBlog={cardsBlog} />
      <BlogMobile cardsBlog={cardsBlog} />
      <Link href="/blog" className="back-button">
        Все статьи
      </Link>
      {/* <FormApplication id="application" /> */}
      {/* <Partners/> */}
      <ContactsForm />
    </>
  );
}
