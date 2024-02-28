import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import {
  leaderboardAddUserAction,
  leaderboardGetAllAction,
  leaderboardGetTeamAction,
} from './lideboardAction';

export type LeadeboardInfoData = {
  id: number;
  score: number | string;
  avatar: string;
  name: string;
  teamName: string;
  FrontWearRanking: number;
};

interface LeaderboardData {
  id: Key | null | undefined;
  data: LeadeboardInfoData;
}

type LeaderboardStateType = {
  dataTeam: LeaderboardData[];
  dataAll: any[] | null;
  ratingFieldName: string;
  total: number;
  page: number;
  size: number;
  pages: number;
  status: 'init' | 'loading' | 'success' | 'error';
  error: string | undefined;
};

const initialState: LeaderboardStateType = {
  dataTeam: [],
  dataAll: [],
  ratingFieldName: 'score',
  total: 0,
  page: 1,
  size: 1,
  pages: 0,
  status: 'init',
  error: undefined,
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<LeaderboardStateType>) => {
    builder
      .addCase(leaderboardAddUserAction.fulfilled, (state, action) => {
        state.status = 'success';
      })
      .addCase(leaderboardAddUserAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(leaderboardAddUserAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'Ошибка...';
      })
      .addCase(leaderboardGetAllAction.fulfilled, (state, action) => {
        state.status = 'success';
        state.dataAll = action.payload;
      })
      .addCase(leaderboardGetAllAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(leaderboardGetAllAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'Ошибка...';
      })
      .addCase(leaderboardGetTeamAction.fulfilled, (state, action) => {
        state.status = 'success';
        state.dataTeam = action.payload;
      })
      .addCase(leaderboardGetTeamAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(leaderboardGetTeamAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'Ошибка...';
      });
  },
});

export const { reducer: leaderboardReducer, actions: leaderboardAction } = leaderboardSlice;
