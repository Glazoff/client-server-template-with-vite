import React from 'react';
import { Box } from '@mui/material';
import styles from './styles.module.scss';
import LiderItem from '@/features/LiderItem';
import { useObserve } from '@/shared/hooks/useObserve';
import { useAppDispatch, useAppSelector } from '@/store';
import { leaderboardGetTeamAction } from '@/store/liderboard/lideboardAction';

export default function LiderList() {
  const dispatch = useAppDispatch();
  const { dataTeam, status, fullPagesTeam } = useAppSelector((state) => state.leaderboard);
  const lastElement = React.useRef<HTMLDivElement | null>(null);
  const [page, setPage] = React.useState(0);

  useObserve(lastElement, status, () => {
    setPage((prev) => prev + 1);
  });

  React.useEffect(() => {
    if (fullPagesTeam === true) {
      console.log('все загружено');
    } else {
      dispatch(
        leaderboardGetTeamAction({
          teamName: 'FrontWear',
          ratingFieldName: 'score',
          cursor: page,
          limit: 10,
        })
      );
    }
  }, [page]);

  return (
    <Box className={styles.lider_list}>
      {dataTeam?.map((item, index) => <LiderItem key={index} {...item.data} />)}
      <div ref={lastElement} />
    </Box>
  );
}
