/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Egg } from './Egg';
import { Environment } from './Environment';
/* import { Wolf } from './Wolf';

const numberOfEggs = 100;
 */
export class Engine {
  private canvas: HTMLCanvasElement | null;
  private ctx: CanvasRenderingContext2D;
  // eggs: Egg[] | [];
  egg1: Egg;
  egg2: Egg;
  egg3: Egg;
  egg4: Egg;
  env: Environment;
  CANVAS_WIDTH: number;
  CANVAS_HEIGHT: number;

  constructor(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas;
    this.ctx = this.canvas?.getContext('2d') as CanvasRenderingContext2D;
    this.CANVAS_WIDTH = this.canvas!.width = 1000;
    this.CANVAS_HEIGHT = this.canvas!.height = 625;

    /* this.eggs = [];
    for (let i = 0; i < numberOfEggs; i++) {
      this.eggs.push(new Egg({ x: 10, y: 100 }));
    } */
    this.env = new Environment({ x: 0, y: 150 });
    this.egg1 = new Egg({ x: 0, y: 160, speed: 0.3 });
    this.egg2 = new Egg({ x: 900, y: 200, speed: 0.3, right: true });
    this.egg3 = new Egg({ x: 0, y: 310, speed: 0.3 });
    this.egg4 = new Egg({ x: 900, y: 350, speed: 0.3, right: true });
  }

  update() {
    /* this.eggs.forEach((egg) => {
      egg.update();
    }); */

    this.egg1.update();
    this.egg2.update();
    this.egg3.update();
    this.egg4.update();
  }

  draw() {
    /* this.eggs.forEach((egg) => {
      egg.draw(this.ctx);
    }); */
    // this.env.draw(this.ctx);

    this.egg1.draw(this.ctx);
    this.egg2.draw(this.ctx);
    this.egg3.draw(this.ctx);
    this.egg4.draw(this.ctx);
  }

  render = () => {
    this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    this.update();
    this.draw();
    requestAnimationFrame(this.render);
  };
}
