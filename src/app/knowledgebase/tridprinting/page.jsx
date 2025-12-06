
import '../KnowledgeBasePortal.scss'
import TridprintingComp from '../../../../components/KnowledgeBase/Tridprinting';

export const metadata = {
    title: "3Д Печать: Технологии и Решения",
    description: "3Д печать: исследуйте передовые технологии и решения для создания прототипов, деталей и изделий. Узнайте о возможностях и преимуществах аддитивного производства.",
    alternates: {
      canonical: 'https://tvoy3d.ru/knowledgebase/tridprinting'
    },
    keywords: ['механическая обработка с ЧПУ',' ЧПУ для 3D печати',' фрезеровка 3D деталей',' доводка 3D изделий',' точная обработка',' сверление',' резка',' обработка после 3D печати',' улучшение качества деталей','ЧПУ для 3д печати',' фрезеровка 3д деталей',' доводка 3д изделий','обработка после 3д печати','Твой 3д','Твой 3D',' 3д печать под заказ',' 3д печать в больших количествах',' 3D печать в больших количествах','3д печать в большом объеме'],
  };

function KnowledgeBaseDesc(){
    return(
        <>
            <div className="knowledgebase-portal">
                        <div className="hero-block_image1">
                        <h1>3D-печать<div className='div-dec'></div></h1>
                        </div>
                        <h1 className='heading'>Что такое 3D-печать? Как работает 3D-печать? В чем основные различия между такими аддитивными технологиями, как FDM, SLA, SLS и MJF? Этот сборник статей ответит на все ваши самые насущные вопросы о 3D-печати и о том, как эта технология может стать для вас идеальным решением для создания прототипов и производства.</h1>
                        <div className='dec-line-second'></div>
                        <TridprintingComp />
            </div>
        </>
    )
}

export default KnowledgeBaseDesc