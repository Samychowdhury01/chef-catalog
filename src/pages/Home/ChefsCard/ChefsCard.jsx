import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

const ChefsCard = ({ chef }) => {
  const { id, chefPicture, chefName, experience, numRecipes, likes } = chef;
  return (
    <div className="card card-compact bg-base-100 shadow-xl ">
      <figure>
      <LazyLoadImage
        alt="Chef's photo"
        effect="blur"
        src={chefPicture}
        className="p-5"
      />
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
          <Link to={`/chefRecipe/${id}`} className="btn-outline">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
