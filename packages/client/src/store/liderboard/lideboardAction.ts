import { createAsyncThunk } from '@reduxjs/toolkit';
import { LeaderboardData } from './liderboardSlice';
import store from '..';
import {
  leaderboardAddUser,
  leaderboardGetAll,
  leaderboardGetTeam,
} from '@/shared/api/apiLideboard';

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
  async (data, { rejectWithValue }) => {
    try {
      const response: LeaderboardData[] = await leaderboardGetTeam(data);
      const dataTeam = store.getState().leaderboard.dataTeam;

      // TODO: Из-за strict mode useEffect срабатывает дважды и 2 раза происходит обращение к серверу.
      // Новая порция данных прибавляется к массиву в сторе и из-за этого данные дублируются в нем.
      // Данные прибавляются к массиву в сторе из-за варианта пагинации "Бесконечная лента"

      const newData: LeaderboardData[] = [];
      response.forEach((element) => {
        if (dataTeam.some((v, i, a) => v.data.name === element.data.name)) {
          console.log('исключаем одинаковые данные');
        } else {
          newData.push(element);
        }
      });

      return newData;
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
