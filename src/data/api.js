import axios from "axios";

const API_URL = "";

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

const makeRequest = async (method, url, data = null) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export default makeRequest;