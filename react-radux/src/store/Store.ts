import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from '../reducers/NewsReducer';
import { searchParamsSlice } from '../reducers/SearchReducer';

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    searchParams: searchParamsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
