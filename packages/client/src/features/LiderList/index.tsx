import React from 'react';
import styles from './styles.module.scss';
import LiderItem from '@/features/LiderItem';
import { useAppSelector } from '@/store';

export default function LiderList() {
  const { dataTeam } = useAppSelector((state) => state.leaderboard);

  return (
    <div className={styles.lider_list}>
      {dataTeam && dataTeam.map((item, index) => <LiderItem key={index} {...item.data} />)}
    </div>
  );
}
