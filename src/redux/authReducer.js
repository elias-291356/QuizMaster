import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./thunk";

const initialState = {
  // auth: {
  username: " ",
  email: " ",
  // },
  token: "",
  isLoggedIn: false,
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
      // .addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled))
      // ------------ Registration -------------//
      .addCase(registerThunk.pending, (state) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoggedIn = false;

        // state.error = action.payload;
      })

      // ------------ Login -------------//
      .addCase(loginThunk.pending, (state) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.token = action.payload.token;
        console.log(action.payload);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      });
    // // ------------ Logout -------------//
    // .addCase(logoutThunk.pending, (state) => {
    //   state.isLoggedIn = true;
    //   state.error = null;
    // })
    // .addCase(logoutThunk.fulfilled, (state, action) => {
    //   state.isLoggedIn = false;
    //   state.userData = null;
    //   state.token = null;
    // })
    // .addCase(logoutThunk.rejected, (state, action) => {
    //   state.isLoggedIn = false;
    //   state.error = action.payload;
    // })

    // // ------------ refreshToken -------------//
    // .addCase(refreshUserThunk.pending, (state) => {
    //   state.isLoggedIn = true;
    //   state.error = null;
    // })
    // .addCase(refreshUserThunk.fulfilled, (state, action) => {
    //   state.isLoggedIn = false;
    //   state.userData = action.payload;
    // })
    // .addCase(refreshUserThunk.rejected, (state, action) => {
    //   state.isLoggedIn = false;
    //   state.error = action.payload;
    // });
  },
});

// export const { setSubmit } = userSlice.actions;
export const authReducer = userSlice.reducer;
