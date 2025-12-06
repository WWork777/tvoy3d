'use client'
import React, { useState, useEffect, useRef } from 'react';
import Scrollspy from 'react-scrollspy';

export default function Scroll(){
    
    const parentRef = useRef(null);
    const [fixedWidth, setFixedWidth] = useState('auto');
    const [fixed, setFixed ] = useState(false);

    const handleNavLinkClick = () => {
        const navCollapse = document.getElementById("collapseExample");
        if (navCollapse.classList.contains("show")) {
          navCollapse.classList.remove("show");
        }
      };
    useEffect(() => {
        const links = document.querySelectorAll("#collapseExample,.nav-link");
        links.forEach(link => {
          link.addEventListener("click", handleNavLinkClick);
        });
    
        return () => {
          links.forEach(link => {
            link.removeEventListener("click", handleNavLinkClick);
          });
        };
      }, []);

    useEffect(()=>{
        const scroll = ()=>{
        const scrollPosition = window.scrollY;
        if (scrollPosition > 300){
            setFixed(true)
        }
        else{
            setFixed(false)
        }
        };
        window.addEventListener(`scroll`, scroll);
        return()=>{
        window.removeEventListener('scroll', scroll);
        };
    })
    useEffect(() => {
        const updateWidth = () => {
          if (parentRef.current) {
            const parentWidth = parentRef.current.offsetWidth;
            setFixedWidth(`${parentWidth * 1}px`); // Устанавливаем ширину фиксированного элемента в 25% от ширины родителя
          }
        };
    
        updateWidth();
        window.addEventListener('resize', updateWidth);
    
        return () => {
          window.removeEventListener('resize', updateWidth);
        };
      }, []);

      const sidebar = document.querySelector('.nav-link');
      const scrollTrigger = document.querySelector('.is-current');
    
      window.addEventListener('scroll', () => {
        if (scrollTrigger.getBoundingClientRect().top < window.innerHeight) {
          sidebar.classList.add('scroll');
        } else {
          sidebar.classList.remove('scroll');
        }
      });
    

    return(
        <>
            
                <div className="col-4 pc">
                <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end" ref={parentRef}>
                    <nav className={`nav nav-pills flex-column ${fixed?`fixed-pills`:""}`} style={{ width: fixedWidth, padding: '24px' }}>
                    <Scrollspy items={ ['1','1-1', '1-2', '1-3', '2', '2-1', '3', '3-1', '3-2', '3-3', '4', '4-1', '5', '5-1', '6', '6-1', '7', '8', '8-1', '9', '9-1', '10', '10-1', '10-2', '10-3', '10-4', '10-5', '10-6', '10-7', '10-8', '11', '11-1', '11-2', '11-3'] } currentClassName="is-current">
                        <a className="nav-link" href="#1">Что такое 3D-печать?</a>
                        
                            <a className="nav-link ms-3 my-1" href="#1-1">3D-печать и аддитивное производство</a>
                            <a className="nav-link ms-3 my-1" href="#1-2">3D-печать и быстрое прототипирование</a>
                            <a className="nav-link ms-3 my-1" href="#1-3">Когда была изобретена 3D-печать?</a>
                        
                        <a className="nav-link" href="#2">Как работает 3D-печать?</a>
                        <a className="nav-link ms-3 my-1" href="#2-1">Аддитивное и традиционное производство</a>
                        
                        <a className="nav-link" href="#3">Технология 3D-печати</a>
                        <a className="nav-link ms-3 my-1" href="#3-1">Различные типы 3D-печати</a>
                        <a className="nav-link ms-3 my-1 " href="#3-2" >Процессы 3D-печати</a>
                        <a className="nav-link ms-3 my-1 " href="#3-3" >Выбор правильных процессов 3D-печати</a>

                        <a className="nav-link" href="#4">Материалы для 3D-печати</a>
                        <a className="nav-link ms-3 my-1" href="#4-1">Полный обзор материалов для 3D-печати</a>

                        <a className="nav-link" href="#5">Постобработка 3D-отпечатков</a>
                        <a className="nav-link ms-3 my-1" href="#5-1">Полный обзор материалов для 3D-печати</a>

                        <a className="nav-link" href="#6">Программное обеспечение для 3D-печати</a>
                        <a className="nav-link ms-3 my-1" href="#6-1">Какое программное обеспечение следует использовать для 3D-печати?</a>

                        <a className="nav-link" href="#7">Руководство по проектированию 3D-печати</a>

                        <a className="nav-link" href="#8">Здоровье и безопасность</a>
                        <a className="nav-link ms-3 my-1" href="#8-1">Меры предосторожности при 3D-печати</a>

                        <a className="nav-link" href="#9">Правовые и этические соображения</a>
                        <a className="nav-link ms-3 my-1" href="#9-1">Правила, которые могут повлиять на ваш проект</a>

                        <a className="nav-link" href="#10">Применение 3D-печати</a>
                        <a className="nav-link ms-3 my-1" href="#10-1">Аэрокосмическая промышленность и авиация</a>
                        <a className="nav-link ms-3 my-1" href="#10-2">Промышленное оборудование</a>
                        <a className="nav-link ms-3 my-1" href="#10-3">Бытовая электроника</a>
                        <a className="nav-link ms-3 my-1" href="#10-4">Медицинская 3D-печать</a>
                        <a className="nav-link ms-3 my-1" href="#10-5">Автомобильная 3D-печать</a>
                        <a className="nav-link ms-3 my-1" href="#10-6">3D-печать ювелирных изделий</a>
                        <a className="nav-link ms-3 my-1" href="#10-7">Каковы преимущества 3D-печати?</a>
                        <a className="nav-link ms-3 my-1" href="#10-8">Будущее 3D-печати</a>

                        <a className="nav-link" href="#11">Как напечатать что-нибудь на 3D-принтере</a>
                        <a className="nav-link ms-3 my-1" href="#11-1">Купить принтер или воспользоваться услугой 3D-печати?</a>
                        <a className="nav-link ms-3 my-1" href="#11-2">Как решить, какой 3D-принтер купить</a>
                        <a className="nav-link ms-3 my-1" href="#11-3">Как воспользоваться услугой 3D-печати</a>

                        </Scrollspy>
                    </nav>
                    
                    </nav>
                    
                </div>
                <div className={`structure ${fixed?`fixed-pills`:""}`}>
                <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div>
                        Содержание
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
                    </div>
                </button>
                    <div className="collapse" id="collapseExample">
                    <Scrollspy items={ ['1','1-1', '1-2', '1-3', '2', '2-1', '3', '3-1', '3-2', '3-3', '4', '4-1', '5', '5-1', '6', '6-1', '7', '8', '8-1', '9', '9-1', '10', '10-1', '10-2', '10-3', '10-4', '10-5', '10-6', '10-7', '10-8', '11', '11-1', '11-2', '11-3'] } currentClassName="is-current">
                        <a className="nav-link" href="#1">Что такое 3D-печать?</a>
                        
                            <a className="nav-link ms-3 my-1" href="#1-1">3D-печать и аддитивное производство</a>
                            <a className="nav-link ms-3 my-1" href="#1-2">3D-печать и быстрое прототипирование</a>
                            <a className="nav-link ms-3 my-1" href="#1-3">Когда была изобретена 3D-печать?</a>
                        
                        <a className="nav-link" href="#2">Как работает 3D-печать?</a>
                        <a className="nav-link ms-3 my-1" href="#2-1">Аддитивное и традиционное производство</a>
                        
                        <a className="nav-link" href="#3">Технология 3D-печати</a>
                        <a className="nav-link ms-3 my-1" href="#3-1">Различные типы 3D-печати</a>
                        <a className="nav-link ms-3 my-1 " href="#3-2" >Процессы 3D-печати</a>
                        <a className="nav-link ms-3 my-1 " href="#3-3" >Выбор правильных процессов 3D-печати</a>

                        <a className="nav-link" href="#4">Материалы для 3D-печати</a>
                        <a className="nav-link ms-3 my-1" href="#4-1">Полный обзор материалов для 3D-печати</a>

                        <a className="nav-link" href="#5">Постобработка 3D-отпечатков</a>
                        <a className="nav-link ms-3 my-1" href="#5-1">Полный обзор материалов для 3D-печати</a>

                        <a className="nav-link" href="#6">Программное обеспечение для 3D-печати</a>
                        <a className="nav-link ms-3 my-1" href="#6-1">Какое программное обеспечение следует использовать для 3D-печати?</a>

                        <a className="nav-link" href="#7">Руководство по проектированию 3D-печати</a>

                        <a className="nav-link" href="#8">Здоровье и безопасность</a>
                        <a className="nav-link ms-3 my-1" href="#8-1">Меры предосторожности при 3D-печати</a>

                        <a className="nav-link" href="#9">Правовые и этические соображения</a>
                        <a className="nav-link ms-3 my-1" href="#9-1">Правила, которые могут повлиять на ваш проект</a>

                        <a className="nav-link" href="#10">Применение 3D-печати</a>
                        <a className="nav-link ms-3 my-1" href="#10-1">Аэрокосмическая промышленность и авиация</a>
                        <a className="nav-link ms-3 my-1" href="#10-2">Промышленное оборудование</a>
                        <a className="nav-link ms-3 my-1" href="#10-3">Бытовая электроника</a>
                        <a className="nav-link ms-3 my-1" href="#10-4">Медицинская 3D-печать</a>
                        <a className="nav-link ms-3 my-1" href="#10-5">Автомобильная 3D-печать</a>
                        <a className="nav-link ms-3 my-1" href="#10-6">3D-печать ювелирных изделий</a>
                        <a className="nav-link ms-3 my-1" href="#10-7">Каковы преимущества 3D-печати?</a>
                        <a className="nav-link ms-3 my-1" href="#10-8">Будущее 3D-печати</a>

                        <a className="nav-link" href="#11">Как напечатать что-нибудь на 3D-принтере</a>
                        <a className="nav-link ms-3 my-1" href="#11-1">Купить принтер или воспользоваться услугой 3D-печати?</a>
                        <a className="nav-link ms-3 my-1" href="#11-2">Как решить, какой 3D-принтер купить</a>
                        <a className="nav-link ms-3 my-1" href="#11-3">Как воспользоваться услугой 3D-печати</a>

                        </Scrollspy>
                    </div>
                    </div>

                
                
               
                
        </>
    )
}