import {
    createBrowserRouter
  
  } from "react-router-dom";
import App from "../App";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from "../Pages/Dashboard/User/SelectedClass";
import Payment from "../Pages/Dashboard/User/Payment";
import PaymentPage from "../Pages/Dashboard/User/PaymentPage/PaymentPage";
// import Dashboard from "../Layout/Dashboard";
// import MyClasses from "../Pages/Dashboard/User/MyClasses";
// import MyPayment from "../Pages/Dashboard/User/MyPayment";
// import Dashboard from "../Pages/Dashboard/Dashboard";

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
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
     children:[
      {
        path:'/dashboard',
        element:<SelectedClass></SelectedClass>
      },
      {
        path:'/dashboard/payments/:id',
        element:<Payment></Payment>
      },
      {
        path:'/dashboard/paymentpage',
        element:<PaymentPage></PaymentPage>
      }
     ]
      
    }
  ]);

  export default router;