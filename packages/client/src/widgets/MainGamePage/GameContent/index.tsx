import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../MainGame/styles.module.scss';
import path from '@/App/Router/constants';
import { Engine } from '@/entries/GameEngine/Engine';
import { CanvasWidth, CanvasHeight } from '@/shared/constants/canvasConstants';
// import GameOver from '@/widgets/GameOver';

let gameEngine: Engine | null = null;

export default function GameContent() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  window.localStorage.setItem('score', score.toString());

  React.useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      gameEngine = new Engine({
        canvas,
        onGameOver(newScore) {
          setScore(newScore);
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
  }, [canvasRef]);

  useEffect(() => {
    gameEngine?.gameOver && navigate(path.GameOver);
  }, [gameEngine?.gameOver, score]);

  return (
    /* gameEngine?.gameOver ? <GameOver /> :  */ <canvas
      ref={canvasRef}
      className={styles.game__main}
    />
  );
}
