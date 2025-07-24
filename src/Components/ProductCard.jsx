import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product }) => {
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} className="w-5 h-5 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarIcon key={i} className="w-5 h-5 text-yellow-400" />);
      } else {
        stars.push(<StarIcon key={i} className="w-5 h-5 text-gray-300" />);
      }
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-4 flex justify-center items-center h-48 bg-gray-50">
        <img
          src={product.imgSrc}
          alt={product.name}
          className="object-contain h-full max-w-full"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>

        <div className="flex items-center mb-2">
          <div className="flex mr-2">{renderRatingStars(product.rating)}</div>
          <span className="text-gray-500 text-sm">
            {product.rating.toFixed(1)}
          </span>
        </div>

        <div className="mt-auto">
          <p className="text-lg font-bold text-gray-900">{product.price}</p>
          <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
