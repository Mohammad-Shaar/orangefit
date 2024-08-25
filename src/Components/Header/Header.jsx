import Nav from "./Nav";
import Device from "../../assets/Device.png";
import LinkBtn from "../../UI/LinkBtn";

const Header = () => {
  return (
    <header className="bg-orange-600">
      <Nav />
      <div className="container mx-auto flex flex-col space-y-10 items-center p-6 justify-between md:flex-row md:space-x-6">
        <div className="flex flex-col items-center space-y-6 md:items-start">
          <p className="text-4xl font-bold text-gray-50">
            Reach your dream body
          </p>
          <p className="text-3xl text-gray-50">with Dr.Michel Adib</p>
          <p className="text-gray-50">
            Orangefit was made, because you deserve the best.
          </p>
          <div className="flex flex-col justify-between space-y-4 md:space-x-5 md:flex-row">
            <LinkBtn path="#">start today</LinkBtn>
            <LinkBtn path="#">download app</LinkBtn>
          </div>
        </div>
        <div className="max-w-52">
          <img src={Device} />
        </div>
      </div>
    </header>
  );
};

export default Header;
