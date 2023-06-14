// import useAuth from "../Hooks/useAuth";
// import Navbar from "../Pages/Shared/Navbar";

import { FaCalculator, FaCashRegister } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
// import useAuth from "../Hooks/useAuth";
// import SelectedClass from "../Pages/Dashboard/User/SelectedClass";

const Dashboard = () => {
  // const {user}= useAuth()
  // const isAdmin = true
  const [isAdmin] = useAdmin()
  const [isInstructor]=useInstructor()
  // const {setLoading}=useAuth()
  // const isInstructor=false
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
        <div className="drawer-content flex flex-col items-center bg-[#111827]">
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
            {
              isAdmin ? <>
              
              
              <li>
              <NavLink
              end
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
                to="/dashboard/manageusers"
              >
                Manage Users
              </NavLink>
            </li>
          
            <li>
              <NavLink
              className={({ isActive }) =>
              isActive ? "text-primary font-bold" : ""
            }
            to="/dashboard/manageclasses"
              >Manage Classes</NavLink>
            </li>
            
              
              
              </> : isInstructor? 
              
              <>
              
              
              
              <li>
              <NavLink
              end
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
                to="/dashboard/myclasses"
              >
               <FaCalculator></FaCalculator> My Classes
              </NavLink>
            </li>
          
            <li>
              <NavLink
              className={({ isActive }) =>
              isActive ? "text-primary font-bold" : ""
            }
            to="/dashboard/addclass"
              ><FaCashRegister></FaCashRegister>Add a Class</NavLink>
            </li>
            
              
              
              
              </> :
              
              
              
              
              <>
              
              <li>
                
              <NavLink
              end
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
                to="/dashboard/selectedclasses"
              >
                Selected Class
              </NavLink>
            </li>
          
            <li>
              <NavLink
              className={({ isActive }) =>
              isActive ? "text-primary font-bold" : ""
            }
            to="/dashboard/enrollclasses"
              ><FaCashRegister></FaCashRegister>Enroll classes</NavLink>
            </li>
            <li>
              <NavLink
              className={({ isActive }) =>
              isActive ? "text-primary font-bold" : ""
            }
            to="/dashboard/paymenthistory"
              ><FaCashRegister></FaCashRegister>Payment history</NavLink>
            </li>
              
              </>
            }
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
