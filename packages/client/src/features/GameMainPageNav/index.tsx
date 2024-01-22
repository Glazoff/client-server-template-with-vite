import styles from './styles.module.scss';
import path from '../../App/Router/constants';
import LinkItem from '../../shared/link';

export default function GameMainPageNav() {
  const test = 'test';
  console.log(test);
  return (
    <nav className={styles.game__nav}>
      <LinkItem path={path.Profile} variant="blue" label="Профиль" />
      <LinkItem path={path.LiderBoard} label="Доска лидеров" />
      <LinkItem path={path.Forum} variant="blue" label="Форум" />
      <LinkItem path={'#'} label="Как играть?" />
    </nav>
  );
}
