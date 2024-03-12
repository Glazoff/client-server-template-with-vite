import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'light',
  },
  reducers: {
    updateTheme(state, action) {
      const { payload } = action;

      state.mode = payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
