import Link from "next/link";
import '../KnowledgeBasePortal.scss'
import TablesandcheatsheetsComp from '../../../../components/KnowledgeBase/Tablesandcheatsheets';

export const metadata = {
    title: "Стандарты и технические данные",
    description: "Стандарты и технические данные для 3Д печати: ключевые требования, спецификации и параметры для обеспечения точности и качества печати ваших изделий.",
    alternates: {
      canonical: 'https://tvoy3d.ru/knowledgebase/tablesandcheatsheets'
    },
    keywords: ['механическая обработка с ЧПУ',' ЧПУ для 3D печати',' фрезеровка 3D деталей',' доводка 3D изделий',' точная обработка',' сверление',' резка',' обработка после 3D печати',' улучшение качества деталей','ЧПУ для 3д печати',' фрезеровка 3д деталей',' доводка 3д изделий','обработка после 3д печати','Твой 3д','Твой 3D',' 3д печать под заказ',' 3д печать в больших количествах',' 3D печать в больших количествах','3д печать в большом объеме'],
  };

function Tablesandcheatsheets(){
    return(
        <>
            <div className="knowledgebase-portal">
                        <div className="hero-block_image1">
                        <h1>Стандарты и технические данные<div className='div-dec'></div></h1>
                        </div>
                        <h1 className='heading'>Каковы основные отраслевые стандарты производства и как они помогают разрабатывать технологичные детали? Этот сборник стандартов, таблиц и диаграмм преобразования, включая размеры сверл для станков с ЧПУ, поможет вам быстрее и эффективнее искать детали.</h1>
                        <div className='dec-line-second'></div>
                        <TablesandcheatsheetsComp />
            </div>
        </>
    )
}

export default Tablesandcheatsheets