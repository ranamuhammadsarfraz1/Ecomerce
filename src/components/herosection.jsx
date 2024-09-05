import React from "react";
import imageurl from "../assets/images/image.png";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 flex justify-center items-center">
      <div className="bg-gradient-to-r from-[#062261] to-[#3f5faa] text-white rounded-3xl overflow-hidden flex flex-col sm:flex-row items-center w-4/5 mx-auto">
        <div className="px-16 py-16 sm:w-3/5">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Elevate Your Daily Life Style
          </h1>
          <p className="text-lg mb-6">
            Experience Modernization in Its Purest Form
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md text-sm font-medium"
              onClick={() => navigate("/products")}
            >
              <Link to="/products">Shop Now</Link>
            </button>
            <button
              className=" text-white py-2 px-6 rounded-md text-sm font-medium"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="sm:w-2/5 items-center">
          <img
            src={imageurl}
            alt="Audio Journey"
            className="h-[400px] w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
