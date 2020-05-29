import { configureStore, createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
  name: 'news',
  initialState: [
    { id: '1312', post: 'dsfsdsdf' },
    { id: '123123', post: 'asdasdasds' },
  ],
  reducers: {
    addNews: (state, { payload }) => {
      console.log(payload);
      return [...state, ...payload];
    },
  },
});

const store = configureStore({
  reducer: newsSlice.reducer,
});

export default store;
