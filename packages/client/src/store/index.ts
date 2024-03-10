import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { leaderboardReducer } from './liderboard/liderboardSlice';
import { themeReducer } from './theme/themeReducer';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    leaderboard: leaderboardReducer,
    theme: themeReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export default store;
