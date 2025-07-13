import { Link } from "react-router-dom";
import { products } from "./productData";
import { useCart } from "../Context/cartContext";

const Home = () => {
  const filteredProducts = products.filter((product) => product.rating >= 4.5);
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden h-80 md:h-96 mb-12 group">
        <img
          src="./src/assets/image/background-i.png"
          alt="Welcome to our store"
          className="w-full h-full object-cover brightness-75 rounded-xl transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-12">
          <div className="bg-black bg-opacity-60 text-white p-6 md:p-8 rounded-xl max-w-md backdrop-blur-sm animate-fade-in">
            <p className="text-lg md:text-xl mb-2 font-medium text-blue-300">
              🔥 Limited Time Offer
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Premium Electronics <br className="hidden md:block" />
              Up to 30% OFF
            </h2>
            <Link
              to="/products"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Shop Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-blue-100 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
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
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-green-600 font-bold text-lg mb-4">
                    {product.price.toLocaleString("tr-TR", {
                      style: "currency",
                      currency: "TRY",
                    })}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow hover:shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Sign up for our newsletter and get 10% off your first order plus
          exclusive deals!
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
