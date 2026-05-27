import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 text-white">

      <div className="px-6 md:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight">
          My<span className="text-blue-500">Blog</span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">

          <Link
            to="/"
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-gray-300 hover:text-white transition"
          >
            Dashboard
          </Link>

          <Link
            to="/dashboard/products"
            className="text-gray-300 hover:text-white transition"
          >
            Products
          </Link>

          <Link
            to="/dashboard/profile"
            className="text-gray-300 hover:text-white transition"
          >
            Profile
          </Link>

        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl bg-red-500/90 hover:bg-red-600 text-white font-medium shadow-md hover:shadow-red-500/30 transition active:scale-95"
          >
            Logout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;