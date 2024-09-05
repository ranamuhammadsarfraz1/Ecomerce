import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const cart = useSelector((x) => {
    return x.cart.cart;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [dialogue, setDialogue] = useState(false);
  const handleClick = () => {
    setDialogue(true);
  };

  return (
    <nav className="py-3 px-10 mx-32 mt-4 sm:px-8 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {/* <img src="assets/images/logo.png" alt="Logo" className="h-5" /> */}
        <span className="text-2xl font-black text-gray-700 tracking-wide">
          <Link to="/">CRESCENDO</Link>
        </span>
      </div>
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:space-x-8 text-gray-800 text-sm font-medium absolute sm:relative top-16 sm:top-0 left-0 w-full sm:w-auto bg-gray-50 sm:bg-transparent px-4 sm:px-0 py-4 sm:py-0 z-10`}
      >
        <li className="hover:text-gray-600 cursor-pointer text-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-600 cursor-pointer text-lg">
          <Link to="/categories">Categories</Link>
        </li>
        <li className="hover:text-gray-600 cursor-pointer text-lg">
          <Link to="/products">Products</Link>
        </li>
        <li className="hover:text-gray-600 cursor-pointer text-lg">
          <Link to="/about">About</Link>
        </li>
        {/* <li className="hover:text-gray-600 cursor-pointer text-lg">
          <Link to="/profile">Profile</Link>
        </li> */}
      </ul>

      <div className="hidden sm:flex items-center space-x-6">
        <button
          onClick={handleCartClick}
          className="text-lg px-5 py-2 rounded-md hover:bg-slate-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 5.4a1 1 0 00.1.9c.2.3.5.5.85.5H17.4a1 1 0 00.95-.68L20 13M10 21a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
        </button>
        <button className="bg-blue-600 text-white text-lg px-5 py-2 rounded-md hover:bg-blue-700">
          <Link to="/products">Shop Now</Link>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-3 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-lg font-semibold mb-4">Cart</h3>

            {cart.length === 0 ? (
              <p className="text-lg text-gray-600">Your cart is empty</p>
            ) : (
              <div className="flex flex-col space-y-3">
                {cart.map((product, index) => (
                  <div
                    className="flex flex-row mx-4 mb-4 border rounded-lg p-2"
                    key={index}
                  >
                    <div className="flex-shrink-0 h-28 w-28 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col ml-4 justify-between">
                      <p className="text-base font-bold">{product.title}</p>
                      <p className="text-gray-600">Price: ${product.price}</p>
                      <div className="flex flex-row items-center mt-2">
                        <button className="px-3 py-2 bg-slate-100 text-black rounded mr-2">
                          {product.quantity}
                        </button>
                        <button
                          className="px-3 py-2 bg-amber-500 text-white rounded hover:bg-red-600 transition"
                          onClick={() => console.log(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex mx-2">
                  <button
                    className="px-3 py-2 bg-green-800 text-white rounded hover:bg-green-600 transition"
                    onClick={handleClick}
                  >
                    Place Order
                  </button>
                </div>
                {dialogue && (
                  <p className="flex">
                    Order Placed. Thanks for Ordering Us. Our representative
                    will contact you soon.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
