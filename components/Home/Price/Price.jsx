"use client";
import "./Price.scss";
import Link from "next/link";

const CardGrid = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div key={index} className="card-price">
          <div className="price-container">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <ul>
              <li>{card.price}</li>
              <li>{card.price2}</li>
              <li>{card.price3}</li>
            </ul>
            <div className="block-buttons-price">
              <Link
                smooth="true"
                href={card.linkone}
                onClick={() => window.scrollTo(0, 0)}
              >
                <button>Подробнее</button>
              </Link>
              <Link
                smooth="true"
                href="/contactform"
                onClick={() => window.scrollTo(0, 0)}
              >
                <button>Заказать</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardGrid;
