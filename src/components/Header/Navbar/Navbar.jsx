import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";
import useAuth from "../../../hooks/useAuth";
import userImg from "../../../assets/images/user.png";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
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

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign Out successful.");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

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
          <ul className="navLinks flex  items-center gap-6">{navLinks}</ul>
        </div>
        {user ? (
          <div className="flex gap-4 items-center">
            <h3 className="font-medium hidden lg:block">{user?.displayName}</h3>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL ? user.photoURL : userImg} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <h3 className="font-medium py-2 text-center lg:hidden">
                  {user?.displayName}
                </h3>
                <button
                  onClick={handleSignOut}
                  className="bg-[#008FD4] hover:bg-[#0870A1] btn-sm text-white rounded-md duration-300"
                >
                  Sign Out
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <Link to={"signIn"} className="">
            <button className="bg-[#008FD4] hover:bg-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
