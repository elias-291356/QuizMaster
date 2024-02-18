import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  // currentUserRequest,
  loginRequest,
  // logOutRequest,
  registerRequest,
  setToken,
} from "../service/api";

export const registerThunk = createAsyncThunk(
  "user/registerThunk",
  async (formData, thunkAPI) => {
    try {
      const data = await registerRequest(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "user/loginThunk",
  async (formData, thunkAPI) => {
    try {
      const data = await loginRequest(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
