import { api } from "./baseApi";

export const getSpendingData = async () => {
  try {
    const response = await api.get("/expenses");
    return response.data.data.expenses;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("Error fetching data:", error);
    }
    throw error;
  }
};

export const createSpendingData = async (itemData) => {
  try {
    const response = await api.post("/expenses", itemData);
    return response.data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(
        "Error creating data:",
        error.response ? error.response.data : error.message
      );
    }
    throw error;
  }
};

export const updateSpendingData = async (itemId, itemData) => {
  try {
    const response = await api.put("/expenses/" + itemId, itemData);
    return response.data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(
        "Error updating data:",
        error.response ? error.response.data : error.message
      );
    }
    throw error;
  }
};

export const deleteSpendingData = async (itemId) => {
  try {
    const response = await api.delete("/expenses/" + itemId);
    return response.data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(
        "Error deleting data:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  }
};