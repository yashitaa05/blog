import React, { useState } from "react";
import { addProduct } from "../services/productApi";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.image) {
      alert("Please fill in title, description, and select an image.");
      return;
    }

    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("category", form.category);
    data.append("price", form.price);
    data.append("image", form.image);

    await addProduct(data);

    navigate("/dashboard/products");
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="price"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <button className="bg-green-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;