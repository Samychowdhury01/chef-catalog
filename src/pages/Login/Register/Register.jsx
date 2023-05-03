import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import bg from "../../../assets/images/login-bg.png";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("wrong password");
  const [showPassword, setShowPassword] = useState(false);

  const bgStyle = {
    position: "relative", // add position relative to the container
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${bg})`, // add linear-gradient to create a black and transparent gradient
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "90vh",
  };

  return (
    <div style={bgStyle} className="flex justify-center items-center p-8 md:p-0">
      <div className="md:container md:mx-auto rounded-2xl shadow-2xl p-10 glass lg:w-1/3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="text"
            placeholder="Your Name"
            className="input input-bordered"
          />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input 
          type="file" 
          name="photo"
          className="file-input file-input-bordered  w-full" />
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
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-12 right-3 cursor-pointer"
          >
            {showPassword ? (
              <FaEye className="w-6 h-6" />
            ) : (
              <FaEyeSlash className="w-6 h-6" />
            )}
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
      </div>
    </div>
  );
};

export default Register;
