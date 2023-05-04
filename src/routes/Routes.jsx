import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe/ChefRecipe";
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage'
import PrivateRoute from "./PrivateRoute";

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
        },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/register',
            element: <Register/>,
        },
        {
            path: '/chefRecipe/:id',
            element: <PrivateRoute><ChefRecipe/></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`)
        },
      ]
    },
  ]);

  export default router