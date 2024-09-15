import { useTranslation } from "react-i18next";
import vector from "../../../assets/Vector.svg";
import QuestionAndAnswer from "./QuestionAndAnswer";

const Questions = () => {
  const { t, i18n } = useTranslation();

  const { heading, followUs, emailBtn, questionData, enterdEmail } =
    t("questionSection");

  const arActive = i18n.language === "ar";

  return (
    <section className="mt-32">
      <div className="container flex flex-col-reverse gap-20 justify-between items-start mx-auto p-6 my-10 text-gray-50 md:flex-row">
        <div className="flex flex-col w-full md:w-[50%]">
          <p className="font-bold text-4xl text-center -tracking-[1px] mt-8 mb-12 md:hidden">
            Q&A
          </p>
          {questionData.map((item, index) => (
            <QuestionAndAnswer
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
          <div
            className={`flex ${arActive && "flex-row-reverse"} gap-1 md:hidden`}
          >
            <p className="font-bold text-xl text-orange-600 underline">
              More FAQ
            </p>
            <img src={vector} />
          </div>
        </div>
        <div className="flex flex-col md:max-w-[34%]">
          <h1 className="font-bold text-4xl text-center leading-[52px] mb-8 md:text-start">
            {heading}
          </h1>
          <p className="font-bold leading-9 text-[#F6FFF8] opacity-75 md:text-xl">
            {followUs}
          </p>
          <form className="mt-8">
            <div className="flex justify-center flex-wrap gap-2 md:block">
              <input
                type="email"
                name="email"
                placeholder={enterdEmail}
                className={`font-bold text-zinc-900 md:max-w-[70%] py-4 px-5 rounded-[37px] border-none outline-none md:mb-2 ${
                  arActive ? "md:ml-2" : "md:mr-2"
                }`}
              />
              <button className="font-bold bg-orange-500 py-4 px-5 rounded-[70px]">
                {emailBtn}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Questions;
