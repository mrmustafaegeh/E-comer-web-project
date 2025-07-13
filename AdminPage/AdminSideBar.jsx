import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  PackageSearch,
  ListOrdered,
  ChartColumnStacked,
  Settings,
  X,
  Sun,
  Moon,
} from "lucide-react";

function AdminSideBar({ toggleSidebar }) {
  const themes = ["synthwave", "pastel"];
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themes[themeIndex]);
  }, [themeIndex]);

  const toggleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <aside className="w-64 h-screen bg-base-300 text-base-content flex flex-col shadow-lg">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-base-200">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./src/assets/logo.png"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Close Button */}
        <button
          className="btn btn-square btn-sm btn-ghost text-base-content hover:text-primary"
          onClick={toggleSidebar}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <ul className="menu p-4 gap-1 flex-1">
        <li>
          <a className="flex gap-2 items-center">
            <LayoutDashboard size={18} /> Dashboard
          </a>
        </li>
        <li>
          <a className="flex gap-2 items-center">
            <PackageSearch size={18} /> Products
          </a>
        </li>
        <li>
          <a className="flex gap-2 items-center">
            <ListOrdered size={18} /> Orders
          </a>
        </li>
        <li>
          <a className="flex gap-2 items-center">
            <ChartColumnStacked size={18} /> Customers
          </a>
        </li>
        <li>
          <a className="flex gap-2 items-center">
            <Settings size={18} /> Settings
          </a>
        </li>
      </ul>

      {/* Theme Switcher */}
      <div className="p-4 border-t border-base-200">
        <button
          onClick={toggleTheme}
          className="btn btn-outline btn-block flex items-center justify-center gap-2"
        >
          {themes[themeIndex] === "synthwave" ? (
            <>
              <Sun size={18} /> Light Mode
            </>
          ) : (
            <>
              <Moon size={18} /> Dark Mode
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

export default AdminSideBar;
