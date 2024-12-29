"use client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  username: string;
  password: string;
}

interface UserState {
  loading: boolean;
  user: User | null;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

//async action
export const loginUser = createAsyncThunk<
  User,
  { username: string; password: string }
>("user/loginUser", async (userCredentials) => {
  const request = await axios.post(
    "http://localhost:3000/user/login",
    userCredentials,
  );

  const userData = request.data.data;
  localStorage.setItem("user", JSON.stringify(userData));
  return userData;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (
          action.error.message === "Request failed with status code 401" ||
          "Request failed with status code 400"
        ) {
          state.error = "Access Denied! Invalid Credentials";
        } else {
          state.error = action.error.message || "An Unknown error occurred";
        }
      });
  },
});

export default userSlice.reducer;

//action
//reducer
//slice
