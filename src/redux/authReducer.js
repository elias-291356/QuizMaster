import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./thunk";

const initialState = {
  // auth: {
  username: " ",
  email: " ",
  // },
  token: null,
  isLogin: false,
  error: null,
  accessToken: null,
  refreshToken: null,
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
        state.isLogin = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLogin = true;
        state.username = action.payload.username;
        state.email = action.payload.email;
        // state.token = action.payload.token;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        console.log(action.payload);
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLogin = false;

        // state.error = action.payload;
      })

      // ------------ Login -------------//
      .addCase(loginThunk.pending, (state) => {
        state.isLogin = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLogin = true;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        console.log(action.payload);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLogin = false;
        state.error = action.payload;
      });
    // // ------------ Logout -------------//
    // .addCase(logoutThunk.pending, (state) => {
    //   state.isLogin = true;
    //   state.error = null;
    // })
    // .addCase(logoutThunk.fulfilled, (state, action) => {
    //   state.isLogin = false;
    //   state.userData = null;
    //   state.token = null;
    // })
    // .addCase(logoutThunk.rejected, (state, action) => {
    //   state.isLogin = false;
    //   state.error = action.payload;
    // })

    // // ------------ refreshToken -------------//
    // .addCase(refreshUserThunk.pending, (state) => {
    //   state.isLogin = true;
    //   state.error = null;
    // })
    // .addCase(refreshUserThunk.fulfilled, (state, action) => {
    //   state.isLogin = false;
    //   state.userData = action.payload;
    // })
    // .addCase(refreshUserThunk.rejected, (state, action) => {
    //   state.isLogin = false;
    //   state.error = action.payload;
    // });
  },
});

// export const { setSubmit } = userSlice.actions;
export const authReducer = userSlice.reducer;
