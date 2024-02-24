import React from 'react';
import styles from './styles.module.scss';
import LiderItem from '@/features/LiderItem';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  leaderboardAddUserAction,
  leaderboardGetAllAction,
  leaderboardGetTeamAction,
} from '@/store/liderboard/lideboardAction';

type Lider = {
  id: number;
  position: number;
  avatar: string;
  nikname: string;
  score: number;
};

type Liders = Lider[];

const mockLiders: Liders = [
  {
    id: 1,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 2,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
  {
    id: 3,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 4,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
  {
    id: 5,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 6,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
  {
    id: 7,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 8,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
  {
    id: 9,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 10,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
];

export default function LiderList() {
  const dispatch = useAppDispatch();
  const leaderboardAll = useAppSelector((state) => state.leaderboard.dataAll);
  const { avatar, login } = useAppSelector((state) => state.user);
  console.log(leaderboardAll);

  const mokLeader = {
    ratingFieldName: 'score',
    cursor: 0,
    limit: 10,
  };

  const registerLead = {
    data: {
      FrontWearRanking: '15000',
      score: '15000',
      nikcname: login,
      avatar: avatar,
      teamName: 'FrontWear',
    },
    ratingFieldName: 'score',
    teamName: 'FrontWear',
  };

  const getMyTeam = {
    teamName: 'FrontWear',
    ratingFieldName: 'score',
    cursor: 0,
    limit: 10,
  };

  React.useEffect(() => {
    // dispatch(leaderboardAddUserAction(registerLead));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch(leaderboardGetAllAction(mokLeader));
    // dispatch(leaderboardGetTeamAction(getMyTeam));
  }, []);
  return (
    <div className={styles.lider_list}>
      {leaderboardAll && leaderboardAll.map((item) => <LiderItem key={item.id} {...item.data} />)}
    </div>
  );
}
