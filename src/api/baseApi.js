import axios from "axios";

export const api = axios.create({
  baseURL: "https://neurofin-be.vercel.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
