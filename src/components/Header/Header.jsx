import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar md:w-9/12 mx-auto py-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52 gap-4 ">
              <Link to='/'><li>Home</li></Link>
              <Link to='/blog'><li>Blog</li></Link>
              <Link to='appliedJobs'><li>Applied Jobs</li></Link>
              <Link to='/statistics'><li>Statistics</li></Link>
            </ul>
          </div>
          <Link 
          to='/'
          aria-label='CareerFinder'
          title="CareerFinder">
          <p className=" md:text-4xl text-lg font-bold text-purple-600 cursor-pointer">Career Finder</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7 font-bold text-xl">
            <Link to='/'><li>Home</li></Link>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/appliedJobs'><li>Applied Jobs</li></Link>
            <Link to='/statistics'><li>Statistics</li></Link>
          </ul>
        </div>
        <div className="navbar-end">
          <button className=" bg-purple-600 hover:bg-green-600 hover:text-black text-white md:p-3 p-1 font-semibold rounded">Start Applying</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
