import Link from "next/link";
import '../KnowledgeBasePortal.scss'
import DesignforinjectionmoldingComp from '../../../../components/KnowledgeBase/Designforinjectionmolding';

export const metadata = {
    title: "Конструкция для литья под давлением",
    description: "Конструкция для литья под давлением: разработка форм и моделей для точного и эффективного производства пластиковых деталей. Оптимизация дизайна для серийного производства.",
    alternates: {
      canonical: 'https://tvoy3d.ru/knowledgebase/designforinjectionmolding'
    },
    keywords: ['механическая обработка с ЧПУ',' ЧПУ для 3D печати',' фрезеровка 3D деталей',' доводка 3D изделий',' точная обработка',' сверление',' резка',' обработка после 3D печати',' улучшение качества деталей','ЧПУ для 3д печати',' фрезеровка 3д деталей',' доводка 3д изделий','обработка после 3д печати','Твой 3д','Твой 3D',' 3д печать под заказ',' 3д печать в больших количествах',' 3D печать в больших количествах','3д печать в большом объеме'],
  };

function Designforinjectionmolding(){
    return(
        <>
                <div className="knowledgebase-portal">
                        <div className="hero-block_image1">
                        <h1>Конструкция для литья под давлением<div className='div-dec'></div></h1>
                        </div>
                        <h1 className='heading'>Литье под давлением является повторяемым, надежным и высокоэффективным процессом. Зачастую это лучшее производственное решение для создания сотен и тысяч деталей, а также подходящее решение для массового производства. Изучение того, как оптимизировать конструкции для литья под давлением, поможет вам сократить расходы, ускорить производство деталей и обеспечить лучшую согласованность в ходе производства.</h1>
                        <div className='dec-line-second'></div>
                        <DesignforinjectionmoldingComp />
            </div>
        </>
    )
}
export default Designforinjectionmolding