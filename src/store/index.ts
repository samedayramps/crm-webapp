import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './quotesSlice';
import customersReducer from './customersSlice';
import settingsReducer from './settingsSlice';

export const store = configureStore({
  reducer: {
    quotes: quotesReducer,
    customers: customersReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;