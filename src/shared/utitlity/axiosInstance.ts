// lib/axiosInstance.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_APP_API ?? "https://mint-1nmg.onrender.com/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    // "x-api-key": "CO1tfl8xcSbtmQD3054dc1a-301c-45ff-90eb-900b5e67ecc3",
  },
});

// Optionally, you can add interceptors to handle requests or responses
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
