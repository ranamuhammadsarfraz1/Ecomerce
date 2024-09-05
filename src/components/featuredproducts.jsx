import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./productcard";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=4");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container items-center w-4/5 mx-auto py-8">
      <h2 className="text-2xl font-black text-gray-700 tracking-wide mb-16 text-left">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            clickHandler={() => navigate("/product-details/" + product.id)}
          />
        ))}
      </div>
      <div className="text-center  mt-16">
        <button
          className="bg-[#406BD0] text-white px-6 py-2 text-xl font-semibold rounded-md hover:bg-blue-700 transition"
          onClick={() => navigate("/products")}
        >
          See All Products
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
