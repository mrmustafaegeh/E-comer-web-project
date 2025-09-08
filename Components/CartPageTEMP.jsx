"use client";

import { useCart } from "../context/cartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // Helper function to convert price string to number
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(price.toString().replace(/[^0-9.-]+/g, "")) || 0;
  };

  // Validate and normalize cart items
  const validatedCartItems = cartItems.map((item) => ({
    ...item,
    price: parsePrice(item.price),
    qty: Math.max(1, Number(item.qty) || 1),
    imgSrc: item.imgSrc,
  }));

  // Calculate total
  const total = validatedCartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Format price for display
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (validatedCartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="w-32 h-32 mb-6 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet
        </p>
        <a
          href="/"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 md:my-12 px-4 sm:px-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Your Shopping Cart
        </h1>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          {validatedCartItems.length}{" "}
          {validatedCartItems.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 divide-y divide-gray-100">
        {validatedCartItems.map((item) => (
          <div
            key={`${item.id}-${item.size || "default"}`}
            className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex items-start w-full md:w-auto mb-4 md:mb-0">
              <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-product.png";
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 text-lg">
                  {item.name}
                </h3>
                <p className="text-gray-500">{formatPrice(item.price)} each</p>
                {item.size && (
                  <p className="text-gray-500 text-sm mt-1">
                    Size: {item.size}
                  </p>
                )}
                <div className="flex items-center mt-2">
                  <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                    <button
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.qty <= 1}
                      aria-label="Decrease quantity"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    </button>
                    <span className="px-3 py-1 text-sm bg-gray-50 font-medium border-x border-gray-200">
                      {item.qty}
                    </span>
                    <button
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                      onClick={() => increaseQuantity(item.id)}
                      aria-label="Increase quantity"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-4">
              <span className="text-gray-800 font-semibold text-lg md:text-xl md:mr-8">
                {formatPrice(item.price * item.qty)}
              </span>
              <button
                className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200 hover:bg-red-50 rounded-full focus:outline-none focus:ring-2 focus:ring-red-200"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900 font-medium">
              {formatPrice(total)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>
          <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-xl font-bold text-blue-600">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-end gap-4">
        <button
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={clearCart}
          aria-label="Clear shopping cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Clear Cart
        </button>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Proceed to checkout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
