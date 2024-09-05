import React from "react";

export const CartModal = ({ isOpen, toggleModal }) => {
  // Prevent click event from closing the modal
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed top-0 right-0 h-full bg-slate-100 shadow-xl w-1/4 transform transition-shadow duration-1000 ease-in-out translate-x-0"
            onClick={toggleModal}
          >
            <div onClick={handleModalClick}>
              {/* Close button */}
              <button
                className="text-red-500 font-bold absolute top-4 right-4"
                onClick={toggleModal}
              >
                X
              </button>
              <h2 className="text-2xl font-bold p-4">Your Cart</h2>

              <div className="p-4 space-y-4">
                {/* Render Products */}
                {/* Your product rendering code here */}
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>
        </>
      )}
    </>
  );
};
