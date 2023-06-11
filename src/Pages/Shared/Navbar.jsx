import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ loggedIn, userProfilePicture }) => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };

  const location = useLocation();

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
        <Link
          to="/instructors"
          className="hover:text-primary transition-colors duration-300"
        >
          Instructors
        </Link>
      </li>
      <li>
        <Link
          to="/classes"
          className="hover:text-primary transition-colors duration-300"
        >
          Classes
        </Link>
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

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrolledUp = prevScrollPos.current > currentScrollPos;

    setIsNavbarVisible(isScrolledUp || currentScrollPos === 0);
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        transition: "transform 0.3s ease-in-out",
        transform: isNavbarVisible ? "translateY(0)" : "translateY(-100%)",
      }}
      className="navbar bg-white md:fixed sticky z-10 bg-opacity-[0.7] container rounded-md"
    >
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
            className="menu menu-compact dropdown-content text-white mt-3 p-2 shadow bg-[#111827] rounded-box w-52"
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
