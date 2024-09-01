import { Link } from "react-router-dom";
import LinkBtn from "../../UI/LinkBtn";
import footerLogo from "../../assets/Footer-logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import email from "../../assets/email.svg";

const Footer = () => {
  return (
    <section>
      <div className="container flex justify-between mx-auto p-6 my-10 text-gray-50">
        <ul>
          <li>
            <img src={footerLogo} className="mb-8" />
          </li>
          <li>
            <LinkBtn path="#">start today</LinkBtn>
          </li>
        </ul>
        <ul>
          <li className="text-xl mb-8">About us</li>
          <li className="text-neutral-200">Terms & conditions</li>
        </ul>
        <ul>
          <li className="text-xl mb-8">Features</li>
          <li className="text-neutral-200">Privacy policy</li>
        </ul>
        <ul>
          <li className="text-xl mb-8">Food</li>
          <li className="text-neutral-200">Contact</li>
        </ul>
        <ul>
          <li className="text-xl mb-8">Reviews</li>
          <li className="text-neutral-200">Cookie policy</li>
        </ul>
        <ul>
          <li className="text-xl mb-8">Sign in</li>
          <li className="text-neutral-200">Support</li>
        </ul>
      </div>
      <hr className="white-radial" />
      <ul className="flex justify-center space-x-4 mb-16">
        <li>
          <Link to="#">
            <img src={facebook} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={instagram} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={youtube} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={email} />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
