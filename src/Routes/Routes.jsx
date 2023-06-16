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
// import PaymentPage from "../Pages/Dashboard/User/PaymentPage/PaymentPage";

import MyEnrollClasses from "../Pages/Dashboard/User/MyEnrollClasses";
import PaymentHistory from "../Pages/Dashboard/User/PaymentPage/PaymentHistory";

import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";


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
        },
        {
            path:'/classes',
            element:<Classes></Classes>
        },
        {
            path:'/instructors',
            element:<Instructors></Instructors>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
     children:[
      {
        path:'/dashboard/selectedclasses',
        element:<SelectedClass></SelectedClass>
      },
      {
        path:'/dashboard/payments/:id',
        element:<Payment></Payment>
      },
     
      {
        path:'/dashboard/enrollclasses',
        element:<MyEnrollClasses></MyEnrollClasses>
      },
      {
        path:'/dashboard/paymenthistory',
        element:<PaymentHistory></PaymentHistory>
      },
      //---admin
      {
        path:'/dashboard/manageusers',
        element:<AdminRoute>
          <ManageUsers></ManageUsers>
        </AdminRoute>
      },
      {
        path:'/dashboard/manageclasses',
        element:<AdminRoute>
          <ManageClasses></ManageClasses>
        </AdminRoute>
      },
      //instructor route
      {
        path:'/dashboard/myclasses',
        element:<InstructorRoute>
          <MyClasses></MyClasses>
        </InstructorRoute>
      },
      {
        path:'/dashboard/addclass',
        element:<InstructorRoute>
          <AddClass></AddClass>
        </InstructorRoute>
      },
     ]
      
    }
  ]);

  export default router;