import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { LeaderboardStateType, leaderboardReducer } from './liderboard/liderboardSlice';
import userReducer, { User } from './user/userSlice';

export const createStore = (
  initState: { leaderboard: LeaderboardStateType; user: User } | object
) =>
  configureStore({
    reducer: {
      user: userReducer,
      leaderboard: leaderboardReducer,
    },
    preloadedState: initState,
  });

const store = createStore({});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

export default store;
