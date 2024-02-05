/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
// import path from '@/App/Router/constants';
import GameOver from '../GameOver';
import { Engine } from '@/entries/GameEngine/Engine';

let engine: Engine | null;

export default function GameMainPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);

  const reset = () => {
    engine?.resetGame();
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    engine = new Engine({
      canvas,
      onGameOver(newScore) {
        setScore(newScore);
      },
    });

    console.log(score);

    engine.render();
  }, []);

  return (
    <div className={styles.game}>
      {engine?.gameOver ? (
        <GameOver onClick={reset} />
      ) : (
        <canvas ref={canvasRef} className={styles.canvas} />
      )}
    </div>
  );
}
