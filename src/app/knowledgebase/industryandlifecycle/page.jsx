import Link from "next/link";
import '../KnowledgeBasePortal.scss'
import Industryandlifecycle from "../../../../components/KnowledgeBase/Industryandlifecycle";

export const metadata = {
    title: "Отрасль и жизненный цикл",
    description: "Отрасль и жизненный цикл 3Д печати: от разработки и прототипирования до массового производства. Узнайте, как технологии 3D печати интегрируются в различные отрасли.",
    alternates: {
      canonical: 'https://tvoy3d.ru/knowledgebase/industryandlifecycle'
    },
    keywords: ['механическая обработка с ЧПУ',' ЧПУ для 3D печати',' фрезеровка 3D деталей',' доводка 3D изделий',' точная обработка',' сверление',' резка',' обработка после 3D печати',' улучшение качества деталей','ЧПУ для 3д печати',' фрезеровка 3д деталей',' доводка 3д изделий','обработка после 3д печати','Твой 3д','Твой 3D',' 3д печать под заказ',' 3д печать в больших количествах',' 3D печать в больших количествах','3д печать в большом объеме'],
  };

function KnowledgeBaseDesc(){
    return(
        <>
            <div className="knowledgebase-portal">
                        <div className="hero-block_image1">
                        <h1>Отрасль и жизненный цикл<div className='div-dec'></div></h1>
                        </div>
                        <h1 className='heading'>Ознакомьтесь с этими практическими советами о том, как проектировать детали для различных целей - от создания прототипов аэрокосмических деталей до серийного производства потребительских товаров для конечного использования.</h1>
                        <div className='dec-line-second'></div>
                        
                        <Industryandlifecycle />
                        
            </div>
        </>
    )
}

export default KnowledgeBaseDesc