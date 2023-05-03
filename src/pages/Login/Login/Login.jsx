import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/images/login-bg-2.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("wrong password");
  const [showPassword, setShowPassword] = useState(false);

  // handler for google sign in 
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then((result) =>{
      const loggedUser = result.user
      toast.success("Login successful")
    })
    .catch((error)=> {
      toast.error(`${error.message}`)
    })
  }
  // handler for Github sign in 
  const handleGithubSignIn = () =>{
    signInWithGithub()
    .then((result) =>{
      const loggedUser = result.user
      toast.success("Login successful")
    })
    .catch((error)=> {
      console.log(error.message)
      toast.error(`${error.message}`)
    })
  }

  return (
    <div className="p-5 md:p-0 ">
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
              <Link to="" className="label-text-alt error font-semibold">
                {errorMessage}
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn-solid">Login</button>
          </div>
          <label className="label">
            <p className="label-text-alt text-base">
              Don't Have an Account?
              <Link
                to="/register"
                className="link link-hover text-orange-500 font-bold ml-1"
              >
                Sign up
              </Link>
            </p>
          </label>

          {/* login with other method */}

          <div className="text-center relative">
            <div className="relative flex flex-col justify-center items-center mt-7">
              {/* for a horizontal line behind the text */}

              <div className="line"></div>
              <span className="bg-white absolute px-5 py-2 font-bold">or</span>
            </div>
          </div>
          <div>
            <div onClick={handleGoogleSignIn} className="flex items-center justify-center gap-2 mt-8 py-3 border-2 rounded-lg cursor-pointer">
              <FcGoogle className="text-3xl" />
              <span className="text-base">Continue with Google</span>
            </div>
            <div onClick={handleGithubSignIn} className="flex items-center justify-center gap-2 mt-5 py-3 border-2 rounded-lg cursor-pointer">
              <FaGithub className="text-3xl" />
              <span className="text-base">Continue with Github</span>
            </div>
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
