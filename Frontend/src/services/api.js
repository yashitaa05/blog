import axios from "axios";

console.log(import.meta.env.VITE_URL);
const API = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;