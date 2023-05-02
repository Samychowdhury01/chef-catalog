import React from "react";
import { FaThumbsUp } from "react-icons/fa";
const ChefDetails = ({ chefData }) => {
  const { chefName, bio, chefPicture, likes, experience, numRecipes } =
    chefData;
  return (
    <div className="md:container md:mx-auto hero min-h-[50vh] bg-orange-100 md:p-10 shadow-2xl rounded-xl">
      <div className="hero-content flex-col lg:flex-row gap-14">
        <img src={chefPicture} className="max-w-sm w-full rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{chefName}</h1>
          <p className="py-6">{bio}</p>
          <p className="text-base mb-4">
            <span className="font-bold text-lg">Experience: </span> {experience} years
            of experience.
          </p>
          <p className="text-base mb-4">
          <span className="font-bold text-lg">Recipes: </span> {numRecipes} recipes.
          </p>
            <div className="flex items-center gap-2">
              <FaThumbsUp className="text-2xl" />
              <span>{likes}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
