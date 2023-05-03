import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ActiveLink from "./ActiveLink";

const NavigationBar = () => {
const {user, logOut} = useContext(AuthContext)


const handleLogout = () =>{
  logOut()
  .then(
    toast.success('Logout Successful')
  )
  .catch((error) =>{
    toast.error('something is wrong, Try again!')
  })
}

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
          <div className="tooltip" data-tip={`${user?.displayName || ''}`}>
         <div className="bg-red-500">
         {
          user && <img src={user?.photoURL} alt="profile-photo" className="rounded-full w-14 h-14 bg-green-200"  />
         }
         </div>
         </div>
         <div>
        {
          user ? <button onClick={handleLogout} className="btn btn-sm rounded-2xl ml-2">logout</button> : <Link to='/login' className="btn-outline mr-5">Login</Link>
         }
        </div>
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
        <div className="tooltip" data-tip={`${user?.displayName || ''}`}>
         <div className="bg-red-500">
         {
          user && <img src={user?.photoURL} alt="profile-photo" className="rounded-full w-14 h-14 bg-green-200"  />
         }
         </div>
         </div>
         <div>
        {
          user ? <button onClick={handleLogout} className="btn btn-sm rounded-2xl ml-2">logout</button> : <Link to='/login' className="btn-outline mr-5">Login</Link>
         }
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
