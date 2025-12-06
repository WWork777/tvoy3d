import '../Home.scss'
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function FormQuestion() {
    const [isSendingQ, setIsSendingQ] = useState(false);
    const [formDataQ, setFormDataQ] = useState({
        phone: '',
        message: '',
    });

    const handleChangeQ = (e) => {
        const { name, value } = e.target;
        setFormDataQ({
            ...formDataQ,
            [name]: value
        });
    };

    const handleSubmitQ = (e) => {
        e.preventDefault();
        setIsSendingQ(true);
        emailjs.send(
            'service_s6mel93', 
            'template_opjdqh2', 
            formDataQ,
            'FPSgyVYKLOQ6StVWf'
        ).then(() => {
            alert('Сообщение успешно отправлено!');
            
            setFormDataQ({
                phone: '',
                message: '',
            });
        }, () => {
            alert('Ошибка при отправке сообщения.');
        }).finally(() => {
            setIsSendingQ(false);
        });
    };
    return (
        <>
<div className='question home-form'>
                <h3>Если у Вас есть вопрос, заполните форму и мы вам перезвоним</h3>
                <form onSubmit={handleSubmitQ}>
                    <div className="inline-fields">
                        <input
                            type="text"
                            name="phone"
                            value={formDataQ.phone}
                            onChange={handleChangeQ}
                            placeholder="Номер телефона"
                            required
                        />
                            <input
                            type="text"
                            name="message"
                            value={formDataQ.message}
                            onChange={handleChangeQ}
                            placeholder="Имя"
                            required
                        />
                    </div>
                 
                    <div className='d-btn' style={{width: 'fit-content'}}>
                        <button type="submit" disabled={isSendingQ}>
                            {isSendingQ ? 'Отправка...' : 'ОТПРАВИТЬ'}
                            {isSendingQ && <span className="loading-spinner"></span>}
                        </button>
                    </div>
                </form>
                <h5>Отправляя форму, Вы соглашаетесь на обработку <Link href='/personal' onClick={() => window.scrollTo(0, 0)}><span>персональных данных.</span></Link></h5>
            </div>
        </>
    )
} 

export default FormQuestion