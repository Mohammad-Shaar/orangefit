import Nav from "./Nav";
import Device from "../../assets/Device.png";
import LinkBtn from "../../UI/LinkBtn";

const Header = () => {
  return (
    <header className="bg-orange-600 relative overflow-x-clip">
      <Nav />
      <div className="container mx-auto flex flex-col space-y-10 items-center p-6 justify-between md:flex-row md:space-x-6">
        <div className="flex flex-col items-center space-y-6 md:items-start max-w-[60%]">
          <p className="text-6xl font-bold text-gray-50 leading-[90px]">
            Reach your dream body
            <span className="font-normal"> with Dr.Michel Adib</span>
          </p>
          <p className="font-bold text-xl text-gray-50">
            Orangefit was made, because you deserve the best.
          </p>
          <div className="flex space-x-10 pt-10 z-30">
            <LinkBtn path="#">start today</LinkBtn>
            <LinkBtn path="#">download app</LinkBtn>
          </div>
        </div>
        <div className="max-w-[24%] z-10">
          <img src={Device} />
        </div>
      </div>
      <div
        className="absolute h-32 bg-zinc-900 w-full bottom-0 before:block before:z-10 before:absolute before:rounded-custom before:w-[75%] before:h-[150%] before:bg-orange-600 before:transform before:translate-x-[-10%] before:translate-y-[-60%]
                                                    after:block after:absolute after:rounded-custom after:w-[50%] after:h-4/5 after:bg-zinc-900 after:transform after:translate-x-[115%] after:translate-y-[-28%] after:-rotate-[4deg]"
      ></div>
    </header>
  );
};

export default Header;
