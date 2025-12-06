import ContactBlock from "../../../../components/ContactsForm/ContactsForm";
import VacancyComponent from "../../../../components/Vacancy/Vacancy";

import Link from "next/link";

export const metadata = {
  title: "Откликнуться на вакансию",
  alternates: {
    canonical: "https://tvoy3d.ru/vacancy-form",
  },
};

function VacancyForm() {
  return (
    <>
      <div className="contactform">
        <h3>Чтобы откликнуться на вакансию, свяжитесь с нами</h3>
        {/* <p>Вскоре на указанную вами почту придет ответ</p> */}
        <VacancyComponent />
        <ContactBlock />
      </div>
    </>
  );
}

export default VacancyForm;
