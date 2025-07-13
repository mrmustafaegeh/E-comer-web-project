import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ProductsList from "./Components/ProductsList";
import AboutUs from "./Components/AboutUs";
import Form from "./Form/Form";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import ScrollToTop from "./ScrollToTop";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Global components (shown on all pages) */}
      <ScrollToTop />
      <Header />

      {/* Routes (no container here—let each page handle its own width) */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <h2 className="text-center text-danger mt-5">Page Not Found</h2>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
