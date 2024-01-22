import styles from './styles.module.scss';
import GameMainPageNav from '../../features/GameMainPageNav';
import Button from '../../shared/button';
import Imagine from '../../shared/imagine';

export default function MainGamePage() {
  return (
    <main className={styles.game__main}>
      <Imagine src="../src/images/Волк.jpg" class={styles.game__img} />
      <nav className={styles.game__nav}>
        {/*компонент кнопки все равно будет, так что я подумал, что пусть будет и тут кастомная кнопка */}
        <Button class={styles.game__button} label="Начать игру" />

        <GameMainPageNav />
      </nav>
    </main>
  );
}
