import { Box } from '@mui/material';
import styles from './style.module.scss';
import FooterLiderBoard from '@/features/FooterLiderBoard';
import HeaderLiderBoard from '@/features/HeaderLiderBoard';
import LiderList from '@/features/LiderList';

export default function LiderBoardPage() {
  return (
    <Box className={styles.lider_board}>
      <HeaderLiderBoard />
      <LiderList />
      <FooterLiderBoard />
    </Box>
  );
}
