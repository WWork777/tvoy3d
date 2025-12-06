'use client';
import React, { useState } from 'react';

export default function Form() {
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        message: ''
    });
    const [files, setFiles] = useState([]);
    const [fileNames, setFileNames] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        setFileNames(selectedFiles.map(file => file.name));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        ym(97987441,'reachGoal','Formfile')
        setIsSending(true);

        const formDataToSend = new FormData();
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('message', formData.message);

        files.forEach((file) => {
            formDataToSend.append('file', file); // ✅ Формат "file", как ожидает сервер
        });

        try {
            const response = await fetch('/api/sendEmailJs', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                alert('Файл(ы) и сообщение отправлены');
                setFormData({ phone: '', email: '', message: '' });
                setFiles([]);
                setFileNames([]);
            } else {
                alert('Ошибка при отправке');
            }
        } catch (error) {
            console.error(error);
            alert('Ошибка при отправке');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="inline-fields">
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Номер телефона" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Сообщение" required />
            </div>
            <div>
                <label>Файлы:</label>
                <input type="file" name="file" multiple onChange={handleFileChange} accept=".png, .jpg, .jpeg, .step, .stp, .iges, .igs, .sldprt, .3dm, .sat, .x_t, .stl, .obj, .amf, .ply, .3mf, .wrl, .fbx, .x3d, .zip, .scad, .3ds, .rar, .dwg, .blend" />
                {fileNames.length > 0 && (
                    <div className="file-list">
                        <h5>Добавленные файлы ({fileNames.length}):</h5>
                        <ul>{fileNames.map((fileName, index) => <li key={index}>{fileName}</li>)}</ul>
                    </div>
                )}
            </div>
            <div className='d-btn' style={{ width: 'fit-content' }}>
                <button type="submit" disabled={isSending}>{isSending ? 'Отправка...' : 'ОТПРАВИТЬ'}</button>
            </div>
        </form>
    );
}
