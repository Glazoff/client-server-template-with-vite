import styles from './styles.module.scss';
import GameOverPage from '@/widgets/GameOverPage';

interface Props {
  onClick: () => void;
}

export default function GameOver(props: Props) {
  return (
    <div className={styles.game}>
      <GameOverPage onClick={props.onClick} />
    </div>
  );
}
