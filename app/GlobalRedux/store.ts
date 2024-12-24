"use client";

import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./Features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


