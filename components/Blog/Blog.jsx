"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function BlogComponent() {
  const [articles, setArticles] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [displayedArticlesCount, setDisplayedArticlesCount] = useState(8);
  const articlesPerPage = 8;

  useEffect(() => {
    fetch("/content/Articles.json")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setFilteredArticles(data);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  useEffect(() => {
    filterArticles(selectedTags, searchQuery);
    setDisplayedArticlesCount(articlesPerPage); // Reset displayed articles count on filter change
  }, [selectedTags, searchQuery]);

  const filterArticles = (tags, query) => {
    let filtered = articles;

    if (tags.length > 0) {
      filtered = filtered.filter((article) =>
        tags.every((tag) => article.tags.includes(tag))
      );
    }

    if (query) {
      filtered = filtered.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  };

  const handleTagClick = (tag) => {
    let newSelectedTags;
    if (selectedTags.includes(tag)) {
      newSelectedTags = selectedTags.filter((t) => t !== tag);
    } else {
      newSelectedTags = [...selectedTags, tag];
    }
    setSelectedTags(newSelectedTags);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleLoadMore = () => {
    setDisplayedArticlesCount((prevCount) => prevCount + articlesPerPage);
  };
  const keywords = articles.map((item) => item.title).join(", ");

  return (
    <>
      <div className="search">
        <div className="search-container">
          <h3>Поиск</h3>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Поиск статей..."
          />
          <button
            className="filters"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-sliders"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
              />
            </svg>
            <span
              className={`position-absolute translate-middle badge rounded-pill bg-danger ${
                selectedTags.length > 0 ? "" : "display"
              }`}
            >
              {selectedTags.length}
              <span className="visually-hidden">непрочитанные сообщения</span>
            </span>
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="tags-container">
            {[
              "3D-Печать",
              "Новости компании",
              "Механическая обработка с ЧПУ",
              "Тематические исследования",
              "Отраслевые тенденции",
              "Литье под давлением",
              "Материалы",
              "Изготовление листового металла",
              "Автомобильная промышленность",
              "Бытовая электроника",
              "Медицина",
              "Робототехника и автоматизация",
              "Авиация",
              "Аддитивная инженерия",
              "Советы",
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={selectedTags.includes(tag) ? "active" : ""}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <h3>Все статьи ({filteredArticles.length})</h3>
      <div className="articles-container">
        {filteredArticles.length > 0 ? (
          filteredArticles.slice(0, displayedArticlesCount).map((article) => (
            <div className="article-card" key={article.id}>
              <img
                src={`/content/${encodeURIComponent(article.title)}.jpg`}
                alt={article.title}
              />
              <Link
                style={{ textDecoration: "none" }}
                href={`/blog/${article.url}`}
              >
                <h4>{article.title}</h4>
              </Link>
              <p>{article.date}</p>
              <p>{article.text}</p>
              <div className="tags">
                {article.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="no-articles">Статьи не найдены</p>
        )}
      </div>
      {filteredArticles.length > displayedArticlesCount && (
        <button className="load-more" onClick={handleLoadMore}>
          Показать еще
        </button>
      )}
    </>
  );
}
