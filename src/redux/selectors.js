// import { RootState } from "./store"; // Предположим, что у вас есть тип RootState, представляющий корневое состояние Redux

// export const selectIsSubmit = (state: RootState): boolean =>
//   state.user.isSubmit;

export const selectIsLogin = (state) => state.user.isLogin;
export const selectName = (state) => state.user.username;
export const selectError = (state) => state.user.error;
export const selectToken = (state) => state.user.token;
export const selectAccessToken = (state) => state.user.accessToken;
export const selectRefreshToken = (state) => state.user.refreshToken;
export const selectIsOpen = (state) => state.user.isOpen;
