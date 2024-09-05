import React from "react";
import imageurl from "../assets/images/image.png";

const HeroSectionGeneral = () => {
  return (
    <div className="py-5 mt-12 flex justify-center items-center">
      <div className="bg-gradient-to-r from-[#062261] to-[#3f5faa] text-white rounded-3xl overflow-hidden flex flex-col sm:flex-row items-center w-4/5 mx-auto">
        <div className="sm:w-3/5">
          <h1 className="text-4xl sm:text-3xl mx-16 font-bold mb-2">
            Elevate Your Daily Life Style
          </h1>
          <p className="text-lg mx-16">
            Experience Modernization in Its Purest Form
          </p>
        </div>
        <div className="sm:w-2/5 items-center">
          <img
            src={imageurl}
            alt="Audio Journey"
            className="h-[150px] w-[150px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionGeneral;
