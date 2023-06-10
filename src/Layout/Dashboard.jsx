// import useAuth from "../Hooks/useAuth";
// import Navbar from "../Pages/Shared/Navbar";

import { Link, NavLink, Outlet } from "react-router-dom";
// import SelectedClass from "../Pages/Dashboard/User/SelectedClass";

const Dashboard = () => {
  // const {user}= useAuth()
  return (
    <>
      {/* <div className="mx-auto container">
        <Navbar
          loggedIn={user}
          userProfilePicture={
            user?.photoURL
          }
        />
      </div> */}

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {/* <SelectedClass></SelectedClass> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#555273] text-white font-semibold">
            {/* Sidebar content here */}
            <h2 className="text-center">DashBoard</h2>
            <div className="divider"></div>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
                to="/dashboard"
              >
                Selected Class
              </NavLink>
            </li>
          
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <div className="divider"></div>
            <li>
                
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
