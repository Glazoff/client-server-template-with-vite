import { Outlet } from 'react-router-dom';
import styles from './MainGame/styles.module.scss';

export default function MainGamePage() {
  return (
    <main className={styles.game}>
      <Outlet />
    </main>
  );
}
