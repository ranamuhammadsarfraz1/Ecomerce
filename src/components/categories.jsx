import React, { useEffect, useState } from "react";
import { electronics, jewellary, men, women } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ShopByCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    setCategories(data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const getImageByCategory = (category) => {
    switch (category) {
      case "electronics":
        return electronics;
      case "jewelery":
        return jewellary;
      case "men's clothing":
        return men;
      case "women's clothing":
        return women;
    }
  };
  return (
    <div className="container items-center w-4/5 mx-auto pb-8">
      <h2 className="text-2xl font-black text-gray-700 tracking-wide mb-16 text-left">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.slice(0, 3).map((category, index) => (
          <div
            key={index}
            className="bg-[#e5e6f2] px-6 rounded-3xl shadow-md flex flex-col  hover:shadow-lg transition-shadow"
            onClick={() => navigate("/category-product/" + category)}
          >
            <div>
              <h3 className="text-xl font-semibold mt-6 mb-3">{category}</h3>
              <p className="text-gray-600 mb-4">
                Really amazing and perfect things you will find. A lot of
                products inside it.
              </p>
              <a
                href={category.linkUrl}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Explore {category} &rarr;
              </a>
            </div>
            <img
              src={getImageByCategory(category)}
              alt={category}
              className="h-25 w-25 items-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
