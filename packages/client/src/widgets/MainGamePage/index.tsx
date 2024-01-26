import styles from './styles.module.scss';
import GameMainPageNav from '../../features/GameMainPageNav';
import Button from '../../shared/ui/button';
import Imagine from '../../shared/ui/imagine';
import Title from '../../shared/ui/title';

export default function MainGamePage() {
  return (
    <main className={styles.game__main}>
      <Title class={styles.game__title} label="Не урони !" />
      <GameMainPageNav />
      <Button class={styles.game__button} label="Начать игру" />
      <Imagine src="../src/images/wolf.png" class={styles.game__img} />
    </main>
  );
}
