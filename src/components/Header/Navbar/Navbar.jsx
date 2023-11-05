import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-[#008FD4]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/add-job"}
          className={({ isActive }) => (isActive ? "text-[#008FD4]" : "")}
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/my-post-job"}
          className={({ isActive }) => (isActive ? "text-[#008FD4]" : "")}
        >
          My Post Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/my-bids"}
          className={({ isActive }) => (isActive ? "text-[#008FD4]" : "")}
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/bid-requests"}
          className={({ isActive }) => (isActive ? "text-[#008FD4]" : "")}
        >
          Bid Requests
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 py-4">
      <div className="w-full flex justify-between items-center  bg-base-100">
        <div className="flex items-center ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="navLinks flex flex-col gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex gap-1 items-end">
            <img src={logo} alt="" className="w-8 lg:w-10" />
            <h2 className="text-base md:text-xl font-bold">
              <span className="text-xl md:text-2xl  text-[#008FD4] ">Job.</span>
              Junction
            </h2>
          </div>
        </div>
        <div className=" hidden lg:flex">
          <ul className="navLinks flex  items-center gap-5">{navLinks}</ul>
        </div>
        <Link to={"signIn"} className="">
          <button className="bg-[#008FD4] hover:bg-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
