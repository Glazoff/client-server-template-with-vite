/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Egg } from './Egg';
import { InputHandler } from './InputHandler';
import isRectCollide from './Intersection';
import { Wolf } from './Wolf';

export class Engine {
  private canvas: HTMLCanvasElement | null;
  private ctx: CanvasRenderingContext2D;
  eggs: Egg[];
  wolf: Wolf;
  CANVAS_WIDTH: number;
  CANVAS_HEIGHT: number;
  score: number;
  numberOfEggs: number;
  eggsSpeed: number;
  eggTimer: number;
  eggInterval: number;
  input: InputHandler;
  scoreToLoose: number;
  gameOver: boolean;
  private _onGameOver?: (score: number) => void;

  constructor(
    canvas: HTMLCanvasElement | null,
    onGameOver?: ((score: number) => void) | undefined
  ) {
    this.canvas = canvas;
    this.ctx = this.canvas?.getContext('2d') as CanvasRenderingContext2D;
    this.CANVAS_WIDTH = this.canvas!.width = 1000;
    this.CANVAS_HEIGHT = this.canvas!.height = 625;
    this.score = 0;
    this.scoreToLoose = 0;
    this.numberOfEggs = 100;
    this.eggsSpeed = 2;
    this.eggTimer = 0;
    this.eggInterval = 2000;
    this.input = new InputHandler();
    this.gameOver = false;
    this._onGameOver = onGameOver;

    this.eggs = [];

    this.wolf = new Wolf({ x: 300, y: 300 });
  }

  update() {
    this.wolf.update(this.input.keys);
    if (this.eggTimer > this.eggInterval) {
      this.addEgg();
      this.eggTimer = 0;
    } else {
      this.eggTimer += 10;
    }

    this.eggs.forEach((egg) => {
      egg.update();
      if (this.CANVAS_HEIGHT - egg.y < 0) {
        this.scoreToLoose++;
        // window.localStorage.setItem('scoreToLoose', this.scoreToLoose.toString());
        this.eggs.splice(this.eggs.indexOf(egg), 1);
      }
    });

    this.checkCollision();

    if (this.scoreToLoose >= 3) {
      this.gameOver = true;
      this._onGameOver!(this.score);
      console.log(this.gameOver);
    }
  }

  draw() {
    this.eggs.forEach((egg) => {
      egg.draw(this.ctx);
    });

    this.wolf.draw(this.ctx);
  }

  addEgg() {
    this.eggs.push(new Egg({ x: -10, y: 165, speed: this.eggsSpeed }));
  }

  checkCollision() {
    this.eggs.forEach((egg) => {
      if (isRectCollide(egg, this.wolf)) {
        this.score++;
        window.localStorage.setItem('score', this.score.toString());
        this.eggs.splice(this.eggs.indexOf(egg), 1);
        console.log(this.score);
      }
    });
  }

  render = () => {
    this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    this.update();
    this.draw();
    !this.gameOver && requestAnimationFrame(this.render);
  };
}
