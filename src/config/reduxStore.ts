import { AUTH_API_REDUCER_KEY, authApi } from "../features/auth/auth.service";
import authReducer from "../features/auth/auth.slice";

import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
// overview

const rootReducer = combineReducers({
  authReducer,
  [AUTH_API_REDUCER_KEY]: authApi.reducer,
});

export const makeStore = (opts?: ConfigureStoreOptions["preloadedState"]) => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware: any) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([]);
    },
    ...opts,
  });
};

export const store = makeStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
