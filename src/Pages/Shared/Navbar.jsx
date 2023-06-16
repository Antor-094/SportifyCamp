import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = ({ loggedIn, userProfilePicture }) => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };

  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const options = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary font-bold" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          // className="hover:text-primary transition-colors duration-300"
          className={({ isActive }) => (isActive ? "text-primary font-bold hover:text-primary transition-colors duration-300" : "")}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          // className="hover:text-primary transition-colors duration-300"
          className={({ isActive }) => (isActive ? "text-primary font-bold hover:text-primary transition-colors duration-300" : "")}
        >
          Classes
        </NavLink>
      </li>
      {loggedIn && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "text-primary font-bold" : "")}
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar bg-white sticky z-10 bg-opacity-[0.7] container rounded-md">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
            {dropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
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
            )}
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content text-white mt-3 p-2 shadow bg-[#111827] rounded-box w-52 ${
              dropdownOpen ? "block" : "hidden"
            }`}
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
        {loggedIn || location.pathname === "/dashboard" ? (
          <>
            <div className="avatar mr-3 tooltip tooltip-left" data-tip={loggedIn.displayName}>
              <div className="w-9 rounded-full">
                <img src={userProfilePicture} alt="User Profile" />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-primary normal-case btn-sm hover:bg-primary transition-colors duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary normal-case btn-sm hover:bg-primary transition-colors duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
