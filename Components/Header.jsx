"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/Context/cartContext";

const Header = () => {
  const { cartItems } = useCart();
  const pathname = usePathname();
  const count = cartItems.reduce((s, i) => s + (i.qty || 1), 0);

  // Helper for active link styling
  const isActive = (path) =>
    pathname === path
      ? "bg-blue-50 text-blue-600"
      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors";

  return (
    <nav className="navbar min-w-screen bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/image/logo.svg"
              alt="MyStore"
              className="h-10 transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-between items-center">
            <ul className="flex space-x-8 ml-10">
              <li>
                <Link
                  href="/"
                  className={`font-medium px-3 py-2 rounded-md text-sm ${isActive(
                    "/"
                  )}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`font-medium px-3 py-2 rounded-md text-sm ${isActive(
                    "/products"
                  )}`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`font-medium px-3 py-2 rounded-md text-sm ${isActive(
                    "/about"
                  )}`}
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Cart & Sign In */}
            <div className="flex items-center space-x-6">
              <Link
                href="/form"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                Sign In
              </Link>

              <Link
                href="/cart"
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
    </nav>
  );
};

export default Header;
