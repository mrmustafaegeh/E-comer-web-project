import { useCart } from "../Context/cartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  if (!product) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-blue-100">
      {/* Product Image */}
      <div className="relative pt-[100%] overflow-hidden">
        <img
          src={product.imgSrc}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-green-600 font-bold text-lg mb-4">
          {product.price.toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
          })}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-auto w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
