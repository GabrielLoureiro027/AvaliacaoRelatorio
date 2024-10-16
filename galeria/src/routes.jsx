import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Fotos from "./pages/Fotos/Index";
import Home from "./pages/Home";

// Array de links

export const router = createBrowserRouter([
{
    element:<Layout/>,
    children: [  {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Fotos",
        element: <Fotos/>,
      },]
}
]);
