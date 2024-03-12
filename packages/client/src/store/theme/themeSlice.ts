import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    updateTheme(state, action) {
      const { payload } = action;

      state.theme = payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
