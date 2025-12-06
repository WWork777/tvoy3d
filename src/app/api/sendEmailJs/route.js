import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

// Папка для загрузки файлов
const UPLOAD_DIR = path.join(process.cwd(), 'public/uploads');

export async function POST(req) {
    try {
        // ✅ Создаем папку, если её нет
        await fs.mkdir(UPLOAD_DIR, { recursive: true });

        // ✅ Читаем сырые данные запроса и создаем FormData
        const formDataRaw = await req.formData();
        const formData = new Map(); // Объект для хранения данных

        const uploadedFiles = [];

        // ✅ Обрабатываем все поля формы (включая файлы)
        for (const [key, value] of formDataRaw.entries()) {
            if (value instanceof Blob) {
                // Это файл
                const fileName = `file_${Date.now()}_${value.name}`;
                const filePath = path.join(UPLOAD_DIR, fileName);
                const buffer = Buffer.from(await value.arrayBuffer());

                await fs.writeFile(filePath, buffer);
                uploadedFiles.push({ filename: fileName, path: filePath });
            } else {
                // Это текстовое поле
                formData.set(key, value);
            }
        }

        // ✅ Достаем текстовые данные
        const phone = formData.get('phone') || 'Не указан';
        const email = formData.get('email') || 'Не указан';
        const message = formData.get('message') || 'Пустое сообщение';

        // 📩 Отправка email через nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'Tvoy-3d@yandex.ru',
                pass: 'ahbuagnjvufbmjde',
            },
        });

        const mailOptions = {
            from: 'Tvoy-3d@yandex.ru',
            to: 'Tvoy-3d@yandex.ru',
            subject: 'Файл для печати',
            text: `Пользователь отправил файл.\n\n📩 Email: ${email}\n📞 Телефон: ${phone}\n📝 Сообщение: ${message}`,
            attachments: uploadedFiles.map((file) => ({
                filename: file.filename,
                path: file.path,
            })),
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Файлы и данные загружены, email отправлен', fileUrls: uploadedFiles.map(f => `/uploads/${f.filename}`) }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Ошибка обработки запроса', error: error.message }, { status: 500 });
    }
}
