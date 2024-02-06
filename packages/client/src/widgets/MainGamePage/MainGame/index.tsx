import { useNavigate } from 'react-router-dom';
import GameMainPageNav from '../../../features/GameMainPageNav';
import Button from '../../../shared/ui/button';
import Imagine from '../../../shared/ui/imagine';
import Title from '../../../shared/ui/title';
import styles from '../styles.module.scss';
import path from '@/App/Router/constants';

export default function MainGame() {
  const navigate = useNavigate();

  function goGame() {
    console.log('go');
    navigate(path.GameStart);
  }

  return (
    <>
      <Title class={styles.game__title} label="Не урони !" />
      <GameMainPageNav />
      <Button class={styles.game__button} label="Начать игру" onClick={goGame} />
      <Imagine src="../src/images/wolf.png" class={styles.game__img} />
    </>
  );
}
