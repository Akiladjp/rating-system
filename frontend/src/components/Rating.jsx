import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import PrawnRice from "../assets/prawnFriedRice.png";

const Rating = () => {
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(null);

  return (
    <div className="w-full flex justify-center scale-90 md:scale-100">
      <div className="w-[400px] h-[200px] flex mt-4 rounded-lg shadow-md">
        <div className="w-[220px] h-[200px] rounded-lg">
          <img src={PrawnRice} alt="" className="h-[200px] rounded-l-lg" />
        </div>
        <div className="w-[200px] h-[200px] flex flex-col gap-4 m-4">
          <h1 className="text-[20px] font-bold">Prawn Fried Rice</h1>
          <div className="flex text-[18px]">
            <RiStarSFill size={25} className="mt-1 mr-4 text-[#ffc107]" />
            <p className="text-[20px]"> 4.6 </p>
          </div>

          {/* Rating add */}
          <div className="">
            <div>
              {[...Array(5)].map((star, index) => {
                const currenRating = index + 1;

                return (
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={currenRating}
                      onClick={() => setRating(currenRating)}
                      className="appearance-none"
                    />
                    <RiStarSFill size={30} className="inline cursor-pointer" color={currenRating <= (hover || rating) ? "#ffc107" : "#e4e5e9" } onMouseEnter={() => setHover(currenRating)} onMouseLeave={() => setHover(null)} />{" "}
                  </label>
                );
              })}
            </div>
            <div className=" flex justify-end">
              <button className="bg-green-500 px-2 py-1 rounded-md mt-3 mr-2 font-semibold active:scale-95">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
