import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  leaderboardAddUser,
  leaderboardGetAll,
  leaderboardGetTeam,
} from '@/shared/api/apiLideboard';

export const leaderboardGetAllAction = createAsyncThunk(
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

export const leaderboardGetTeamAction = createAsyncThunk(
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

export const leaderboardAddUserAction = createAsyncThunk(
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
