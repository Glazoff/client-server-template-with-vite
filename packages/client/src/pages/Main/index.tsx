import styles from './style.module.scss';
import Logo from '../../shared/ui/logo';
import MainGamePage from '../../widgets/MainGamePage';

export default function MainPage() {
  return (
    <div className={styles.main}>
      <MainGamePage />

      <footer className={styles.main__footer}>
        <Logo />
      </footer>
    </div>
  );
}
