import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HeroSectionGeneral from "../components/herosectiongeneral";
import FeaturedProducts from "../components/featuredproducts";
import SubscriptionSection from "../components/subscription";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartAction";

const ProductDetail = () => {
  const params = useParams();
  const [ProductDetail, setProductDetails] = useState([]);
  const [userInput, setuserInput] = useState([1]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.productID}`
    );
    const data = await response.json();
    setProductDetails(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: ProductDetail.id,
        title: ProductDetail.title,
        price: ProductDetail.price,
        image: ProductDetail.image,
        quantity: userInput,
      })
    );
  };

  return (
    <>
      <HeroSectionGeneral />
      <div className=" container items-center w-4/5 mx-auto py-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/2 px-5">
            <div className="rounded-lg overflow-hidden mb-4 lg:mb-0">
              <img
                src={ProductDetail.image}
                alt="Product"
                className="container items-center object-contain w-full h-[400px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8 px-5">
            <h3 className="text-gray-500 capitalize tracking-wide">
              {ProductDetail.category}
            </h3>
            <h1 className="text-3xl font-bold text-gray-900 my-7">
              {ProductDetail.title}
            </h1>
            <p className="mt-4 text-gray-600 text-justify">
              {ProductDetail.description}
            </p>
            <div className="mt-4 text-blue-600 my-7 text-2xl font-semibold">
              ${ProductDetail.price} USD
            </div>
            <div className="flex flex-row mt-6 space-x-2">
              <input
                type="number"
                value={userInput}
                onChange={(e) => setuserInput(Number(e.target.value))}
                min="1"
                className="flex w-20 rounded-md border border-[#062261] py-3 px-4 shadow-lg"
              />
              <select
                id="color"
                className="flex w-36 rounded-md border border-[#062261] py-3 px-4 shadow-lg"
              >
                <option>Color</option>
                <option>Black</option>
              </select>
              <button
                className="flex items-center justify-center w-36 bg-[#062261] hover:bg-blue-700 rounded-md border border-[#062261]"
                onClick={handleAddToCart}
              >
                <p className="text-white font-bold">Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FeaturedProducts />
      <SubscriptionSection />
    </>
  );
};

export default ProductDetail;
