import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children:[
        {
            path: '/',
            element: <Home/>,
            loader: () => fetch('http://localhost:3000/chefData')
        }
      ]
    },
  ]);

  export default router