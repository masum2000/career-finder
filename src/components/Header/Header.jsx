import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div>
      <div className="navbar w-9/12 mx-auto py-5 ">
        <div className="navbar-start">
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
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-4 ">
              <Link to='/'><li>Home</li></Link>
              <Link to='/blog'><li>Blog</li></Link>
              <Link to='/appliedjob'><li>Applied Jobs</li></Link>
              <Link to='/statistics'><li>Statistics</li></Link>
            </ul>
          </div>
          <Link 
          to='/'
          aria-label='CareerFinder'
          title="CareerFinder">
          <a className="text-xl md:text-3xl font-bold text-indigo-500 cursor-pointer">Career Finder</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7 font-bold text-xl">
            <Link to='/'><li>Home</li></Link>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/appliedjob'><li>Applied Jobs</li></Link>
            <Link to='/statistics'><li>Statistics</li></Link>
          </ul>
        </div>
        <div className="navbar-end">
          <button className=" bg-indigo-500 text-white p-3 rounded-md">Start Applying</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
