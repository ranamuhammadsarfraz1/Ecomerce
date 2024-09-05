import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/productcard";
import HeroSectionGeneral from "../components/herosectiongeneral";
import SubscriptionSection from "../components/subscription";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setFiltered(data);
  };
  const handlesearch = (e) => {
    const filtered = products.filter((element) => {
      if (element.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    });
    setFiltered(filtered);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <HeroSectionGeneral />
      <div className="container items-center w-4/5 mx-auto py-8">
        <div className="flex flex-row items-center justify-between mb-16">
          <h2 className="text-2xl font-black text-gray-700 tracking-wide text-left">
            All Products
          </h2>
          <div className="relative">
            <input
              onChange={handlesearch}
              className="bg-blue-50 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-50"
              placeholder="Search..."
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.415l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              clickHandler={() => navigate("/product-details/" + product.id)}
            />
          ))}
        </div>
      </div>
      <SubscriptionSection />
    </>
  );
};

export default Product;
