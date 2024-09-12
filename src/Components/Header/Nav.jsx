import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/Header-logo.svg";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="container mx-auto flex justify-between items-center px-6 pt-14 pb-8 md:p-6 md:pb-3">
      <div className="max-w-36">
        <Link to="#">
          <img src={logo} />
        </Link>
      </div>
      <div>
        <button onClick={() => changeLanguage("ar")}>Arabic</button>
        <button onClick={() => changeLanguage("en")}>English</button>
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
      </div>
    </nav>
  );
};

export default Nav;
