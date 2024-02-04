import styles from './styles.module.scss';
import GameOverBtns from '@/features/GameOverBtns';
import GameScore from '@/features/GameScore/GameScore';
import Imagine from '@/shared/ui/imagine';
import Title from '@/shared/ui/title';

export default function GameOverPage() {
  return (
    <div className={styles.over}>
      <Title label="Игра окончена" class={styles.over__title} />
      <Imagine src="../src/images/game-over.jpeg" class={styles.over__img} />
      <GameScore score={10} />

      <GameOverBtns />
    </div>
  );
}
