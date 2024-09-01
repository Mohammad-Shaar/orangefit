import { Link } from "react-router-dom";
import logo from "../../assets/Header-logo.svg";
import userIcon from "../../assets/user-icon.svg";

const Nav = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center p-6">
      <div className="max-w-36">
        <Link to="#">
          <img src={logo} />
        </Link>
      </div>
      <div>
        <Link>
          <img src={userIcon} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
