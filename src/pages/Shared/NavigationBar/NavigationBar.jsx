import React from "react";
import ActiveLink from "./ActiveLink";

const NavigationBar = () => {
  return (
    <div className="container mx-auto navbar bg-transparent py-10">
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="mr-2">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="mr-2">
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
          <li className="mr-2">
          <button className="btn-outline">Login</button>
          </li>
          </ul>
          
        </div>
        <p className="btn btn-ghost text-2xl">
          <span className="text-orange-500 mr-3">Chef's</span>
          <span> Catalog</span>
        </p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-2">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="mr-2">
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
        </ul>
         <button className="btn-outline">Login</button>
      </div>
    </div>
  );
};

export default NavigationBar;
