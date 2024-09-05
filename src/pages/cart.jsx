import { useSelector } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from "../redux/cart/cartActions";
import { addToCart } from "../redux/cart/cartActions";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cart.map((product, index) => (
            <div
              key={index}
              className="flex bg-white rounded-lg shadow-md overflow-hidden h-40 w-full md:w-2/3 mx-auto"
            >
              {/* Product Image (1/3 of the card) */}
              <div className="w-1/3 h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product Details (2/3 of the card) */}
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600">Price: ${product.price}</p>
                  <p className="text-gray-600">Quantity: {product.quantity}</p>
                </div>

                {/* Action Button */}
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => console.log(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
