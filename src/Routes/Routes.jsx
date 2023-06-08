import {
    createBrowserRouter
  
  } from "react-router-dom";
import App from "../App";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
  ]);

  export default router;