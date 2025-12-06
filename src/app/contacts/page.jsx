import Ymap from "../../../components/Contacts/Ymap";

export const metadata = {
  title: "3Д Печать | Контакты",
  description:
    "Свяжитесь с нами для консультаций по 3Д печати, заказа услуг, или получения дополнительной информации. Мы готовы ответить на все ваши вопросы.",
  keywords: [
    "контакты",
    "3D печать",
    "заказать 3D печать",
    "Твой 3д",
    "Твой 3D",
    "3д печать под заказ",
    "3д печать в больших количествах",
  ],
  alternates: {
    canonical: "https://tvoy3d.ru/contacts",
  },
};

export default function Contacts() {
  return (
    <>
      <div className="contacts">
        <div className="hero-block_image">
          <h1>
            КОНТАКТЫ<div className="div-dec"></div>
          </h1>
        </div>
        <Ymap />
        <div className="contact-info">
          <div className="contact-info_card">
            <div>
              <svg
                viewBox="-24 -24 72.00 72.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></rect>{" "}
                </g>
              </svg>
            </div>
            <h4>Почта</h4>
            <a href="mailto:Victor-pol@yandex.ru">tvoy-3d@yandex.ru</a>
          </div>

          <div className="contact-info_card">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                fill="currentColor"
                class="bi bi-telephone"
                viewBox="-14 -12 45 45"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
            </div>
            <h4>Телефон</h4>
            <a href="tel:+79936307048">+7 993-630-70-48</a>
            <div></div>
          </div>

          <div className="contact-info_card">
            <div>
              <svg
                viewBox="-24 -24 72.00 72.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <h4>Адрес</h4>
            <a>ул. Советская 105</a>
          </div>
        </div>
      </div>
    </>
  );
}
