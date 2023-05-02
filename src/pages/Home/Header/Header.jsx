import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const Header = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <div className="container mx-auto flex items-center justify-center h-[100vh] md:h-[60vh] bg-orange-100 bg-opacity-70 rounded-lg drop-shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
        <div className="mt-10 md:mt-0">
          <h1 className="h-[100px] text-2xl md:text-5xl text-orange-400 font-bold py-8 mb-8">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Chef's Catalog - Discover the Joy of Cooking"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-lg italic text-gray-700">
            Explore, savor, and create with us! Taste the world, one dish at a
            time. Let's cook up some memories together. Discover your inner chef
            with our food inspiration. Join the Chef's catalog community and satisfy
            your cravings.
          </p>

          <Link to="/login" className="btn-solid mt-5">
            Login
          </Link>
        </div>
        <div>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <img
                className="h-48 md:h-72 rounded-lg"
                src="https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/vkhanna.jpg"
                alt="chef's image"
              />
            </div>
            <div className="keen-slider__slide number-slide2">
              <img
                className="h-48 md:h-72 rounded-lg"
                src="https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/vicky-ratnani-1.jpg"
                alt="chef's image"
              />
            </div>
            <div className="keen-slider__slide number-slide3">
              <img
                className="h-48 md:h-72 rounded-lg"
                src="https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/sanjeev-kapoor-1.jpg"
                alt="chef's image"
              />
            </div>
            <div className="keen-slider__slide number-slide4"> <img className="h-48 md:h-72 rounded-lg" src="https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/pankaj-bhadouria-1.jpg" alt="chef's image" /></div>
            <div className="keen-slider__slide number-slide5"> <img className="h-48 md:h-72 rounded-lg" src="https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/pooja-dhingra-11589353546631.jpg" alt="chef's image" /></div>
            <div className="keen-slider__slide number-slide6"> <img className="h-48 md:h-72 rounded-lg" src="https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/ajay-chopra-1.jpg" alt="chef's image" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
