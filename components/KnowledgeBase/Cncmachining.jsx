'use client'
import Link from "next/link";
import React, { useState, useEffect } from 'react';

function CncmachiningComp(){
    const [industryData, setIndustryData] = useState([]);

    useEffect(() => {
        fetch('/content/BlogSecondPage.json')
        .then(response => response.json())
        .then(data => {
            setIndustryData(data.cncmachining || []);
        })
        .catch(error => console.error('Error fetching the data:', error));
    }, []);


    return(
        <>
                        <div className='knowledgebase-list'>
                        {industryData.map((item) => (
                        <Link key={item.id} href={`/knowledgebase/KnowledgeDetails/${item.url}`}>
                            <img src={`/content/${item.imageUrl}.jpg`} alt={item.title} /> 
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

export default CncmachiningComp