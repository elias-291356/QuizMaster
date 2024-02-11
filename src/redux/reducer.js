import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./thunk";

const initialState = {
  auth: {
    name: " ",
    email: " ",
  },
  token: "",
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setSubmit: (state, action) => {
      // state.isSubmit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ------------ Registration -------------//
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.auth.name = action.payload.name;
        state.auth.email = action.payload.email;

        console.log(action.payload);
        // state.token = action.payload.token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        // state.error = action.payload;
      });

    // // ------------ Login -------------//
    // .addCase(loginThunk.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(loginThunk.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.userData = action.payload.user;
    //   state.token = action.payload.token;
    // })
    // .addCase(loginThunk.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })
    // // ------------ Logout -------------//
    // .addCase(logoutThunk.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(logoutThunk.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.userData = null;
    //   state.token = null;
    // })
    // .addCase(logoutThunk.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })

    // // ------------ refreshToken -------------//
    // .addCase(refreshUserThunk.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(refreshUserThunk.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.userData = action.payload;
    // })
    // .addCase(refreshUserThunk.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

// export const { setSubmit } = userSlice.actions;
export const authReducer = userSlice.reducer;
