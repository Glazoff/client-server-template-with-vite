import styles from './style.module.scss';
import Logo from '../../shared/logo';
import MainGamePage from '../../widgets/MainGamePage';

export default function GameMainPage() {
  return (
    <div className={styles.game}>
      <MainGamePage />

      <footer className={styles.game__footer}>
        <Logo />
      </footer>
    </div>
  );
}
