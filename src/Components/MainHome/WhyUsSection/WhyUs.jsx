import { useTranslation, Trans } from "react-i18next";
import ph1 from "../../../assets/01.png";
import ph2 from "../../../assets/02.png";
import ph3 from "../../../assets/03.png";
import frame from "../../../assets/frame.svg";
import SlideImage from "./slideImage";

const WhyUs = () => {
  const { t, i18n } = useTranslation();

  const {
    heading,
    firstReason,
    firstParagraph,
    secondReason,
    secondParagraph,
    thirdreason,
    thirdParagraph,
  } = t("whyUsSection");

  const arActive = i18n.language === "ar";

  return (
    <section className="overflow-hidden">
      <div className="container mb-20 mx-auto p-6 py-10 text-gray-50">
        <h1 className="text-orange-600 text-3xl text-center my-16 md:text-4xl font-bold">
          {heading}
        </h1>
        <div className="flex flex-col justify-center items-center mt-10 md:flex-row-reverse md:gap-x-14 md:z-10">
          <div className="text-center mb-8 md:text-start md:mb-0 md:max-w-[35%]">
            <span className="font-bold text-5xl text-orange-600 md:text-7xl">
              1
            </span>
            <h2 className="font-bold text-3xl leading-10 my-5 md:text-4xl md:leading-[50px] md:my-8">
              <Trans i18nKey={firstReason} />
            </h2>
            <p className="text-lg leading-7 md:text-2xl md:leading-10">
              {firstParagraph}
            </p>
          </div>
          <SlideImage
            photo={ph1}
            frame={frame}
            animateClass={`${
              arActive ? "animate-slideInRight" : "animate-slideInLeft"
            }`}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-24 md:flex-row md:gap-x-14 md:-mt-12 md:z-20">
          <div className="text-center mb-8 md:text-end md:mb-0 md:max-w-[34%]">
            <span className="font-bold text-5xl text-orange-600 md:text-7xl">
              2
            </span>
            <h2 className="font-bold text-3xl leading-10 my-5 md:text-4xl md:leading-[50px] md:my-8">
              {secondReason}
            </h2>
            <p className="text-lg leading-7 md:text-2xl md:leading-10">
              {secondParagraph}
            </p>
          </div>
          <SlideImage
            photo={ph2}
            frame={frame}
            animateClass={`${
              arActive ? "animate-slideInLeft" : "animate-slideInRight"
            }`}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-24 md:flex-row-reverse md:gap-x-14 md:-mt-12 md:z-30">
          <div className="text-center mb-8 md:text-start md:mb-0 md:max-w-[35%]">
            <span className="font-bold text-5xl text-orange-600 md:text-7xl">
              3
            </span>
            <h2 className="font-bold text-3xl leading-10 my-5 md:text-4xl md:leading-[50px] md:my-8">
              {thirdreason}
            </h2>
            <p className="text-lg leading-7 md:text-2xl md:leading-10">
              {thirdParagraph}
            </p>
          </div>
          <SlideImage
            photo={ph3}
            frame={frame}
            animateClass={`${
              arActive ? "animate-slideInRight" : "animate-slideInLeft"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
