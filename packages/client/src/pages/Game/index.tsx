import styles from './style.module.scss';
import Logo from '../../shared/ui/logo';
import MainGamePage from '../../widgets/MainGamePage';
// import React, { useEffect, useRef } from 'react';
// import { Engine } from '@/entries/GameEngine/Engine';

export default function GameMainPage() {
  // const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // useEffect(() => {
  //   if (canvasRef?.current) {
  //     const canvas = canvasRef.current;
  //     const gameEngine = new Engine(canvas);

  //     // размеры холста
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;

  //     // старт движка
  //     gameEngine.start();

  //     const handleResize = () => {
  //       // обновление размеров холста
  //       canvas.width = window.innerWidth;
  //       canvas.height = window.innerHeight;
  //     };

  //     // обработчик изменения размера окна
  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       // Очистка обработчика изменения размера окна при размонтировании компонента
  //       window.removeEventListener('resize', handleResize);
  //       gameEngine.stop();
  //     };
  //   }
  // }, []);

  // return <canvas ref={canvasRef} />;
  return (
    <div className={styles.game}>
      <MainGamePage />

      <footer className={styles.game__footer}>
        <Logo />
      </footer>
    </div>
  );
}
