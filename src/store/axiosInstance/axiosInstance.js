/** @format */

import axios from "axios";
// const API_URL_PROD = "https://api.xplor.in"
// const API_URL_DEV = "http://localhost:7000/";
const API_URL_DEV = "http://192.168.29.59:4000/";
export const axiosApi = axios.create({
  baseURL: API_URL_DEV,
});

axiosApi.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] =
        "Bearer " + localStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    return error;
  }
);
