
import Link from "next/link";
import Form from '../../../components/ContactForm/ContactForm';

function ContactForm() {
    

    return (
        <>
            <div className='contactform'>
                <h3>Отправьте сообщение и прикрепите к нему файлы для печати</h3>
                <p>Вскоре на указанную вами почту придет ответное предложение с ценой, спецификациями и сроками производства</p>
                <Form />
                <h5>
                    Отправляя форму, Вы соглашаетесь на обработку{' '}
                    <Link href='/personal'>
                        <span className='blue'>персональных данных.</span>
                    </Link>
                </h5>
            </div>
        </>
    );
}

export default ContactForm;
