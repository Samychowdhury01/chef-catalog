import React from "react";
import food1 from "../../../assets/images/food-1.png";
import food2 from "../../../assets/images/food-2.png";
import food3 from "../../../assets/images/food-3.png";
import food4 from "../../../assets/images/food-4.png";
import food5 from "../../../assets/images/food-5.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const FoodGallery = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center text-5xl font-bold text-orange-400 mb-10">
        Our Recipe Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 p-5 md:p-0">
        <div>
          <LazyLoadImage alt="chef image" effect="blur" src={food1} className='rounded-xl' />
        </div>
        <div className="md:row-span-2">
          <LazyLoadImage alt="chef image" effect="blur" src={food5} className='rounded-xl' />
        </div>
        <div>
          <LazyLoadImage alt="chef image" effect="blur" src={food3} className='rounded-xl' />
        </div>
        <div>
          <LazyLoadImage alt="chef image" effect="blur" src={food4} className='rounded-xl' />
        </div>
        <div>
          <LazyLoadImage alt="chef image" effect="blur" src={food2} className='rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default FoodGallery;
