import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-all duration-300">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 text-white">

        <h2 className="text-xl font-bold truncate">
          {product.title}
        </h2>

        <p className="text-gray-300 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">

          <button
            onClick={() =>
              navigate(`/dashboard/products/edit/${product._id}`)
            }
            className="flex-1 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-600 text-white font-medium shadow-md hover:shadow-blue-500/30 transition active:scale-95"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(product._id)}
            className="flex-1 py-2 rounded-xl bg-red-500/90 hover:bg-red-600 text-white font-medium shadow-md hover:shadow-red-500/30 transition active:scale-95"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;