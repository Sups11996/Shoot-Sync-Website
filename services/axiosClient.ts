import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    return Promise.reject({
      message,
      status: error.response?.status ?? null,
      raw: error,
    });
  }
);

export default axiosClient;