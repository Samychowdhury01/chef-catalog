import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const ChefsCard = ({ chef }) => {
  const { id, chefPicture, chefName, experience, numRecipes, likes } = chef;
  return (
    <div className="card card-compact bg-base-100 shadow-xl ">
      <figure>
        <img className="p-5" src={chefPicture} alt="Chef's photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p className="text-base">
          <span className="font-bold">Experience: </span> {experience} years of
          experience.
        </p>
        <p className="text-base">
          <span className="font-bold">Recipes: </span> {numRecipes} recipes.
        </p>
        <div className="flex justify-between items-centers mt-5">
          <div className="flex items-center justify-center gap-2">
            <FaThumbsUp className="text-2xl" />
            <span>{likes}</span>
          </div>
          <button className="btn-outline">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;