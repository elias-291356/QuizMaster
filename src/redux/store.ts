import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
export const store = configureStore({
  reducer: {
    user: authReducer,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
  },
});
export type RootState = ReturnType<typeof store.getState>;
// export const persistor = persistStore(store);
