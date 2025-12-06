import Link from "next/link";
import styles from "./styles.module.scss";

export default function SaleBlock() {
  return (
    <div className={styles.saleBanner}>
      <div className={styles.decorativeCircle}></div>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            src="/content/3d67.webp"
            alt="Флекси брелок"
            className={styles.image}
          />
          <div className={styles.imageOverlay}></div>
        </div>
        <div className={styles.textContainer}>
          <span className={styles.badge}>
            <span className={styles.badgeIcon}>🎁</span> Специальное предложение
          </span>
          <br></br>
          <h2 className={styles.title}>
            <span className={styles.titleAccent}>Флекси брелок</span> в подарок
          </h2>
          <p className={styles.description}>
            При заказе от <span className={styles.amount}>1000 рублей</span>
          </p>
          <Link
            href={"mailto:tvoy-3d@yandex.ru"}
            smooth="true"
            className={styles.button}
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  );
}
