import wolfImage from '../../images/wolf.png';
import wolfImage2 from '../../images/wolfLeft.jpg';

export class Wolf {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  currentAnimationFrame: number;
  moveWolfDirection: number;
  wolfImage: HTMLImageElement;
  frames: string[];
  animationTimer: NodeJS.Timeout | null;
  position: number;

  constructor({ x, y }: { x: number; y: number }) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    // TODO: Нужна ли тут скорость переключения??
    this.speed = 10;
    this.moveWolfDirection = 0;
    // TODO: Нужно несколько картинок волка
    this.frames = [wolfImage, wolfImage2];
    this.currentAnimationFrame = 0;
    this.wolfImage = new Image();
    this.wolfImage.src = this.frames[this.currentAnimationFrame];
    this.animationTimer = null;
    this.position = 0;
  }

  moveLeft() {
    // this.moveWolfDirection = -1;
    this.position = -1;
    this.startAnimation();
    this.wolfImage.src = wolfImage2;
  }

  moveRight() {
    this.position = 1;
    // this.moveWolfDirection = 1;
    this.startAnimation();
    this.wolfImage.src = wolfImage;
  }

  stopMoving() {
    console.log('stop');

    this.moveWolfDirection = 0;
    this.stopAnimation();
    // this.wolfImage.src = wolfImage3;
  }

  startAnimation() {
    if (!this.animationTimer) {
      this.animationTimer = setInterval(this.nextFrame, 50);
    }
  }

  stopAnimation() {
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }
  }

  update(canvasWidth: number) {
    this.x += this.moveWolfDirection * this.speed;
    this.x = Math.max(0, Math.min(this.x, canvasWidth - this.width));
  }

  // TODO: Подумать над позициниорованием высоты и ширины

  draw(ctx: CanvasRenderingContext2D, canvasHeight: number) {
    ctx.drawImage(this.wolfImage, this.x, canvasHeight - this.height - 10, this.width, this.height);
  }

  nextFrame = () => {
    // this.currentAnimationFrame = (this.currentAnimationFrame + 1) % this.frames.length;
    this.wolfImage.src = this.position == -1 ? this.frames[1] : this.frames[0];
  };
}
