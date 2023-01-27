import axios from "axios";
// axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});

// axios isntance middleware
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
