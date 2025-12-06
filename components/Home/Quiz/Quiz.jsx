"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Quiz.scss"; // Подключаем стили
import Link from "next/link";
//import img from "next/image";

function Quiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  });
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswerChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (
      (step === 1 && answers.q1) ||
      (step === 2 && answers.q2) ||
      (step === 3 && answers.q3) ||
      (step === 4 && answers.q4)
    ) {
      setStep(step + 1);
    } else {
      alert("Пожалуйста, выберите ответ перед продолжением!");
    }
  };

  const handlePrewStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ym(97987441, "reachGoal", "Qwiz");
    setIsLoading(true);

    const templateParams = {
      name: contactInfo.name,
      email: contactInfo.email,
      phone: contactInfo.phone,
      answer1: answers.q1,
      answer2: answers.q2,
      answer3: answers.q3,
      answer4: answers.q4,
    };

    try {
      const result = await emailjs.send(
        "service_bsdkvo8",
        "template_6d09c3g",
        templateParams,
        "DNU-24OPbIXA2KBMk"
      );
      console.log(result.text);
      alert(
        "Данные успешно отправлены! Вскоре на указанную почту придет ответ."
      );
      setStep(1);
      setAnswers({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
      });
      setContactInfo({ name: "", phone: "", email: "" });
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка при отправке данных!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="quiz-container">
        <h2 className="quiz-title">
          Жмите по ответам, чтобы рассчитать цену (это бесплатно и интересно)
        </h2>
        {step !== 5 && (
          <h5
            className="quiz-step"
            style={{ textAlign: "center", marginBottom: "25px" }}
          >
            Вопрос {step}/4
          </h5>
        )}
        {step === 1 && (
          <div className="quiz-step">
            <h3 className="quiz-question">
              Каким материалом нужно напечатать?
            </h3>
            <div className="quiz-options">
              <label
                className={`quiz-option ${
                  answers.q1 === "Пластик" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="q1"
                  value="Пластик"
                  checked={answers.q1 === "Пластик"}
                  onChange={handleAnswerChange}
                />
                <img
                  src="/content/step-one-first.jpg"
                  className="quiz-image"
                ></img>
                <span className="image-label">Пластик</span>
              </label>
              <label
                className={`quiz-option ${
                  answers.q1 === "Фотополимер" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="q1"
                  value="Фотополимер"
                  checked={answers.q1 === "Фотополимер"}
                  onChange={handleAnswerChange}
                />
                <img
                  src="/content/step-one-second.jpg"
                  className="quiz-image"
                ></img>
                <span className="image-label">Фотополимер</span>
              </label>
              <label
                className={`quiz-option ${
                  answers.q1 === "Полиамид" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="q1"
                  value="Полиамид"
                  checked={answers.q1 === "Полиамид"}
                  onChange={handleAnswerChange}
                />
                <img
                  src="/content/step-one-three.jpg"
                  className="quiz-image"
                ></img>
                <span className="image-label">Полиамид</span>
              </label>
              <label
                className={`quiz-option ${
                  answers.q1 === "Синтез на подложке" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="q1"
                  value="Синтез на подложке"
                  checked={answers.q1 === "Синтез на подложке"}
                  onChange={handleAnswerChange}
                />
                <img
                  src="/content/step-one-four.jpg"
                  className="quiz-image"
                ></img>

                <span className="image-label">Нужна консультация</span>
              </label>
            </div>

            <div className="quiz-buttons">
              <button className="quiz-button left" style={{ disabled: "true" }}>
                Назад
              </button>
              <button className="quiz-button right" onClick={handleNextStep}>
                Далее
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="quiz-step">
            <h3 className="quiz-question">Нужна ли разработка 3D модели?</h3>
            <div className="quiz-options">
              <label
                className={`quiz-option ${
                  answers.q2 === "Да, нужна" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="q2"
                  value="Да, нужна"
                  checked={answers.q2 === "Да, нужна"}
                  onChange={handleAnswerChange}
                />
                <img
                  src="/content/step-two-first.jpg"
                  className="quiz-image"
                ></img>
                <span className="image-label">Да, нужна</span>
              </label>
              <label
                className={`quiz-option ${
                  answers.q2 === "Нет, у меня своя 3Д-модель" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="q2"
                  value="Нет, у меня своя 3Д-модель"
                  checked={answers.q2 === "Нет, у меня своя 3Д-модель"}
                  onChange={handleAnswerChange}
                />
                <img
                  src="/content/step-two-second.jpg"
                  className="quiz-image"
                ></img>
                <span className="image-label">Нет, у меня своя 3Д-модель</span>
              </label>
            </div>
            <div className="quiz-buttons">
              <button className="quiz-button left" onClick={handlePrewStep}>
                Назад
              </button>
              <button className="quiz-button right" onClick={handleNextStep}>
                Далее
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="quiz-step step-three">
            <h3 className="quiz-question">Сколько нужно напечатать изделий?</h3>
            <div className="quiz-options-three">
              <label className="quiz-option">
                <input
                  type="radio"
                  name="q3"
                  value="1-3 штуки"
                  checked={answers.q3 === "1-3 штуки"}
                  onChange={handleAnswerChange}
                />
                <span className="custom-radio"></span>
                1-3 штуки
              </label>
              <label className="quiz-option">
                <input
                  type="radio"
                  name="q3"
                  value="3-10 штук"
                  checked={answers.q3 === "3-10 штук"}
                  onChange={handleAnswerChange}
                />
                <span className="custom-radio"></span>
                3-10 штук
              </label>
              <label className="quiz-option">
                <input
                  type="radio"
                  name="q3"
                  value="10-100 штук"
                  checked={answers.q3 === "10-100 штук"}
                  onChange={handleAnswerChange}
                />
                <span className="custom-radio"></span>
                10-100 штук
              </label>
              <label className="quiz-option">
                <input
                  type="radio"
                  name="q3"
                  value="100-1000 штук"
                  checked={answers.q3 === "100-1000 штук"}
                  onChange={handleAnswerChange}
                />
                <span className="custom-radio"></span>
                100-1000 штук
              </label>
              <label className="quiz-option">
                <input
                  type="radio"
                  name="q3"
                  value="Более 1000 штук"
                  checked={answers.q3 === "Более 1000 штук"}
                  onChange={handleAnswerChange}
                />
                <span className="custom-radio"></span>
                Более 1000 штук
              </label>
            </div>

            <div className="quiz-buttons">
              <button className="quiz-button left" onClick={handlePrewStep}>
                Назад
              </button>
              <button className="quiz-button right" onClick={handleNextStep}>
                Далее
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="quiz-step">
            <h3 className="quiz-question">
              Какой вы хотели бы подарок, если наше предложение вам понравится?
            </h3>
            <div className="quiz-options">
              <label
                className={`quiz-option ${
                  answers.q4 === "Бесплатный тестовый образец" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="q4"
                  value="Бесплатный тестовый образец"
                  checked={answers.q4 === "Бесплатный тестовый образец"}
                  onChange={handleAnswerChange}
                />
                <img
                  src="/content/step-four-first.jpg"
                  className="quiz-image"
                ></img>
                <span className="image-label">Бесплатный тестовый образец</span>
              </label>
              <label
                className={`quiz-option ${
                  answers.q4 === "Скидку 10% на крупный заказ" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="q4"
                  value="Скидку 10% на крупный заказ"
                  checked={answers.q4 === "Скидку 10% на крупный заказ"}
                  onChange={handleAnswerChange}
                />
                <img
                  src="/content/step-four-second.jpg"
                  className="quiz-image"
                ></img>
                <span className="image-label">Скидку 10% на крупный заказ</span>
              </label>
            </div>
            <div className="quiz-buttons">
              <button className="quiz-button left" onClick={handlePrewStep}>
                Назад
              </button>
              <button className="quiz-button right" onClick={handleNextStep}>
                Далее
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="quiz-step five">
            <h3 className="quiz-question">
              Куда направить расчёт стоимости? Зафиксируем за вашим номером
              подарок и дополнительную скидку 5%
            </h3>
            <form onSubmit={handleSubmit} className="quiz-form">
              <label className="quiz-option">
                <input
                  type="text"
                  name="name"
                  value={contactInfo.name}
                  onChange={handleContactChange}
                  placeholder="Имя"
                  required
                />
              </label>
              <label className="quiz-option">
                <input
                  type="text"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleContactChange}
                  placeholder="Email (необязательно)"
                />
              </label>
              <label className="quiz-option">
                <input
                  type="phone"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleContactChange}
                  placeholder="Номер телефона"
                  required
                />
              </label>
              <label className="personal">
                {" "}
                Отправляя форму, Вы соглашаетесь на обработку{" "}
                <Link href="/personal" onClick={() => window.scrollTo(0, 0)}>
                  <span className="blue">персональных данных.</span>
                </Link>
              </label>
              <div className="quiz-buttons">
                <button className="quiz-button left" onClick={handlePrewStep}>
                  Назад
                </button>
                <button
                  className="quiz-button right"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Отправка..." : "Отправить"}
                  {isLoading && <span className="loading-spinner"></span>}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
