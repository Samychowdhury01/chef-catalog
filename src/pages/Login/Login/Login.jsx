import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/images/login-bg-2.png";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('wrong password')
    const [showPassword, setShowPassword] = useState(false)
  return (
<div className="p-5 md:p-0">
<div className="md:container md:mx-auto flex flex-col-reverse md:flex-row  items-center border-amber-200 border-2 rounded-2xl shadow-2xl p-10">
      {/* form  */}
      <div className="md:w-1/3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <div onClick={()=> setShowPassword(!showPassword)} className="absolute top-12 right-3 cursor-pointer">
            {
                showPassword ? <FaEye className="w-6 h-6"/> : <FaEyeSlash className="w-6 h-6"/>
            }
          </div>
          <label className="label">
            <Link to="" className="label-text-alt link link-hover">
              Forgot password?
            </Link>
          </label>
          <label className="text-center">
            <Link to="" className="label-text-alt text-red-500 font-semibold">
              {errorMessage}
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn-solid">Login</button>
        </div>

        {/* login with other method */}
        <div>
            
        </div>
      </div>
      <div className="md:w-2/3">
        <LazyLoadImage alt="Login-image" effect="blur" src={loginImage} />
      </div>
    </div>
</div>
  );
};

export default Login;
