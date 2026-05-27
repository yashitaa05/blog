import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { getProducts } from "../services/productApi";

const Dashboard = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();

      // IMPORTANT: adjust this if backend returns different structure
      setProductsCount(res.data.length);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      <Navbar />

      <div className="p-6 md:p-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold">
            Dashboard
          </h1>
          <p className="text-gray-400 mt-1">
            Overview of your system
          </p>
        </div>

        {/* ONLY ONE REAL CARD */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-10">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-gray-300 text-sm">Total Products</h2>

            {loading ? (
              <p className="text-3xl font-bold mt-2">Loading...</p>
            ) : (
              <p className="text-3xl font-bold mt-2">
                {productsCount}
              </p>
            )}
          </div>

        </div>

        {/* Outlet Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;