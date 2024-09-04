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
      <div className="container mx-auto p-6 my-10 text-gray-50">
        <div className="relative flex flex-col justify-between md:flex-row">
          <ul>
            <li className="relative -left-3">
              <img src={footerLogo} className="mb-8" />
            </li>
            <li className="hidden md:list-item">
              <LinkBtn path="#">start today</LinkBtn>
            </li>
          </ul>
          <ul className="grid grid-cols-2 gap-y-4 md:justify-items-center md:items-end md:grid-cols-5 md:gap-x-4 md:gap-y-0">
            <li className="text-xl md:text-xl">About us</li>
            <li className="text-xl md:text-xl">Resources</li>
            <li className="text-neutral-200 md:text-xl md:text-gray-50">
              Features
            </li>
            <li className="text-neutral-200 md:text-xl md:text-gray-50">
              Privacy policy
            </li>
            <li className="text-neutral-200 md:text-xl md:text-gray-50">
              Food
            </li>
            <li className="text-neutral-200">Contact</li>
            <li className="text-neutral-200">Reviews</li>
            <li className="text-neutral-200">Cookie policy</li>
            <li className="text-neutral-200">Sign in</li>
            <li className="text-neutral-200">Support</li>
          </ul>
        </div>
        <hr className="white-radial" />
        <ul className="flex justify-center space-x-4">
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
      </div>
    </section>
  );
};

export default Footer;
