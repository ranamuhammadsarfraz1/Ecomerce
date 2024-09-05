import { useNavigate } from "react-router-dom";
import imageUrl from "../assets/images/subscriptionimage.jpg";
import React from "react";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pb-16 flex flex-col justify-center items-center">
        <h2 className="flex text-3xl font-black text-gray-700 tracking-wide py-16">
          About Us
        </h2>
        <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-center w-4/5">
          {/* Right Content Section */}
          <div className="sm:w-3/5 container flex flex-col mx-20">
            <h2 className="flex text-3xl font-bold mb-4">
              Little Bit About Us
            </h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultrices tristique mauris, quis ultrices urna tempus et. Donec
              hendrerit porttitor venenatis. Sed quis tempor nulla. Vivamus
              fringilla elit eu felis iaculis cursus. Integer ullamcorper libero
              vel orci tristique, in ullamcorper est luctus. Proin in ligula
              felis. Proin interdum velit quam, ut iaculis ipsum tempor nec.
            </p>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md text-sm max-w-44 font-medium"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>

            <ul className="flex flex-row mb-6 mt-14">
              <div className="flex flex-col mx-5">
                <li className="flex items-center mb-2">
                  <span className="bg-blue-600 text-white rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-6.293a1 1 0 011.414 0L10 13.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Limited edition products
                </li>
                <li className="flex items-center mb-2">
                  <span className="bg-blue-600 text-white rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-6.293a1 1 0 011.414 0L10 13.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Exclusive contents
                </li>
              </div>
              <div className="flex flex-col mx-5">
                <li className="flex items-center mb-2">
                  <span className="bg-blue-600 text-white rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-6.293a1 1 0 011.414 0L10 13.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Special offers
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-6.293a1 1 0 011.414 0L10 13.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  No spams!
                </li>
              </div>
            </ul>
          </div>
          {/* Left Image Section */}
          <div className="sm:w-2/5 border">
            <img
              src={imageUrl}
              alt="Headphones"
              className="h-[500px] w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
