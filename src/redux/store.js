import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactReducer } from './contactsSlice';
import { authReduser } from './AuthSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice.reducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);