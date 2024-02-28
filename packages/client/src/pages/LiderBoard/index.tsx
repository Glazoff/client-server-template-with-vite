import React from 'react';
import { useAppDispatch } from '@/store';
import {
  leaderboardGetAllAction,
  leaderboardGetTeamAction,
} from '@/store/liderboard/lideboardAction';
import LiderBoardPage from '@/widgets/LiderBoardPage';

export default function LiderBoard() {
  const getMyTeam = {
    teamName: 'FrontWear',
    ratingFieldName: 'FrontWearRanking',
    cursor: 0,
    limit: 10,
  };

  const mokLeader = {
    ratingFieldName: 'score',
    cursor: 0,
    limit: 10,
  };
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(leaderboardGetTeamAction(getMyTeam));
    dispatch(leaderboardGetAllAction(mokLeader));
  }, [dispatch]);
  return (
    <div>
      <LiderBoardPage />
    </div>
  );
}
