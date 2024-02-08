import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer";

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
    user: userReducer,
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
