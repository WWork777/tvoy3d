import Link from "next/link";
import '../KnowledgeBasePortal.scss'
import ManufacturingmaterialsComp from '../../../../components/KnowledgeBase/Manufacturingmaterials';

export const metadata = {
    title: "Материалы для изготовления",
    description: "Материалы для 3Д печати: обзор пластиков, смол и металлов. Узнайте, как выбрать оптимальный материал для ваших проектов и обеспечить высокое качество печати.",
    alternates: {
      canonical: 'https://tvoy3d.ru/knowledgebase/manufacturingmaterials'
    },
    keywords: ['механическая обработка с ЧПУ',' ЧПУ для 3D печати',' фрезеровка 3D деталей',' доводка 3D изделий',' точная обработка',' сверление',' резка',' обработка после 3D печати',' улучшение качества деталей','ЧПУ для 3д печати',' фрезеровка 3д деталей',' доводка 3д изделий','обработка после 3д печати','Твой 3д','Твой 3D',' 3д печать под заказ',' 3д печать в больших количествах',' 3D печать в больших количествах','3д печать в большом объеме'],
  };

function Manufacturingmaterials(){
    return(
        <>
                    <div className="knowledgebase-portal">
                        <div className="hero-block_image1">
                        <h1>Материалы для изготовления<div className='div-dec'></div></h1>
                        </div>
                        <h1 className='heading'>Существует множество видов материалов для изготовления. Какие материалы доступны для 3D-печати, обработки на станках с ЧПУ, литья под давлением и изготовления листового металла? Как выбрать подходящий для вашего дизайна? Очень важно понимать, из чего сделаны материалы и их уникальные косметические и механические свойства. В этих статьях рассматриваются ключевые характеристики материалов, оптимальные варианты использования и многое другое.</h1>
                        <div className='dec-line-second'></div>
                        <ManufacturingmaterialsComp />
            </div>
        </>
    )
}
export default Manufacturingmaterials