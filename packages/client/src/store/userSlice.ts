import { createSlice } from '@reduxjs/toolkit';

export type User = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
};

const initialState: User = {
  avatar: '',
  display_name: '',
  email: '',
  first_name: '',
  id: 0,
  login: '',
  phone: '',
  second_name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      const { payload } = action;

      state = {
        ...payload,
      };
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
