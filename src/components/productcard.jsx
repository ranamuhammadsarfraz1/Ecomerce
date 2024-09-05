const ProductCard = ({ product, clickHandler }) => {
  return (
    <div
      key={product.id}
      onClick={clickHandler}
      className="bg-gray-50 px-2 rounded-3xl shadow-md hover:shadow-2xl transition-shadow"
    >
      <div className="relative">
        <span className="absolute top-6 left-6 bg-blue-500 text-white font-semibold px-3 py-1 rounded">
          New
        </span>
        <img
          src={product.image}
          alt={product.title}
          className="w-52 h-64 mx-auto mb-4 rounded-3xl"
        />
      </div>
      <h3 className="text-sm font-semibold mb-1 mx-3">{product.title}</h3>
      <p className="text-gray-500 mx-3">{product.category}</p>
      <p className="font-normal text-[#406BD0] mx-3 mb-3">${product.price}</p>
    </div>
  );
};

export default ProductCard;
