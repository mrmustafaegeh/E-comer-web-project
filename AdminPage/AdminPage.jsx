import React, { useState } from "react";
import AdminHeader from "../Components/AdminHeader";
import AdminSideBar from "../Components/AdminSideBar";

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      {isSidebarOpen && <AdminSideBar toggleSidebar={toggleSidebar} />}

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <AdminHeader toggleSidebar={toggleSidebar} />
        <div className="p-6 bg-base-100 h-full overflow-y-auto">
          <h1 className="text-2xl font-bold">Welcome to the Admin Panel</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
