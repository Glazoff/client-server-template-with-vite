import styles from './styles.module.scss';
import GameOverBtns from '@/features/GameOverBtns';
import GameScore from '@/features/GameScore';
import Imagine from '@/shared/ui/imagine';
import Title from '@/shared/ui/title';

interface Props {
  onClick: () => void;
}

export default function GameOverPage(props: Props) {
  const score = window.localStorage.getItem('score') || 0;

  return (
    <div className={styles.over}>
      <Title label="Игра окончена" class={styles.over__title} />
      <Imagine src="../src/images/game-over.jpeg" class={styles.over__img} />
      <GameScore score={score} />

      <GameOverBtns onClick={props.onClick} />
    </div>
  );
}
