import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    token: null,
  },

  reducers: {
    getUser: (state, { payload }) => ({
      ...state,
      user: { ...state.user, nickName: payload.name },
    }),
  },
});
