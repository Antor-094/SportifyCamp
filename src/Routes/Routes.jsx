import {
    createBrowserRouter
  
  } from "react-router-dom";
import App from "../App";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App></App>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;