import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './styles.module.scss';
import GameOverBtns from '@/features/GameOverBtns';
import GameScore from '@/features/GameScore';
import Imagine from '@/shared/ui/imagine';
import Title from '@/shared/ui/title';
import { useAppDispatch } from '@/store';
import { leaderboardAddUserAction } from '@/store/liderboard/lideboardAction';

export default function GameOverPage() {
  const score = window.localStorage.getItem('score') || 0;
  const dispatch = useAppDispatch();

  const profileData: any = useLoaderData();

  const registerLead = {
    data: {
      FrontWearRanking: score,
      score: score,
      name: profileData.login,
      avatar: 'https://ya-praktikum.tech/api/v2/resources' + profileData.avatar,
      teamName: 'FrontWear',
    },
    ratingFieldName: 'FrontWearRanking',
    teamName: 'FrontWear',
  };

  React.useEffect(() => {
    dispatch(leaderboardAddUserAction(registerLead));
  }, [registerLead]);

  return (
    <div className={styles.over}>
      <Title label="Игра окончена" class={styles.over__title} />
      <Imagine src="../src/assets/static/game-over.jpeg" class={styles.over__img} />
      <GameScore score={score} />

      <GameOverBtns />
    </div>
  );
}
