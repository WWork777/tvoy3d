'use client'
//import '../Home.scss'
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import Link from "next/link";


function FormApplication() {
    const [isUploading, setIsUploading] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        message: '',
        fileLinks: []
    });
    const [fileNames, setFileNames] = useState([]); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isUploading) {
            alert('Подождите, пока все файлы загрузятся.');
            return;
        }

        setIsSending(true);

        emailjs.send(
            'service_s6mel93',
            'template_8p093rr',
            {
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
                file_links: formData.fileLinks.join(', ') 
            },
            'FPSgyVYKLOQ6StVWf'
        ).then(() => {
            alert('Сообщение успешно отправлено!');
            
            setFormData({
                phone: '',
                email: '',
                message: '',
                fileLinks: []
            });
            setFileNames([]);
        }, () => {
            alert('Ошибка при отправке сообщения.');
        }).finally(() => {
            setIsSending(false);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = async (e) => {
        const newFiles = Array.from(e.target.files);
        setIsUploading(true);

        try {
            const newFileLinks = [...formData.fileLinks]; 
            const newFileNames = [...fileNames]; 

            for (const file of newFiles) {
                newFileNames.push(file.name); 

                const response = await fetch('https://content.dropboxapi.com/2/files/upload', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer sl.B8zqs7NgljzsbNOoruul03FJUA01lEp3-0PNkmp2x0btLZui7HJDkppDn_92otprm4UXGuEzh1Sl1-9v_LOyOlsTOldb1_aXqvYoto1UVRisbagc_B3In8Iz5jbAZ7LqpJ4P-VV-I88J1xE', // замените на ваш токен
                        'Dropbox-API-Arg': JSON.stringify({
                            path: `/${file.name}`,
                            mode: 'add',
                            autorename: true,
                            mute: false,
                        }),
                        'Content-Type': 'application/octet-stream',
                    },
                    body: file
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(`Upload failed: ${response.statusText}`);
                }

                const responseLink = await fetch('https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer sl.B8zqs7NgljzsbNOoruul03FJUA01lEp3-0PNkmp2x0btLZui7HJDkppDn_92otprm4UXGuEzh1Sl1-9v_LOyOlsTOldb1_aXqvYoto1UVRisbagc_B3In8Iz5jbAZ7LqpJ4P-VV-I88J1xE', 
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        path: data.path_lower
                    })
                });
                
                const linkData = await responseLink.json();
                let fileLink;

                if (responseLink.status === 409 && linkData.error && linkData.error[".tag"] === "shared_link_already_exists") {
                    fileLink = linkData.error.shared_link_already_exists.metadata.url;
                } else if (responseLink.ok) {
                    fileLink = linkData.url;
                } else {
                    throw new Error(`Link creation failed: ${linkData.error_summary}`);
                }

                newFileLinks.push(fileLink);
            }

            setFormData((prevFormData) => ({
                ...prevFormData,
                fileLinks: newFileLinks
            }));
            setFileNames(newFileNames); 

        } catch (error) {
           error;
        } finally {
            setIsUploading(false);
        }
    };
    return(
        <>
        <div className='contactform home-form-main'>
                 <h3>Отправьте сообщение и прикрепите к нему файл для печати</h3>
                 <p>Вскоре на указанную вами почту придет ответное предложение с ценой, спецификациями и сроками производства</p>
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
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Сообщение"
                            required
                        />
                    </div>
                    <div>
                        <label>Файлы:
                            
                        </label>
                        <input
                            type="file"
                            name="files"
                            onChange={handleFileChange}
                            multiple
                            accept=".png .jpg .jpeg .STEP .STP .IGES .IGS .SLDPRT .3DM .SAT .X_T .stl .obj .amf .ply .3mf .wrl .fbx .x3d .zip"
                        
                        />
                        {isUploading && <span className="loading-spinner"></span>}
                        {fileNames.length > 0 && (
                            <div className="file-list">
                                <h5>Добавленные файлы ({fileNames.length}):</h5>
                                <ul>
                                    {fileNames.map((fileName, index) => (
                                        <li key={index}>{fileName}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='d-btn' style={{ width: 'fit-content' }}>
                        <button type="submit" disabled={isSending}>
                            {isSending ? 'Отправка...' : 'ОТПРАВИТЬ'}
                            {isSending && <span className="loading-spinner"></span>}
                        </button>
                    </div>
                </form>
                <h5>Отправляя форму, Вы соглашаетесь на обработку <Link href='/personal' onClick={() => window.scrollTo(0, 0)}><span className='blue'>персональных данных.</span></Link></h5>
        </div> 
        </>
    )

}
export default FormApplication