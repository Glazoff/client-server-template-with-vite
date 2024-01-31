import eggImage from '../../assets/static/EggImage.svg';
export class Egg {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  eggImage: HTMLImageElement;

  constructor({ x, y }: { x: number; y: number; width: number; height: number; speed: number }) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.speed = 100;
    this.eggImage = new Image();
    this.eggImage.src = eggImage;
  }

  // Для изменения скорости

  update = () => {
    this.y -= this.speed;
  };

  // отрисовка

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.drawImage(this.eggImage, this.x, this.y, this.width, this.height);
  };

  // выход за границы

  isOutOfBounds = () => {
    return this.y + this.height < 0;
  };
}
