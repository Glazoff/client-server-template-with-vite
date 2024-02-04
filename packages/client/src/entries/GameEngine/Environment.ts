export class Environment {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor({ x, y }: { x: number; y: number }) {
    this.x = x;
    this.y = y;
    this.width = 300;
    this.height = 20;
  }

  // отрисовка

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
