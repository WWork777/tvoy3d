// app/blog/[post]/page.js
import React from "react";
import Link from "next/link";
import "./ArticlePage.scss";

// Асинхронная функция для получения мета-тегов
export async function generateMetadata({ params }) {
  const { post } = params;

  // Получение данных статьи
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/content/Articles.json`
  );
  const data = await res.json();
  const article = data.find((item) => item.url === post);

  // Если статья не найдена, возвращаем пустые мета-теги или ставим дефолтные значения
  if (!article) {
    return {
      title: "Статья не найдена",
      description: "Эта статья не существует.",
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://tvoy3d.ru/blog/${article.url}`,
      images: [
        {
          url: `/content/${article.url}.jpg`,
          alt: article.title,
        },
      ],
    },
  };
}

const ArticlePage = async ({ params }) => {
  const { post } = params;

  // Получение данных для контента страницы
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/content/Articles.json`
  );
  const data = await res.json();
  const article = data.find((item) => item.url === post);

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  const formattedText = article.articlestext.replace(/\n\n/g, "<br><br>");

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <h4>{article.text}</h4>
      <img src={`/content/${article.url}.jpg`} alt={article.title} />
      <p>Дата публикации {article.date}</p>
      <div
        className="article-text"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />
      <Link href="/blog" className="back-button">
        Назад в блог
      </Link>
    </div>
  );
};

export default ArticlePage;
