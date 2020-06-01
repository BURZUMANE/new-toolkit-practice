import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './reducers/userReducer';
import { newsSlice } from './reducers/newsReducer';

const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [newsSlice.name]: newsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
