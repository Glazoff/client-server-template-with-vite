/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
// import path from '@/App/Router/constants';
import GameOver from '../GameOver';
import { Engine } from '@/entries/GameEngine/Engine';

let engine: Engine | null;

export default function GameMainPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    engine = new Engine(canvas);

    engine.render();
  }, []);

  return (
    <div className={styles.game}>
      {engine?.gameOver ? <GameOver /> : <canvas ref={canvasRef} className={styles.canvas} />}
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
