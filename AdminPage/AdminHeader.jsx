import React, { useState } from "react";
import { Search, Menu, Bell, Mail, CircleUserRound } from "lucide-react";

// Fixed: SearchBar component
function SearchBar() {
  return (
    <div className="w-full px-6 py-2 bg-base-100 border-t border-base-300">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full max-w-md"
      />
    </div>
  );
}

export default function AdminHeader({ toggleSidebar }) {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-base-200 text-base-content shadow">
        <div className="flex items-center gap-4">
          <button className="btn btn-ghost btn-sm" onClick={toggleSidebar}>
            <Menu size={22} />
          </button>
          <button className="btn btn-ghost btn-sm" onClick={handleSearchToggle}>
            <Search size={22} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn btn-ghost btn-sm">
            <Bell size={22} />
          </button>
          <button className="btn btn-ghost btn-sm">
            <Mail size={22} />
          </button>
          <button className="btn btn-ghost btn-sm">
            <CircleUserRound size={26} />
          </button>
        </div>
      </header>

      {/* Show SearchBar conditionally */}
      {showSearch && <SearchBar />}
    </>
  );
}
