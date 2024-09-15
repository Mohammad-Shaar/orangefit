import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/Header-logo.svg";
import { useEffect } from "react";

const Nav = () => {
  const { i18n } = useTranslation();

  const changeLanguageFun = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const arActive = i18n.language === "ar";

  return (
    <nav className="container mx-auto flex justify-between items-center px-6 pt-14 pb-8 md:p-6 md:pb-3">
      <div className="max-w-36">
        <Link to="#">
          <img src={logo} />
        </Link>
      </div>
      <div>
        {!arActive && (
          <button
            className="bg-gray-50 text-orange-600 rounded-3xl font-bold shadow-[-2px_3px_6px_0px_#00000040] uppercase px-12 py-2.5 md:text-lg md:py-2 md:px-12 hover:bg-gray-300"
            onClick={() => changeLanguageFun("ar")}
          >
            عربي
          </button>
        )}
        {arActive && (
          <button
            className="bg-gray-50 text-orange-600 rounded-3xl font-bold shadow-[-2px_3px_6px_0px_#00000040] uppercase px-12 py-2.5 md:text-lg md:py-2 md:px-12 hover:bg-gray-300"
            onClick={() => changeLanguageFun("en")}
          >
            English
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
