import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe/ChefRecipe";
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage'
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blog/Blogs/Blogs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children:[
        {
            path: '/',
            element: <Home/>,
            loader: () => fetch('https://chef-catalog-server.vercel.app/chefData')
        },
        {
          path: '/blogs',
          element: <Blogs/>,
          loader: () => fetch('https://chef-catalog-server.vercel.app/blogs')
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
            loader: ({params}) => fetch(`https://chef-catalog-server.vercel.app/recipes/${params.id}`)
        },
      ]
    },
  ]);

  export default router