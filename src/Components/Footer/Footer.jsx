import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LinkBtn from "../../UI/LinkBtn";
import footerLogo from "../../assets/Footer-logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import email from "../../assets/email.svg";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const { startBtn, links } = t("footerSection");

  const arActive = i18n.language === "ar";

  return (
    <section>
      <div className="container mx-auto p-6 my-10 text-gray-50">
        <div className="relative flex flex-col justify-between md:flex-row">
          <ul>
            <li
              className={`flex ${arActive && "justify-end"} relative -left-3`}
            >
              <img src={footerLogo} className="mb-8" />
            </li>
            <li className="hidden md:list-item">
              <LinkBtn path="#">{startBtn}</LinkBtn>
            </li>
          </ul>
          <ul className="grid grid-cols-2 gap-y-4 footer-links md:justify-items-center md:items-end md:grid-cols-5 md:gap-x-4 md:gap-y-0">
            {links.map((item, index) => (
              <Link key={index} to={item.link}>
                {item.description}
              </Link>
            ))}
          </ul>
          <div className="mx-auto pt-6 md:hidden">
            <LinkBtn path="#">{startBtn}</LinkBtn>
          </div>
        </div>
        <hr className="white-radial" />
        <ul className="flex justify-center gap-x-4">
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
