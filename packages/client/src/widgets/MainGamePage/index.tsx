import styles from './styles.module.scss';
import GameMainPageNav from '../../features/GameMainPageNav';
import Button from '../../shared/ui/button';
import Imagine from '../../shared/ui/imagine';
import Title from '../../shared/ui/title';
import React, { useEffect, useRef } from 'react';
import { Engine } from '@/entries/GameEngine/Engine';

export default function MainGamePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const gameEngine = new Engine(canvas);

      // размеры холста
      canvas.width = 720;
      canvas.height = 400;

      // старт движка
      gameEngine.start();

      const handleResize = () => {
        // обновление размеров холста
        canvas.width = 720;
        canvas.height = 400;
      };

      // обработчик изменения размера окна
      window.addEventListener('resize', handleResize);

      return () => {
        // Очистка обработчика изменения размера окна при размонтировании компонента
        window.removeEventListener('resize', handleResize);
        gameEngine.stop();
      };
    }
  }, []);

  // return <canvas ref={canvasRef} />;
  return (
    <main className={styles.game__main}>
      <canvas ref={canvasRef} />
      {/* <Title class={styles.game__title} label="Не урони !" />
      <GameMainPageNav />
      <Button class={styles.game__button} label="Начать игру" />
      <Imagine src="../src/images/wolf.png" class={styles.game__img} /> */}
    </main>
  );
}
