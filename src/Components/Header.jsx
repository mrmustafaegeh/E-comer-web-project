import { Link, NavLink } from "react-router-dom";
import { useCart } from "../Context/cartContext";

const Header = () => {
  const { cartItems } = useCart();
  const count = cartItems.reduce((s, i) => s + (i.qty || 1), 0);

  return (
    <nav className="navbar min-w-screen bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/image/logo.svg"
              alt="MyStore"
              className="h-10 transition-transform hover:scale-105"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-between items-center">
            <ul className="flex space-x-8 ml-10">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-medium px-3 py-2 rounded-md text-sm ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `font-medium px-3 py-2 rounded-md text-sm ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `font-medium px-3 py-2 rounded-md text-sm ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center space-x-6">
              <Link
                to="/form"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                Sign In
              </Link>

              <Link
                to="/cart"
                className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform hover:scale-110 transition-transform">
                    {count}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default) */}
      <div className="md:hidden hidden" id="nav">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            About
          </NavLink>
          <div className="pt-4 border-t border-gray-200">
            <Link
              to="/form"
              className="block w-full px-4 py-2 text-center border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/cart"
              className="flex items-center justify-center px-3 py-2 mt-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </span>
              <span className="ml-2">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
