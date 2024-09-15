import { useInView } from "react-intersection-observer";
import LinkBtn from "../../../UI/LinkBtn";
import ExpertImge from "./ExpertImge";

const Expert = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
  });

  const { t, i18n } = useTranslation();

  const {
    heading,
    subHeading,
    articleTitle,
    goal,
    articleParagraph,
    articleFooter,
  } = t("expertSection");

  const arActive = i18n.language === "ar";

  return (
    <section
      id="expert"
      className="bg-cover bg-center min-h-[1200px] my-8 overflow-hidden"
    >
      <div className="container flex flex-col-reverse justify-between md:items-center mx-auto p-6 text-gray-50 py-[18%] md:flex-row">
        <div className="flex flex-col md:max-w-[50%]">
          <div className="relative hidden md:block">
            <div
              className={`absolute w-[540px] h-[188px] bg-[#FFA451] z-10-top-[10%] ${"right-[40%] rounded-r-[20px]"}`}
            ></div>
            <p className="relative font-bold text-4xl z-40">Meet our expert</p>
            <p className="relative font-bold text-[70px] mt-4 z-40">
              Dr.MICHEL ADIB
            </p>
          </div>
          <p className="font-bold text-2xl mt-20 mb-6">My Philosophy</p>
          <div ref={ref} className={`${inView ? "animate-slideInTop" : ""}`}>
            <p className="font-bold text-[27px] leading-[32px] mb-6">
              “My goal is to let everybody get the healthy life they deserve ,
              no matter where they are from or how much money they have”
            </p>
            <p className="leading-[27px] text-xl">
              I know how much you suffered ,
              <br /> I know how many diets you tried,
              <br /> to reach the body you deserve and failed,
              <br /> The problem is not you,
              <br /> The problem is the boring food , hunger in the diets you
              chose.
              <br />
              <span className="font-semibold text-xl">
                Orangefit is the solution .
              </span>
            </p>
            <p className="mt-4 text-base text-[#F6FFF8B2]">
              Michel Adib , Founder of orangefit.
            </p>
          </div>
          <div className="mx-auto mt-6">
            <LinkBtn path={"#"}>start today</LinkBtn>
          </div>
        </div>
        <ExpertImge />
        <div className="relative mb-32 mt-16 md:hidden">
          <div className="absolute w-[240px] h-[100px] rounded-r-[20px] bg-[#FFA451] -top-[10%] right-[51%] z-10"></div>
          <p className="relative font-bold text-xl md:text-4xl z-20">
            Meet our expert
          </p>
          <p className="relative font-bold text-4xl md:text-7xl mt-4 z-20">
            Dr.MICHEL ADIB
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expert;
