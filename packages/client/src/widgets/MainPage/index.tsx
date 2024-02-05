import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import GameMainPageNav from '../../features/MainPageNav';
import Button from '../../shared/ui/button';
import Imagine from '../../shared/ui/imagine';
import Title from '../../shared/ui/title';
import path from '@/App/Router/constants';

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <Title class={styles.main__title} label="Не урони !" />
      <GameMainPageNav />
      <Button
        class={styles.main__button}
        label="Начать игру"
        onClick={() => {
          navigate(path.Game);
        }}
      />
      <Imagine src="../src/images/wolf.png" class={styles.main__img} />
    </main>
  );
}
