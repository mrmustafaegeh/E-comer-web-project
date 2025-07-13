import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ProductsList from "./Components/ProductsList";
import AboutUs from "./Components/AboutUs";
import Form from "./Form/Form";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import ScrollToTop from "./ScrollToTop";
import "./main.css";

function App() {
  return (
    <>
      <ScrollToTop />

      {/* Full-width Header */}
      <Header />

      {/* Page content container */}
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/cart" element={<Cart />} />
          {/* 404 fallback route */}
          <Route
            path="*"
            element={
              <h2 className="text-center text-danger mt-5">Page Not Found</h2>
            }
          />
        </Routes>
      </main>

      {/* Full-width Footer */}
      <Footer />
    </>
  );
}

export default App;
