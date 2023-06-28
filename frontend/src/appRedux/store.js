import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import goalReducer from "../appRedux/goal/goalSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goal: goalReducer
  },
})