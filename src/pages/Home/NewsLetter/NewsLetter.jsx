import React from "react";
import subscribe from "../../../assets/images/subscribe.png";

const NewsLetter = () => {
  return (
    <div className="bg-orange-100 rounded-2xl mt-24 flex flex-col md:flex-row items-center justify-end drop-shadow-xl">
      <img className="md:w-1/2" src={subscribe} alt="Newsletter image" />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Subscribe To Our Newsletter</h1>
        <p className="text-gray-600 italic mb-4">
        Subscribe to our newsletter and be the first to receive updates on our latest mouth-watering recipes, cooking tips, and culinary trends. Stay up-to-date with the newest additions to our recipe collection and impress your friends and family with your culinary skills.
        </p>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn-solid">
             subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
