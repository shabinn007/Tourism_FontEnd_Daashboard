/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./Auth/authSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
