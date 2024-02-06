import React from 'react';
import { Engine } from '@/entries/GameEngine/Engine';
import { CanvasWidth, CanvasHeight } from '@/shared/constants/canvasConstants';

export default function GameContent() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const gameEngine = new Engine(canvas);

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
        gameEngine.stop();
      };
    }
  }, []);
  return <canvas ref={canvasRef} />;
}
