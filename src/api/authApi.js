import { api } from "./baseApi";

export const register = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response;
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    console.error("Error saat daftar email:", errorMsg);
    throw new Error(errorMsg);
  }
};

export const verify = async (userData) => {
  try {
    const response = await api.post("/verify-email", userData);
    return response.data;
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    console.error("Error saat verifikasi email:", errorMsg);
    throw new Error(errorMsg);
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post("/login", userData);
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    console.error("Error saat login:", errorMsg);
    throw new Error(errorMsg);
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/logout", {});
    localStorage.removeItem("token");
    return response;
  } catch (error) {
    console.error(
      "Logout gagal:",
      error.response ? error.response.data.message : error.message
    );
  }
};
