import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

export default function MainGamePage() {
  return (
    <main className={styles.game__main}>
      <Outlet />
    </main>
  );
}
