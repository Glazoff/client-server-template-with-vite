export class Egg {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  right: boolean | undefined;
  status: boolean;

  constructor({ x, y, speed, right }: { x: number; y: number; speed: number; right?: boolean }) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.speed = speed;
    this.right = right;
    this.status = true;
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
    if (this.x + this.width < 0) this.status = false;
  };
}
