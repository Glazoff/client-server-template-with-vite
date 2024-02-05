export class Wolf {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor({ x, y }: { x: number; y: number }) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
  }

  update = (input: string[]) => {
    if (input.includes('ArrowRight')) this.x++;
    else if (input.includes('ArrowLeft')) this.x--;
  };

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
