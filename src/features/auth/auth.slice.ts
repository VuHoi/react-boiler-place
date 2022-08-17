import storage from 'config/persistStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { UserResponse } from './auth.type';

export interface AuthState {
  user: UserResponse | null;
}

const initialState: AuthState = {
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload;
    },
  },
});

const reducer = persistReducer(
  {
    key: '1fox:auth',
    storage,
    whitelist: ['user'],
  },
  slice.reducer,
);

export const { setUser, reset } = slice.actions;

export default reducer;
