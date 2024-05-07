// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItems, updateQuantity } from '../utils/cartslice';
import { CDN_URL } from '../utils/constants';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, newQuantity }));
  };

  const handleIncreaseQuantity = (itemId) => {
    const currentItem = cartItems.find((item) => item.card.info.id === itemId);
  
    if (currentItem) {
      const currentQuantity = currentItem.quantity || 0;
      const newQuantity = currentQuantity + 1;
  
      // Dispatch the updateQuantity action
      handleUpdateQuantity(itemId, newQuantity);
    } else {
      // If the item is not in the cart, add it with quantity 1
      handleUpdateQuantity(itemId, 1);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItems({ itemId }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, items) =>
        total +
        ((items.card &&
          items.card.info &&
          items.card.info.price) / 100 || 0 ) *
          (items.quantity || 0),
      0
    );
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl w-1/2">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Cart
      </h2>
      <ul>
        {cartItems.map((items) => (
          <li
            key={items.card.info.id}
            className="flex justify-between items-center border-b border-gray-300 py-4 transition duration-300 hover:bg-gray-100"
          >
            <div className="flex items-center">
              <img
                src={CDN_URL + items.card.info.imageId}
                alt={items.card.info.name}
                className="w-28 h-28 object-cover rounded mr-4"
              />
              <div>
                <span className="font-semibold text-gray-700">
                  {items.card.info.name}
                </span>
                <span className="block text-gray-600">
                  - ₹{items.card.info.price ? items.card.info.price / 100 : items.card.info.defaultPrice / 100}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
                onClick={() =>
                  handleUpdateQuantity(
                    items.card.info.id,
                    Math.max(0, (items.quantity || 0) - 1)
                  )
                }
              >
                -
              </button>
              <span className="mx-2 text-lg">{items.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
                onClick={() => handleIncreaseQuantity(items.card.info.id)}
              >
                +
              </button>
              <button
                className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => handleRemoveFromCart(items.card.info.id, 0)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <p className="text-2xl font-bold text-right text-gray-800">
          Subtotal: Rs.{calculateSubtotal()}
        </p>
      </div>
    </div>
  );
};

export default Cart;
