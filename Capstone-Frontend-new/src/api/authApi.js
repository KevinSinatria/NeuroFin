import axios from "axios";

const API_URL = "http://localhost:9000";

export const register = async (userData) => {
  try {
    const response = await axios.post(API_URL + "/register", userData);
    return response;
  } catch (error) {
    console.error(
      "Error creating data:",
      error.response ? error.response.data.message : error.message
    );
    throw new Error(error.response.data.message);
  }
};

export const verify = async (userData) => {
  try {
    const response = await axios.post(API_URL + "/verify-email", userData);
    return response;
  } catch (error) {
    console.error(
      "Error creating data:",
      error.response ? error.response.data.message : error.message
    );
    throw new Error(error.response.data.message);
  }
};


