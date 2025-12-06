
import emailjs from 'emailjs-com';

import Link from "next/link";
import FormQuestion from '../../../components/Question/Question';

export const metadata = {
    title: "Задать вопрос",
    description: "Задайте нам вопрос и мы ответим в ближайшее время",
    alternates: {
      canonical: 'https://tvoy3d.ru/question'
    },
  };

function Question() {
    

    return (
        <>
            <div className='question'>
                <h3>Есть вопрос или хотите оставить заявку, заполните форму и мы вам перезвоним</h3>
                <FormQuestion />
                <h5>Отправляя форму, Вы соглашаетесь на обработку <Link href='/personal'><span>персональных данных.</span></Link></h5>
            </div>
        </>
    );
}

export default Question;
