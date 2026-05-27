import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-64 min-h-screen bg-black/80 backdrop-blur-xl border-r border-white/10 text-white p-6">

      {/* Logo / Title */}
      <h1 className="text-3xl font-extrabold tracking-tight mb-10">
        Admin<span className="text-blue-500">Panel</span>
      </h1>

      {/* Menu */}
      <div className="flex flex-col gap-3 text-sm">

        <Link
          to="/dashboard"
          className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/dashboard/products"
          className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition"
        >
          📦 Products
        </Link>

        <Link
          to="/dashboard/products/add"
          className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition"
        >
          ➕ Add Product
        </Link>

        <Link
          to="/dashboard/profile"
          className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition"
        >
          👤 Profile
        </Link>

      </div>

      {/* Logout */}
      <div className="mt-10 pt-6 border-t border-white/10">

        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 rounded-xl bg-red-500/90 hover:bg-red-600 text-white font-medium shadow-md hover:shadow-red-500/30 transition active:scale-95"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Sidebar;