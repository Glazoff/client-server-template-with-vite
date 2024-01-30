import styles from './style.module.scss';
import Logo from '../../shared/ui/logo';
import MainPageWidget from '../../widgets/MainPage';

export default function MainPage() {
  return (
    <div className={styles.main}>
      <MainPageWidget />

      <footer className={styles.main__footer}>
        <Logo />
      </footer>
    </div>
  );
}
