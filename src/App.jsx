import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([{ path: "orangefit", element: <Home /> }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
