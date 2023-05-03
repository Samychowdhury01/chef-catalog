import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-hot-toast";

const RecipeCard = ({ recipe }) => {
  const { chef_id, recipe_name, image, ingredients, cooking_method, rating } =
    recipe;
  const [favorite, setFavorite] = useState(false);

//   handler for toggle favorite button
const handleFavorite = () =>{
    setFavorite(true)
    toast.success("recipe is successfully added in your favorite list")
}

  return (
    <div className="card md:container md:mx-auto lg:card-side bg-base-100 shadow-xl my-5">
      <figure>
        <LazyLoadImage
          src={image}
          effect="blur"
          alt="recipe image"
          className="w-[500px] h-80 p-5"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Recipe Name: {recipe_name}</h2>
        <p>
          <span className="text-lg font-bold">Ingredients: </span> <br />
          {ingredients.join(", ")}
        </p>

        <div>
          <p className="text-lg font-bold">Cooking Method:</p>
          <pre className="overflow-auto" style={{ fontFamily: "Poppins, sans-serif"}}>
            {cooking_method}
          </pre>
        </div>
        
        <div>
        <span className="text-lg font-bold">Ratings:</span>
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
        </div>

        <div className="card-actions justify-end">
          <button onClick={handleFavorite} disabled={favorite ? true : false}>
            {favorite ? (
              <FaHeart className="text-2xl" />
            ) : (
              <FaRegHeart className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
