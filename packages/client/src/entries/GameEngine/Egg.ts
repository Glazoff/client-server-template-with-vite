// import eggImage from '../../assets/static/EggImage.svg';
export class Egg {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  right: boolean | undefined;
  eggImage: HTMLImageElement;

  constructor({ x, y, speed, right }: { x: number; y: number; speed: number; right?: boolean }) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.speed = speed;
    this.right = right;
    this.eggImage = new Image();
    // this.eggImage.src = eggImage;
  }

  update() {
    this.x += this.right ? -this.speed : this.speed;
    this.y += this.speed / 2;
  }

  // отрисовка

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  // выход за границы

  isOutOfBounds = () => {
    return this.y + this.height < 0;
  };
}
