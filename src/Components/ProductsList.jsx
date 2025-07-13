import ProductCard from "./ProductCard";
import { products } from "./productData";

const ProductsList = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Optional title section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            High quality items for your everyday needs
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="transform transition-all hover:scale-105 hover:shadow-lg duration-300"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Optional pagination or "load more" would go here */}
      </div>
    </div>
  );
};

export default ProductsList;
