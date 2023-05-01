import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Lottie from "lottie-react";
import ErrorImage from "../../../assets/images/ErrorImage.json"

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='md:w-1/2'>
                <Lottie animationData={ErrorImage} loop={true} ></Lottie>
            </div>
        <div className='max-w-md text-center'>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn-solid'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage