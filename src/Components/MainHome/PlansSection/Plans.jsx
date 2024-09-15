import { useTranslation } from "react-i18next";
import SinglePlan from "./SinglePlan";

const Plans = () => {
  const { t, i18n } = useTranslation();

  const { heading, plansData, SubscribeBtn } = t("plansSection");

  const arActive = i18n.language === "ar";

  return (
    <section className="hidden md:block">
      <div className="container mx-auto p-6 my-10 text-gray-50">
        <h1 className="text-center text-4xl my-16 font-bold leading-[55px]">
          {heading}
        </h1>
        <div className="flex justify-between items-center">
          {plansData.map((item, index) => (
            <SinglePlan
              key={index}
              type={item.type}
              price={item.price}
              popular={item.popular}
              Subscribe={SubscribeBtn}
            />
          ))}
        </div>
        <hr className="orange-radial" />
      </div>
    </section>
  );
};

export default Plans;
