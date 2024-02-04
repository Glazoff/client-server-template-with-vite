import eggImage from '../../assets/static/EggImage.svg';
export class Egg {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  eggImage: HTMLImageElement;
  currentAnimationFrame: number;
  frames: string[];
  animationTimer: NodeJS.Timeout | null;
  moveEggDirection: number;

  constructor({ x, y }: { x: number; y: number; width: number; height: number; speed: number }) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.speed = 0.5;
    this.frames = [eggImage, eggImage];
    this.eggImage = new Image();
    this.eggImage.src = eggImage;
    this.currentAnimationFrame = 0;
    this.eggImage.src = this.frames[this.currentAnimationFrame];
    this.animationTimer = null;
    this.moveEggDirection = 0;
  }

  // Для изменения скорости

  update = (canvasHeight: number) => {
    this.y += this.speed;
  };

  // отрисовка

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.drawImage(this.eggImage, this.x, this.y, this.width, this.height);
  };
}
