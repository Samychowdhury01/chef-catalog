import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Rating } from "@smastrom/react-rating";

const ReadersReview = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });
  return (
    <div className="my-24 p-5 md:p-0">
      <h1 className="text-center text-5xl font-bold text-orange-400 mb-10">
        Our Readers Review
      </h1>
      <div
        ref={sliderRef}
        className="keen-slider md:h-96 bg-base-200 mb-24 p-2 rounded-xl shadow-2xl"
      >
        <div className="keen-slider__slide number-slide1 flex items-center justify-center text-center">
        <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
              "I tried the chicken parmesan recipe from this website and it was
              delicious! The instructions were easy to follow and the end result
              was a perfectly crispy and cheesy dish. Highly recommend!"
            </p>
            <div className="md:w-[200px] md:mx-auto flex justify-center items-center mb-2">
              <Rating style={{ maxWidth: 150 }} value={4.5} readOnly />
              <p>4.5</p>
            </div>
            <h3 className="font-bold">- Sarah</h3>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 flex items-center justify-center text-center">
        <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
            "I'm always looking for new vegetarian recipes to try, and the lentil soup recipe on this website did not disappoint. It was hearty, flavorful, and easy to make. Definitely adding it to my rotation!"
            </p>
            <div className="md:w-[200px] md:mx-auto flex justify-center items-center mb-2">
              <Rating style={{ maxWidth: 150 }} value={4.5} readOnly />
              <p>4.5</p>
            </div>
            <h3 className="font-bold">- Maya</h3>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 flex items-center justify-center text-center">
        <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
            "I made the chocolate chip cookies from this website and they were a hit with my whole family. The recipe was straightforward and the cookies turned out soft and chewy. Yum!"
            </p>
            <div className="md:w-[200px] md:mx-auto flex justify-center items-center mb-2">
              <Rating style={{ maxWidth: 150 }} value={4.7} readOnly />
              <p>4.7</p>
            </div>
            <h3 className="font-bold">- Alex</h3>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4 flex items-center justify-center text-center">
        <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
            "I love spicy food and the spicy shrimp stir-fry recipe on this website definitely delivered. It had just the right amount of heat and the veggies added a nice crunch. Will be making it again soon!"
            </p>
            <div className="md:w-[200px] md:mx-auto flex justify-center items-center mb-2">
              <Rating style={{ maxWidth: 150 }} value={5} readOnly />
              <p>5.0</p>
            </div>
            <h3 className="font-bold">- Jake</h3>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5 flex items-center justify-center text-center">
        <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
            "The garlic mashed potatoes recipe on this website was a game-changer for me. I had never thought to add roasted garlic to mashed potatoes before, but it added so much flavor. Can't wait to try some of the other recipes on here!"
            </p>
            <div className="md:w-[200px] md:mx-auto flex justify-center items-center mb-2">
              <Rating style={{ maxWidth: 150 }} value={4.2} readOnly />
              <p>4.2</p>
            </div>
            <h3 className="font-bold">- Emily</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadersReview;
