import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { LeadeboardInfoData } from './liderboardSlice';
import {
  leaderboardAddUser,
  leaderboardGetAll,
  leaderboardGetTeam,
} from '@/shared/api/apiLideboard';

interface RequestDataLeaderboardAddUser {
  data: LeadeboardInfoData[];
  ratingFieldName: string;
  teamName: string;
}

export const leaderboardGetAllAction: any = createAsyncThunk(
  'leaderboard/leaderboardGetAllAction',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await leaderboardGetAll(data);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue;
    }
  }
);

export const leaderboardGetTeamAction: any = createAsyncThunk(
  'leaderboard/leaderboardGetTeamAction',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await leaderboardGetTeam(data);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue;
    }
  }
);

export const leaderboardAddUserAction: any = createAsyncThunk(
  'leaderboard/leaderboardAddUserAction',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await leaderboardAddUser(data);
      return fulfillWithValue(response);
    } catch (error: unknown) {
      return rejectWithValue;
    }
  }
);
