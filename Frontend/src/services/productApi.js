import API from "./api";

// Get all products
export const getProducts = () => API.get("/product/get");

// Add product
export const addProduct = (data) =>
  API.post("/product/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Update product
export const updateProduct = (id, data) =>
  API.put(`/product/update/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Delete product
export const deleteProduct = (id) => API.delete(`/product/delete/${id}`);
