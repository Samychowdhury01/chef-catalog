import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefsCard from "../ChefsCard/ChefsCard";
import Header from "../Header/Header";
import FoodGallery from "./FoodGallery/FoodGallery";

const Home = () => {
  const chefData = useLoaderData();
  console.log(chefData);

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-24">
        <h1 className="text-center text-5xl font-bold text-orange-400 mb-5">
          Meet our Chefs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-0">
          {chefData.map((chef) => (
            <ChefsCard key={chef.id} chef={chef}></ChefsCard>
          ))}
        </div>
      </div>
      <div>
        <FoodGallery/>
      </div>
    </div>
  );
};

export default Home;
