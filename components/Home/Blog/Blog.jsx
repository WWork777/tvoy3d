'use client'
import './Blog.scss';
import Link from "next/link";
import React, { useState, useEffect } from 'react';

function Blog() {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        fetch('/content/Articles.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setArticles(data.slice(0, 4));
            })
         
    }, []);


    return (
        <div className="container-blog">
             <div className="blog">
                <h1>Статьи</h1>
                    <div className="articles-container-home">
                        {articles.map(article => (
                            <div className="article-card" key={article.id}>
                                <img src={`/content/${encodeURIComponent(article.title)}.jpg`} alt={article.title} />
                                <Link style={{textDecoration: 'none'}} href={`/blog/${article.url}`}>
                                    <h4>{article.title}</h4>
                                </Link>
                                <p>{article.date}</p>
                                <p>{article.text}</p>
                                <div className="tags">
                                    {article.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                   
        </div>
        </div>
       
    );
}

export default Blog;
