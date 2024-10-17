import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home";
import Galeria from "./pages/DetalhesFotos/Index";

// Array de links
//Transformando o Layout em um coponente pai 
//e o Home e a Galeria em componente filho

export const router = createBrowserRouter([
{
    element:<Layout/>,
    children: [  {
      //No path: é aonde definimos como vai ser o caminho utilizado
        path: "/",
        element: <Home/>,
      },
      {
        //No path: é aonde definimos como vai ser o caminho utilizado
        path: "/Galeria",
        element: <Galeria/>,
      },
      {

      },]
}
]);
