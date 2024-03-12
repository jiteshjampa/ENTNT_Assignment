import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-center items-center ">
      <div className="border-4 w-full   md:w-4/5 border-t-0 rounded-full m-6 bg-transparent sm:bg-white  ">
        {/* Hamburger menu button for small screens */}
        <div className="md:hidden flex justify-end mr-4">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Default navigation for large screens and hidden for small screens */}
        <ul
          className={`${
            showMenu ? "block" : "hidden md:flex"
          } items-center font-medium flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 md:justify-evenly py-7 font-sans  p:text-start  `}
        >
          <li className="hover:underline hover:decoration-4 p:hover:border-2 p:hover:border-slate-400 p:w-full p:p-3 p:bg-white">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="hover:underline hover:decoration-4 p:hover:border-2 p:hover:border-slate-400 p:w-full p:p-3 p:bg-white">
            <Link to="/Orders">Orders</Link>
          </li>
          <li className="hover:underline hover:decoration-4 p:hover:border-2 p:hover:border-slate-400 p:w-full p:p-3 p:bg-white">
            <Link to="/Products">Products</Link>
          </li>
          <li className="hover:underline hover:decoration-4 p:hover:border-2 p:hover:border-slate-400 p:w-full p:p-3 p:bg-white">
            <Link to="/OrdersCalenderView">Order Calendar View</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
