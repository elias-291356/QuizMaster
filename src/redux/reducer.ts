import { createSlice } from "@reduxjs/toolkit";
// import { registerThunk } from "../thunk";

const initialState = {
  isSubmit: false,
};

const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    setSubmit: (state, action) => {
      state.isSubmit = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    // ------------ Registration -------------//
    // .addCase(registerThunk.pending, state => {
    // })
    // .addCase(registerThunk.fulfilled, (state, action) => {
    //   state.userData = action.payload.user;
    // })
    // .addCase(registerThunk.rejected, (state, action) => {
    // })
  },
});

export const { setSubmit } = userSlice.actions;
export const userReducer = userSlice.reducer;
