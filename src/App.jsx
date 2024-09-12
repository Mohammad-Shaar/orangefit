import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([{ path: "orangefit", element: <Home /> }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// import { useTranslation } from "react-i18next";

// function App() {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="bg-white p-36">
//       <h1>{t("welcome")}</h1>
//       <p>{t("description")}</p>
//       <button onClick={() => changeLanguage("ar")}>Arabic</button>
//       <button onClick={() => changeLanguage("en")}>English</button>
//     </div>
//   );
// }

// export default App;
