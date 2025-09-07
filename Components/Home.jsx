"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { products } from "./productData";
import { useCart } from "../context/cartContext";
import FeaturedProducts from "./FeaturedProducts";
import NewsletterSignup from "./NewLetterSignup";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const intervalRef = useRef(null);
  const { addToCart } = useCart();

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

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [handleNext]);

  const handlePause = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleResume = () => {
    intervalRef.current = setInterval(handleNext, 5000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Carousel Section */}
      <section
        className="relative rounded-xl overflow-hidden  bg-gray-900 text-gray-300 select-none"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl  bg-gray-900 text-gray-300">
          {/* Slide List */}
          <ul
            ref={slideRef}
            className="flex w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory whitespace-nowrap scrollbar-hide"
          >
            {slides.map((slide, index) => (
              <li
                key={index}
                className="min-w-full h-full snap-start relative flex-shrink-0"
              >
                <img
                  src={slide.src}
                  alt={slide.alt || "Slide image"}
                  className="w-full h-full object-cover brightness-75"
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-12">
                  <div className="bg-black/60 text-white p-5 md:p-8 rounded-xl max-w-md backdrop-blur-sm">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                      {slide.cta}
                    </h2>
                    <Link
                      href="/products"
                      className="inline-block px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all font-medium shadow-lg hover:shadow-xl"
                    >
                      Shop Now →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-white w-5" : "bg-white/50 w-2.5"
                } outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
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

export default Home;
