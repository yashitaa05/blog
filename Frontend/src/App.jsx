import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Profile from "./pages/Profile";

import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
      <Routes>

        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <div className="p-10 text-xl text-gray-700">
                Welcome to your dashboard. Use the menu to manage products or view your profile.
              </div>
            }
          />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
  );
};

export default App;