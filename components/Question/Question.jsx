'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function FormQuestion(){

    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ym(97987441,'reachGoal','FormCall')
        setIsSending(true);
        emailjs.send(
            'service_s6mel93', 
            'template_opjdqh2', 
            formData,
            'FPSgyVYKLOQ6StVWf'
        ).then(() => {
            alert('Сообщение успешно отправлено!');
            
            setFormData({
                phone: '',
                message: '',
            });
        }, () => {
            alert('Ошибка при отправке сообщения.');
        }).finally(() => {
            setIsSending(false);
        });
    };

    return(
        <>
           <form onSubmit={handleSubmit}>
                    <div className="inline-fields">
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Номер телефона"
                            required
                        />
                            <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Имя"
                            required
                        />
                    </div>
                 
                    <div className='d-btn' style={{width: 'fit-content'}}>
                        <button type="submit" disabled={isSending}>
                            {isSending ? 'Отправка...' : 'ОТПРАВИТЬ'}
                            {isSending && <span className="loading-spinner"></span>}
                        </button>
                    </div>
                </form>
        </>
    )
}