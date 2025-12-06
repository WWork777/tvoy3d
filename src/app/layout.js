import "./main.scss";
import "./Home.scss";
import "./NotFound.scss";
import "./about/About.scss";
import "./personal/Personal.scss";
import "./vacancy/Vacancy.scss";
import "./vacancy/vacancyform/VacancyForm.scss";
import "./contacts/Contacts.scss";
import "./blog/MainBlog.scss";
import "./knowledgebase/KnowledgeBase.scss";
import "./plastic/Plasticarticle.scss";
import "./services/ServicesInfo.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Bootstrap from "../../components/Bootstrap/Bootstrap";
import ScrollToTop from "../../components/ScrollTop/ScrollToTop";
import YandexMetrika from "../../components/YandexMetrika/YandexMetrika";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: [
      { rel: "icon", url: "/favicon/favicon.ico", sizes: "any" },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicon/icon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicon/icon-32x32.png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.placename" content="Москва, Россия" />
        <meta name="geo.position" content="55.918247; 37.679808" />
        <meta name="geo.region" content="RU-Москва" />
        <meta name="ICBM" content="55.918247; 37.679808" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="tvoy3d.ru/" />
        <meta
          property="og:title"
          content="3D Печать на Заказ: Качество и Большие Тиражи"
        />
        <meta
          property="og:description"
          content="Профессиональная 3D печать для крупных заказов. Высокое качество, соблюдение сроков, доставка по всей стране."
        />
        <meta property="og:url" content="https://tvoy3d.ru/" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:image"
          content="/favicon/android-chrome-192x192.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
      </head>
      <body className={montserrat.className}>
        <YandexMetrika />
        <ScrollToTop />
        <Bootstrap />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
