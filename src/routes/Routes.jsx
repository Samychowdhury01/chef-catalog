import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children:[
        {
            path: '/login'
        }
      ]
    },
  ]);

  export default router