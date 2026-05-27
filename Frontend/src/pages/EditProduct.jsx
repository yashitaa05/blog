import React, { useEffect, useState } from "react";
import API from "../services/api";
import { updateProduct } from "../services/productApi";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get("/product/get");
        const product = res.data.find((item) => item._id === id);
        if (product) {
          setForm({
            title: product.title || "",
            description: product.description || "",
            category: product.category || "",
            price: product.price || "",
            image: product.image || null,
          });
        }
      } catch (error) {
        console.error(error);
        alert("Unable to load product details.");
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("category", form.category);
    data.append("price", form.price);
    if (form.image instanceof File) {
      data.append("image", form.image);
    }

    await updateProduct(id, data);

    navigate("/dashboard/products");
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-xl">
        <input
          className="border p-3 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
        />

        <input
          className="border p-3 rounded"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          placeholder="Description"
        />

        <input
          className="border p-3 rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          placeholder="Category"
        />

        <input
          className="border p-3 rounded"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Price"
        />

        <input
          type="file"
          onChange={(e) =>
            setForm({ ...form, image: e.target.files[0] })
          }
          className="border p-3 rounded"
        />

        <button className="bg-blue-500 text-white p-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;