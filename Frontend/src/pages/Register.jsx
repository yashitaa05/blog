import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_URL}/auth/register`, formData);
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Register Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01]"
      >
        
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide">
          Create Account
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            onChange={handleChange}
          />
        </div>

        <button
          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
        >
          Register
        </button>

        <p className="mt-6 text-center text-gray-300 text-sm">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300 font-medium ml-1 transition"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;