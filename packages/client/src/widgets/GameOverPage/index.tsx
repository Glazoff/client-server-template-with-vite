import styles from './styles.module.scss';
import GameOverBtns from '@/features/GameOverBtns';
import GameScore from '@/features/GameScore';
import Imagine from '@/shared/ui/imagine';
import Title from '@/shared/ui/title';

export default function GameOverPage() {
  const score = window?.localStorage.getItem('score') || 0;

  return (
    <div className={styles.over}>
      <Title label="Игра окончена" class={styles.over__title} />
      <Imagine src="../src/assets/static/game-over.jpeg" class={styles.over__img} />
      <GameScore score={score} />

      <GameOverBtns />
    </div>
  );
}
