/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosInstance/axiosInstance";

// ....................login Api.........................

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const response = await axiosApi.post("/signin", data.cridential);
    if (response?.data?.token) {
      localStorage.setItem("token", response.data.token);
      data.navigate("/home");
      return response;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.value);
  }
});

// ........................register...............................

export const register = createAsyncThunk("auth/register", async data => {
  const response = await axiosApi.post("/signup-patient", data.credential);
  console.log("response", response);
  console.log("response", response.data.message);
  data.navigate("/login");
  return response;
});

// // .........................log out.....................................

// export const logout = createAsyncThunk("auth/logout", async navigate => {
//   const token = localStorage.getItem("token");
//   const response = await axiosApi.post(`authentication/logout/`, token);
//   if (response) {
//     localStorage.clear();
//     navigate("/login");
//   }
// });
