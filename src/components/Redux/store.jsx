// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
