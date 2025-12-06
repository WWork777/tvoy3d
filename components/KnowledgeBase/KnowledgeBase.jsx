'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function KnowledgeComponent(){
   const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/content/Blog.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  const keywords = items.map(item => item.title).join(', ');

    return(
        <>
                        <div className='knowledgebase-list'>
                        {items.map((item, index) => (
                           <Link 
                              key={index} 
                              href={`/knowledgebase/${item.url}`}
                           >
                              <h3>{item.title}</h3>
                              <p>{item.text}</p>
                              <span>Подробнее →</span>
                              <div className="dec-line"></div>
                           </Link>
                        ))}
                               
                        </div>
        </>
    )
}