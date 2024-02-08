import styles from './styles.module.scss';
import GameOverPage from '@/widgets/GameOverPage';

/* interface PropsGameOver {
  onClick: () => void;
} */

export default function GameOver(/* props: PropsGameOver */) {
  return (
    <div className={styles.game}>
      <GameOverPage /* onClick={props.onClick} */ />
    </div>
  );
}
