import axios from "axios";

const API = axios.create({
  baseURL: "process.env.VITE_URL|| 'http://localhost:7000'",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;