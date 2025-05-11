import axios from "axios";

export const api = axios.create({
  baseURL: "https://neurofin-be.vercel.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
