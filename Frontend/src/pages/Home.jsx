import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="h-[90vh] flex flex-col justify-center items-center text-center px-4">

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Build Your <span className="text-blue-500">Blog Website</span>
        </h1>

        <p className="mt-5 text-gray-300 text-lg max-w-2xl">
          A professional MERN stack blog platform with authentication, product management
          and modern UI design.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-col sm:flex-row">

          {/* <a
           
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition"
          >
            Get Started
          </a> */}

          <button Link to="/register" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition">
            Get Started
          </button>
          <button Link to="/login" className="px-6 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl font-semibold hover:bg-white/20 hover:scale-105 transition">
            Login
          </button>

        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">⚡ Fast</h3>
            <p className="text-gray-300 mt-2 text-sm">
              Optimized MERN architecture for speed and performance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">🔐 Secure</h3>
            <p className="text-gray-300 mt-2 text-sm">
              JWT authentication with protected routes.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">🎨 Modern UI</h3>
            <p className="text-gray-300 mt-2 text-sm">
              Beautiful Tailwind CSS design with smooth animations.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;