import KnowledgeComponent from '../../../components/KnowledgeBase/KnowledgeBase';

import Link from "next/link";

export const metadata = {
    title: "3Д Печать | База знаний",
    description: "База знаний по 3Д печати: руководство по технологиям, советы по выбору материалов, настройки принтеров и устранение неполадок. Найдите ответы на все вопросы.",
    alternates: {
      canonical: 'https://tvoy3d.ru/knowledgebase'
    },
    keywords: ['база знаний 3D печати',' руководство по 3D печати',' советы по 3D печати',' технологии 3D печати',' настройка 3D принтера',' выбор материалов для 3D печати',' устранение неполадок 3D печати',' оптимизация 3D печати',' печать прототипов',' 3D печать и технологии',' аддитивное производство',' советы по печати',' руководство по аддитивному производству',' глоссарий 3D печати',' часто задаваемые вопросы 3D печать',' Твой 3д',' Твой 3D',' 3д печать под заказ',' 3д печать в больших количествах',' 3D печать в больших количествах','3д печать в большом объеме'],
  };

function KnowledgeBase(){

    return(
        <>
            <div className="knowledgebase">
                        <div className="hero-block_image1">
                            <div className='dark-fon'>
                                <h1>БАЗА ЗНАНИЙ<div className='div-dec'></div></h1>
                            </div>
                        </div>
                        <h1 className='heading'>Узнайте, как изготавливать более качественные детали</h1>
                        <KnowledgeComponent />
                        <h1 className='heading'>Что сейчас читают инженеры</h1>
                        <div className='knowledgebase-second-list'>
                             
                                <Link href='/knowledgebase/engineersreading/Understandthescaleofproduction'>
                                <img src='/knowledgebase/img2.jpg'></img>
                                        <h3>Понимать масштабы производства</h3>
                                        <p>Изучите различные масштабы производственных факторов, которые влияют на них, и методы производства, которые наилучшим образом подходят для каждого этапа.</p>
                                </Link>
                                <Link href='/knowledgebase/engineersreading/RoughnessofRzcomparedtoRa' >
                                <img src='/knowledgebase/img3.jpg'></img>
                                        <h3>Шероховатость Rz по сравнению с Ra</h3>
                                        <p>Rz и Ra - это измерения, используемые для описания и количественной оценки шероховатости поверхности в производстве и инженерии. Узнайте больше об этих различных способах измерения шероховатости при обработке деталей на заказ.</p>
                                </Link>
                                <Link href='/knowledgebase/engineersreading/Whatareinjectionmolding' >
                                <img src='/content/IM-Customer-part_Chris-Engels_02.jpg'></img>
                                        <h3>Что такое машины для литья под давлением и как они работают?</h3>
                                        <p>Хотите узнать больше о том, как именно функционирует машина для литья под давлением, а также о ее отдельных деталях? В этой статье мы рассмотрим машины для литья под давлением под микроскопом с подробным описанием их компонентов и подробным руководством по процессу литья под давлением.</p>
                                </Link>
                        </div>
            </div>
        </>
    )
}
export default KnowledgeBase