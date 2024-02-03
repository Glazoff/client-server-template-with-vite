import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      avatar: '',
      display_name: '',
      email: '',
      first_name: '',
      id: 0,
      login: '',
      phone: '',
      second_name: '',
    },
  },
  reducers: {
    updateUser(state, action) {
      const { payload } = action;

      state.user = {
        ...payload,
      };
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
