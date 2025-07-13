import React from "react";
import Header from "../Components/Header";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Components/Footer";
import Home from "../Components/Home";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Home />
      </main>

      {/* Full-width Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
