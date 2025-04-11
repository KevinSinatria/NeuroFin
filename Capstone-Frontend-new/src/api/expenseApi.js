import axios from "axios";

const API_URL = "http://localhost:9000/expenses";

export const getSpendingData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data.expenses;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createSpendingData = async (itemData) => {
  try {
    const response = await axios.post(API_URL, itemData);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating data:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const updateSpendingData = async (itemId, itemData) => {
  try {
    const response = await axios.put(API_URL + "/" + itemId, itemData);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating data:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const deleteSpendingData = async (itemId) => {
  try {
    const response = await axios.delete(API_URL + "/" + itemId);
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting data:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
