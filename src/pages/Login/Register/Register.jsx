import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../../../assets/images/login-bg.png";
import app from "../../../firebase/firebase.config";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const {createUser, updateUserProfile, user} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const location = useLocation()
  const navigate = useNavigate()

  // css style for register page
  const bgStyle = {
    position: "relative", // add position relative to the container
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${bg})`, // add linear-gradient to create a black and transparent gradient
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "90vh",
  };


  // handle register with email and password
  const handleRegister = event =>{
    const auth = getAuth(app)
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    console.log(name)
    setPasswordError('')
    setErrorMessage('')

  // sign-up process
    createUser(email, password)
    .then((result) =>{
      const createdUser = result.user
      toast.success("You have successfully created an account")
      navigate(location?.state?.from?.pathname || '/')
  
        updateProfile(createdUser, {
          displayName: name, photoURL: photo
        }).then(() => {
          // Profile updated!
          // ...
          console.log('updated profile')
        }).catch((error) => {
          // An error occurred
          // ...
          console.log('profile update error')
        });
      


      event.target.reset()
    })
    .catch((error) => {
      const errMessage = error.message;
      if (errMessage.includes('email-already-in-use')) {
        setErrorMessage('The email you have provided is already in use')
        return
      }
    })
  }

  // update user data
/* 
  const updateUserData = (name, photo) =>{
    updateUserProfile(name, photo)
  .then(
    console.log('successfully updated user name photo')
  )
  .catch(console.log('update hoy nai'))
  } */


  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);


    if (!/(?=.*[A-Z])/.test(passwordInput)) {
      setPasswordError("Password must contain at least one capital letter");
    }
    else if (!/(?=.*[0-9])/.test(passwordInput)){
      setPasswordError("Password must contain at least one number");
    }
    else if (!/(?=.*[!@#$%^&*])/.test(passwordInput)){
      setPasswordError("Password must contain a special character");
    }
    else if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    }   else {
      setPasswordError("");
    }
  };

  return (
    <form
    onSubmit={handleRegister}
      style={bgStyle}
      className="flex justify-center items-center p-8 md:p-0"
    >
      <div className="md:container md:mx-auto rounded-2xl shadow-2xl p-10 glass lg:w-1/3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
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
            type="text"
            name="photo"
            placeholder="photoUrl"
            className="input input-bordered"
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
            onChange={handlePassword}
            value={password}
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
          <label className="text-center">
            <Link to="" className={`label-text-alt ${errorMessage ? 'error' : ''} font-semibold`}>
              {errorMessage}
            </Link>
          </label>
          <label className="text-center">
            <Link to="" className={`label-text-alt ${passwordError ? 'error' : ''} font-semibold`}>
              {passwordError}
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn-solid">Sign up</button>
        </div>
        <label className="label">
          <p className="label-text-alt text-base">
            Already Have an account? 
            <Link
              to="/login"
              className="link link-hover text-orange-500 font-bold ml-1"
            >
              Login
            </Link>
          </p>
        </label>
      </div>
    </form>
  );
};

export default Register;
