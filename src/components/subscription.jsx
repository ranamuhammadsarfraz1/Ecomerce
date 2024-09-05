import imageUrl from "../assets/images/subscriptionimage.jpg";
import React, { useState } from "react";

const SubscriptionSection = () => {
  const [dialogue, setDialogue] = useState(false);
  const handleClick = () => {
    setDialogue(true);
  };
  return (
    <div className="py-16 flex justify-center items-center">
      <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-center w-4/5 shadow-lg">
        {/* Left Image Section */}
        <div className="sm:w-2/5 border">
          <img
            src={imageUrl}
            alt="Headphones"
            className="h-[500px] w-[500px]"
          />
        </div>

        {/* Right Content Section */}
        <div className="sm:w-3/5 container flex flex-col items-center">
          <h2 className="flex text-3xl font-bold mb-4">Join Our List Today!</h2>
          <p className="text-gray-500 mb-6">Be the first to know</p>

          <ul className="flex flex-row mb-6">
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

          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-l-md p-2 w-full focus:outline-none"
            />
            <button
              className="bg-blue-600 text-white rounded-r-md px-6 py-2 hover:bg-blue-700"
              onClick={handleClick}
            >
              Subscribe
            </button>
            {dialogue && <p className="flex">Thanks for joining us</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
