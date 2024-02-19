/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useEffect, useState } from 'react';
import styles from '../MainGame/styles.module.scss';
import path from '@/App/Router/constants';
import { Engine } from '@/entries/GameEngine/Engine';
import { CanvasWidth, CanvasHeight } from '@/shared/constants/canvasConstants';

let gameEngine: Engine | null = null;

export default function GameContent() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      gameEngine = new Engine({
        canvas,
        onGameOver(newScore) {
          setScore(newScore);
          window.localStorage.setItem('score', newScore.toString());
          // с navigate постоянно переедресовывает на страницу gameOver
          window.location.replace(path.GameOver);
        },
      });

      // размеры холста
      canvas.width = CanvasWidth;
      canvas.height = CanvasHeight;

      // старт движка
      gameEngine.start();

      const handleResize = () => {
        // обновление размеров холста
        canvas.width = CanvasWidth;
        canvas.height = CanvasHeight;
      };

      // обработчик изменения размера окна
      window.addEventListener('resize', handleResize);

      return () => {
        // Очистка обработчика изменения размера окна при размонтировании компонента
        window.removeEventListener('resize', handleResize);
        gameEngine?.stop();
      };
    }
  }, []);

  return <canvas ref={canvasRef} className={styles.game__main} />;
}
