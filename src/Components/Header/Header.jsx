import Nav from "./Nav";
import Device from "../../assets/Device.png";
import LinkBtn from "../../UI/LinkBtn";

const Header = () => {
  return (
    <header className="bg-orange-600">
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
          <div className="flex space-x-10 pt-10">
            <LinkBtn path="#">start today</LinkBtn>
            <LinkBtn path="#">download app</LinkBtn>
          </div>
        </div>
        <div className="max-w-[24%]">
          <img src={Device} />
        </div>
      </div>
    </header>
  );
};

export default Header;
