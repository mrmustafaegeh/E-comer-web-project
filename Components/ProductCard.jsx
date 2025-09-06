"use client";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product, addToCart }) => {
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars || (i === fullStars && hasHalfStar)) {
        stars.push(<StarIcon key={i} className="w-5 h-5 text-yellow-400" />);
      } else {
        stars.push(<StarIcon key={i} className="w-5 h-5 text-gray-300" />);
      }
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:border-blue-200 overflow-hidden transition-all duration-300 flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden bg-gray-50">
        <img
          src={product.imgSrc}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded">
            {renderRatingStars(product.rating)}
            <span className="text-sm text-gray-600">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto">
          <p className="text-green-600 font-bold text-lg mb-3">
            {product.price.toLocaleString("tr-TR", {
              style: "currency",
              currency: "TRY",
            })}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition duration-300 font-medium shadow-sm hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
