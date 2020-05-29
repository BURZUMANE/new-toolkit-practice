import { configureStore, createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
  name: 'news',
  initialState: [
    { newsID: '1312', post: 'dsfsdsdf' },
    { newsID: '123123', post: 'asdasdasds' },
  ],
  reducers: {
    addNews: (state, { payload }) => {
      return [...state, ...payload];
    },
  },
});

const store = configureStore({
  reducer: newsSlice.reducer,
});

export default store;
