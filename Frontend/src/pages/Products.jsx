import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "../services/productApi";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      setProducts(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Could not delete product.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 md:p-10 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Products
          </h1>
          <p className="text-gray-400 mt-1">
            Manage your product listings
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard/products/add")}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-green-500/30 transition"
        >
          + Add Product
        </button>

      </div>

      {/* Content Area */}
      {loading ? (
        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 text-gray-300 backdrop-blur-xl">
          Loading products...
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 text-gray-300 backdrop-blur-xl">
          No products found.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white/10 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl hover:scale-[1.02] transition overflow-hidden"
            >
              <ProductCard
                product={product}
                onDelete={handleDelete}
              />
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Products;