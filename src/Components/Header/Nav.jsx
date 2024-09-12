import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/Header-logo.svg";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className="container mx-auto flex justify-between items-center px-6 pt-14 pb-8 md:p-6 md:pb-3">
      <div className="max-w-36">
        <Link to="#">
          <img src={logo} />
        </Link>
      </div>
      <div>
        <p>{t("WelcomeMessage")}</p>
        <button
          className="m-3 py-3 px-5 rounded-xl bg-slate-300"
          onClick={() => {}}
        >
          Arabic
        </button>
      </div>
    </nav>
  );
};

export default Nav;
