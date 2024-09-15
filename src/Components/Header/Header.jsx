import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import Device from "../../assets/Device.png";
import LinkBtn from "../../UI/LinkBtn";

const Header = () => {
  const { t } = useTranslation();

  const { starterText, doctorName, quote, startBtn, downloadBtn } =
    t("headerSection");

  return (
    <header className="bg-[#FF6400] relative overflow-x-clip">
      <Nav />
      <div className="container mx-auto text-gray-50 flex flex-col space-y-10 items-center px-6 p-b-6 justify-between md:flex-row md:gap-x-10">
        <div className="flex flex-1 flex-col items-center space-y-6 md:items-start">
          <p className="font-bold text-4xl text-center leading-10 z-30 md:text-6xl md:text-start md:leading-[90px]">
            {starterText}
            <span className="font-normal"> {doctorName}</span>
          </p>
          <p className="leading-6 text-center z-30 md:text-xl md:font-bold md:text-left">
            {quote}
          </p>
          <div className="flex flex-1 flex-col gap-6 z-30 md:flex-row md:pt-10">
            <LinkBtn path="#">{startBtn}</LinkBtn>
            <LinkBtn path="#">{downloadBtn}</LinkBtn>
          </div>
        </div>
        <div className="pt-8 z-50">
          <img src={Device} />
        </div>
      </div>
      <div
        className="absolute h-1/2 md:h-32 bg-zinc-900 w-full bottom-[-1px] before:block before:z-10 before:absolute before:rounded-custom before:w-[75%] before:h-1/2 before:md:h-[150%] before:bg-[#FF6400] before:transform before:translate-x-[-10%] before:translate-y-[-60%]
                                                    after:block after:absolute after:rounded-custom after:w-[50%] after:h-1/5 after:md:h-4/5 after:bg-zinc-900 after:transform after:translate-x-[115%] after:translate-y-[-28%] after:-rotate-[4deg]"
      ></div>
    </header>
  );
};

export default Header;
