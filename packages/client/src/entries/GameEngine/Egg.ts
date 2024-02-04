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
    // this.y += this.moveEggDirection * this.speed;
    // this.y = Math.max(0, Math.min(this.y, canvasHeight - this.height));
    // this.moveDown();
  };

  stopMoving = () => {
    this.moveEggDirection = 0;
    this.stopAnimation();
    // this.wolfImage.src = wolfImage3;
  };

  // отрисовка

  startAnimation = () => {
    if (!this.animationTimer) {
      this.animationTimer = setInterval(this.nextFrame, 10);
    }
  };

  stopAnimation = () => {
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }
  };

  draw = (ctx: CanvasRenderingContext2D) => {
    // if (this.speed !== 0) {
    //   ctx.drawImage(this.eggImage, this.x, this.y, this.width, this.height);
    //   this.currentAnimationFrame = (this.currentAnimationFrame + 1) % this.frames.length;
    // }
    ctx.drawImage(this.eggImage, this.x, this.y, this.width, this.height);
  };

  nextFrame = () => {
    this.currentAnimationFrame = (this.currentAnimationFrame + 1) % this.frames.length;
    this.eggImage.src = this.frames[this.currentAnimationFrame];
  };
  // выход за границы

  isOutOfBounds = () => {
    return this.y + this.height < 0;
  };
}
