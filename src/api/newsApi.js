<<<<<<< HEAD
import axios from "axios";

const API_KEY = "acX7nHW5bvC8vOKpES1hWCHwIKhmZ4IspZ7OydD6";

export const getFinanceNews = async () => {
  try {
    const response = await axios.get("https://api.marketaux.com/v1/news/all", {
      params: {
        language: "id",
        limit: 2,
        api_token: API_KEY,
        filter_entities: true,
        symbol: "TSLA%2CAMZN%2CMSFT",
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Gagal fetch berita:", error);
  }
};
=======
import axios from "axios";

const API_KEY = "acX7nHW5bvC8vOKpES1hWCHwIKhmZ4IspZ7OydD6";

export const getFinanceNews = async () => {
  try {
    const response = await axios.get("https://api.marketaux.com/v1/news/all", {
      params: {
        language: "id",
        limit: 2,
        api_token: API_KEY,
        filter_entities: true,
        symbol: "TSLA%2CAMZN%2CMSFT",
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Gagal fetch berita:", error);
  }
};
>>>>>>> 77455b3b90678c57d60f997c39d264eee681d72b
