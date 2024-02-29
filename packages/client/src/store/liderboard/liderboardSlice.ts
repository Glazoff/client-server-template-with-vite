import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import {
  leaderboardAddUserAction,
  leaderboardGetAllAction,
  leaderboardGetTeamAction,
} from './lideboardAction';

export type LeadeboardInfoData = {
  score: number | string;
  avatar: string;
  name: string;
  teamName: string;
  FrontWearRanking: number;
};

export interface LeaderboardData {
  data: LeadeboardInfoData;
}

type LeaderboardStateType = {
  dataTeam: LeaderboardData[];
  dataAll: any[];
  ratingFieldName: string;
  total: number;
  page: number;
  size: number;
  fullPagesTeam: boolean;
  fullPagesAll: boolean;
  status: 'init' | 'loading' | 'success' | 'error';
  error: string | undefined;
};

const initialState: LeaderboardStateType = {
  dataTeam: [],
  dataAll: [],
  ratingFieldName: 'score',
  total: 0,
  page: 0,
  size: 1,
  fullPagesTeam: false,
  fullPagesAll: false,
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
        if (action.payload.length === 0) {
          state.fullPagesAll = true;
        } else {
          state.dataAll = [...state.dataAll, ...action.payload];
        }
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
        if (action.payload.length === 0) {
          state.fullPagesTeam = true;
        } else {
          state.dataTeam = [...state.dataTeam, ...action.payload];
        }
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
