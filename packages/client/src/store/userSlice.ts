import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    updateUser(state, action) {
      const { payload } = action;

      state.user = {
        ...payload.user,
      };
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
