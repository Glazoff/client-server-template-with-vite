import styles from './styles.module.scss';
import GameOverPage from '@/widgets/GameOverPage';

export default function GameOver() {
  return (
    <div className={styles.game}>
      <GameOverPage />
    </div>
  );
}
