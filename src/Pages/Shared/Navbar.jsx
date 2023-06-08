import { Link, NavLink } from "react-router-dom";

const Navbar = ({ loggedIn, userProfilePicture }) => {
  const options = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <Link to="/instructors" className="hover:text-primary transition-colors duration-300">Instructors</Link>
      </li>
      <li>
        <Link to="/classes" className="hover:text-primary transition-colors duration-300">Classes</Link>
      </li>
      {loggedIn && (
        <>
          <li>
            <Link to="/dashboard" className="hover:text-primary transition-colors duration-300">Dashboard</Link>
          </li>
          <li>
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img src={userProfilePicture} />
              </div>
            </div>
          </li>
        </>
      )}
      
    </>
  );

  return (
    <nav className="navbar bg-white md:fixed sticky z-10 bg-opacity-[0.4] container rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content text-white mt-3 p-2 shadow  bg-[#111827] rounded-box w-52"
          >
            {options}
          </ul>
        </div>
        <Link
          to="/"
          className="lg:text-3xl font-raleway text-primary font-black"
        >
          SportifyCamp
          
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black font-semibold">
          {options}
        </ul>
      </div>
      <div className="navbar-end">
        {!loggedIn && (
          <Link to={"/login"} className="btn btn-primary normal-case btn-sm hover:bg-primary transition-colors duration-300">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
