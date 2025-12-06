// app/knowledgebase/[know]/page.js
import React from 'react';
import Link from 'next/link';
import './KnowledgeDetails.scss';

// Функция для генерации мета-тегов на сервере
export async function generateMetadata({ params }) {
    const { know } = params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/content/BlogSecondPage.json`);
    const data = await res.json();

    let foundArticle = null;
    const categories = [
        'Industryandlifecycle', 'tridprinting', 'cncmachining', 'tablesandcheatsheets',
        'designfor3dprinting', 'designforcnc', 'designforinjectionmolding',
        'manufacturingmaterials', 'postprocessingandfinishing'
    ];

    // Поиск статьи в разных категориях
    for (const category of categories) {
        if (Array.isArray(data[category])) {
            foundArticle = data[category].find(item => item.url === know);
            if (foundArticle) break;
        }
    }

    if (!foundArticle) {
        return {
            title: 'Статья не найдена',
            description: 'Эта статья не существует.',
        };
    }

    return {
        title: foundArticle.title,
        description: foundArticle.description,
        keywords: foundArticle.keywords,
        openGraph: {
            title: foundArticle.title,
            description: foundArticle.description,
            url: `https://tvoy3d.ru/knowledgebase/${foundArticle.url}`,
            images: [
                {
                    url: `/content/${encodeURIComponent(foundArticle.url)}.jpg`,
                    alt: foundArticle.title,
                },
            ],
        },
    };
}

// Основной компонент страницы для отображения контента
const KnowledgeDetails = async ({ params }) => {
    const { know } = params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/content/BlogSecondPage.json`);
    const data = await res.json();

    let foundArticle = null;

    const categories = [
        'Industryandlifecycle', 'tridprinting', 'cncmachining', 'tablesandcheatsheets',
        'designfor3dprinting', 'designforcnc', 'designforinjectionmolding',
        'manufacturingmaterials', 'postprocessingandfinishing'
    ];

    for (const category of categories) {
        if (Array.isArray(data[category])) {
            foundArticle = data[category].find(item => item.url === know);
            if (foundArticle) break;
        }
    }

    if (!foundArticle) {
        return <div>Статья не найдена</div>;
    }

    const formattedText = foundArticle.detailtext.replace(/\n\n/g, '<br><br>');

    return (
        <div className="article-page">
            <h1>{foundArticle.title}</h1>
            <h4>{foundArticle.text}</h4>
            <img src={`/content/${foundArticle.imageUrl}.jpg`} alt={foundArticle.title} />
            <div className="article-text" dangerouslySetInnerHTML={{ __html: formattedText }} />
            <Link href="/knowledgebase" className="back-button">
                Назад в базу знаний
            </Link>
        </div>
    );
};

export default KnowledgeDetails;
