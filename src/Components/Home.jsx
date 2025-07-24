import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "./productData";
import { useCart } from "../Context/cartContext";

const Home = () => {
  // State and refs
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const { addToCart } = useCart();
  const intervalRef = useRef(null);

  // Data
  const filteredProducts = products.filter((product) => product.rating >= 4.5);

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Modern electronics store with displays",
      cta: "Explore Our Showroom",
    },
    {
      src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Electronics shop with various gadgets",
      cta: "New Arrivals Just In",
    },
    {
      src: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Store section with smartphones on display",
      cta: "Premium Smartphones 25% OFF",
    },
  ];

  // Carousel controls
  const scrollToIndex = useCallback((index) => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.clientWidth;
      slideRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    scrollToIndex(nextIndex);
  }, [currentIndex, scrollToIndex, slides.length]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    scrollToIndex(prevIndex);
  }, [currentIndex, scrollToIndex, slides.length]);

  // Auto-advance carousel with cleanup
  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 5000);
    return () => clearInterval(intervalRef.current);
  }, [handleNext]);

  // Pause auto-scroll on hover
  const handlePause = () => clearInterval(intervalRef.current);
  const handleResume = () => {
    intervalRef.current = setInterval(handleNext, 5000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Carousel Section */}
      <section
        className="relative rounded-xl overflow-hidden mb-12 bg-gray-900 text-gray-300"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        <div className="relative h-80 md:h-96">
          <ul
            ref={slideRef}
            className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide"
          >
            {slides.map((slide, index) => (
              <li
                key={index}
                className="w-full h-full flex-shrink-0 snap-start inline-block relative"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover brightness-75"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-12">
                  <div className="bg-black/60 text-white p-6 md:p-8 rounded-xl max-w-md backdrop-blur-sm">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {slide.cta}
                    </h2>
                    <Link
                      to="/products"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all font-medium shadow-lg hover:shadow-xl"
                    >
                      Shop Now →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-white w-6" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts products={filteredProducts} addToCart={addToCart} />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
};

// Extracted Featured Products Component
const FeaturedProducts = ({ products, addToCart }) => (
  <section className="mb-12">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
      <Link
        to="/products"
        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        View All →
      </Link>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </section>
);

// Extracted Product Card Component
const ProductCard = ({ product, addToCart }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-blue-100 group">
    <div className="relative overflow-hidden h-48">
      <img
        src={product.imgSrc}
        alt={product.name}
        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
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
          <span className="text-sm font-medium ml-1">{product.rating}</span>
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
);

// Extracted Newsletter Component
const NewsletterSignup = () => (
  <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
      Join Our Community
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
      Sign up for our newsletter and get 10% off your first order plus exclusive
      deals!
    </p>
    <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Subscribe
      </button>
    </form>
  </section>
);

export default Home;
