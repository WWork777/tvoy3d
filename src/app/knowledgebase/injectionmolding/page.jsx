import Link from "next/link";
import '../KnowledgeBasePortal.scss'
import InjectionmoldingComp from "../../../../components/KnowledgeBase/Injectionmolding";

export const metadata = {
    title: "Литье под давлением",
    description: "Литье под давлением для 3Д печати: оптимизация процесса для создания точных пластиковых деталей. Разработка форм и моделей для эффективного серийного производства.",
    alternates: {
      canonical: 'https://tvoy3d.ru/knowledgebase/injectionmolding'
    },
    keywords: ['механическая обработка с ЧПУ',' ЧПУ для 3D печати',' фрезеровка 3D деталей',' доводка 3D изделий',' точная обработка',' сверление',' резка',' обработка после 3D печати',' улучшение качества деталей','ЧПУ для 3д печати',' фрезеровка 3д деталей',' доводка 3д изделий','обработка после 3д печати','Твой 3д','Твой 3D',' 3д печать под заказ',' 3д печать в больших количествах',' 3D печать в больших количествах','3д печать в большом объеме'],
  };

function Injectionmolding(){
    return(
        <>
            <div className="knowledgebase-portal">
                        <div className="hero-block_image1">
                        <h1>Литье под давлением<div className='div-dec'></div></h1>
                        </div>
                        <h1 className='heading'>Как работает литье под давлением и когда настало время начать использовать его для производства деталей? Повысьте свои знания об этой универсальной и надежной технологии, о характеристиках, которые обеспечивают ее высокую повторяемость, и о том, как проектировать детали, чтобы получить максимальную отдачу от литья под давлением.</h1>
                        <div className='dec-line-second'></div>
                        <InjectionmoldingComp />
            </div>
        </>
    )
}
export default Injectionmolding