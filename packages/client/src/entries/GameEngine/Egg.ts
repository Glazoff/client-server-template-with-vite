import eggImage from '../../assets/static/EggImage.svg';

type EggTypeProps = {
  x: number;
  y: number;
  speed?: number;
};
export class Egg {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  eggImage: HTMLImageElement;
  frames: string[];

  constructor({ x, y, speed }: EggTypeProps) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.speed = 2;
    this.frames = [eggImage, eggImage];
    this.eggImage = new Image();
    this.eggImage.src = eggImage;
  }

  // Для изменения скорости

  public update() {
    this.y += this.speed;
  }

  // отрисовка

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.eggImage, this.x, this.y, this.width, this.height);
  }

  public isOutOfBounds(canvasWidth: number) {
    return canvasWidth - this.y < 0;
  }
}
