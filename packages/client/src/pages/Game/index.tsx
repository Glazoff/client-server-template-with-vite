import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
/* import Logo from '../../shared/ui/logo';
import MainGamePage from '../../widgets/MainGamePage'; */
import { Engine } from '@/entries/GameEngine/Engine';

export default function GameMainPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const engine = new Engine(canvas);

    engine.render();
  }, []);

  return (
    <div className={styles.game}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
  /* return (
    <div className={styles.game}>
      <MainGamePage />

      <footer className={styles.game__footer}>
        <Logo />
      </footer>
    </div>
  ); */
}
