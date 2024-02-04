import { Egg } from './Egg';
import { Wolf } from './Wolf';
import { isRectCollide } from './Intersection';

export class Engine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private initialEggSpeed = 0.5;
  private shootInterval = 500;
  private isCountReport = false;
  private destroyedEggCount = 0;
  private eggs: Egg[];
  private egg1: Egg;
  private egg2: Egg;
  private wolf: Wolf;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    const initialPositionX = this.canvas.width / 2 - 25;
    const initialPositionY = this.canvas.height - 50;

    if (!this.ctx) {
      throw new Error('Unable to get 2D rendering context');
    }
    // const initialEggX = this.canvas.width / 2 - 20;
    // const initialEggY = this.canvas.height - 20;
    // this.egg = new Egg({ x: initialPositionX, y: initialPositionY });
    this.wolf = new Wolf({ x: initialPositionX, y: initialPositionY });

    this.egg1 = new Egg({
      x: 200,
      y: 10,
      width: 500,
      height: 400,
      speed: this.initialEggSpeed,
    });
    this.egg2 = new Egg({
      x: 500,
      y: 10,
      width: 500,
      height: 400,
      speed: this.initialEggSpeed,
    });

    this.eggs = [];
    // this.createEgg();
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  public start = () => {
    this.gameLoop();
  };
  public getDestroyedEggCount = (): number => {
    return this.destroyedEggCount;
  };

  private gameLoop = () => {
    this.updateGame();
    this.drawGame();
    requestAnimationFrame(this.gameLoop);
  };

  private updateGame = () => {
    this.moveWolf();
    // this.createEgg();
    this.updateEggs();
    this.checkEggIntersection();
  };

  private drawGame = () => {
    this.clearCanvas();

    const counterText = `${this.destroyedEggCount}`;
    this.ctx.font = '35px "Press Start 2P", cursive';
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 3;
    this.ctx.strokeText(counterText, 10, 25);
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(counterText, 10, 50);

    if (this.wolf) {
      this.drawWolf();
    }

    if (this.eggs) {
      this.drawEggs();
    }
  };

  // TODO: При добавление в массив, методы класса Egg ведут себя странно.
  // Предыдщий кадр не стирается во время движение яйца и получается черная полоса. Разобраться в чем дело

  // private createEgg = () => {
  //   // for (let i = 1; i <= 2; i++) {
  //   //   const egg = new Egg({
  //   //     x: 200 * i,
  //   //     y: 10,
  //   //     width: 500,
  //   //     height: 400,
  //   //     speed: this.initialEggSpeed,
  //   //   });
  //   //   this.eggs.push(egg);
  //   // }
  // };

  private moveWolf = () => {
    if (this.wolf) {
      // TODO: Сделать 2 разные картинки Волка
      this.wolf.update(this.canvas.width);
    }
  };

  private drawWolf = () => {
    if (this.wolf) {
      this.wolf.draw(this.ctx, this.canvas.height);
    }
  };

  private drawEggs = () => {
    this.egg1.draw(this.ctx);
    this.egg2.draw(this.ctx);

    // this.eggs.forEach((egg) => egg.draw(this.ctx));
  };

  private clearCanvas = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  private updateEggs = () => {
    this.egg1.update(this.canvas.height);
    this.egg2.update(this.canvas.height);

    // this.eggs.forEach((egg) => egg.update(this.canvas.height));
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      event.preventDefault();
    }

    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      if (this.wolf) {
        this.wolf.stopMoving();
      }
    }
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      event.preventDefault();
    }

    if (event.code === 'ArrowLeft') {
      if (this.wolf) {
        this.wolf.moveLeft();
      }
    } else if (event.code === 'ArrowRight') {
      if (this.wolf) {
        this.wolf.moveRight();
      }
    }
  };
  // TODO: Подумать над проверкой выхода за границ холста.
  private checkEggIntersection = () => {
    if (isRectCollide(this.egg1, this.wolf)) {
      this.destroyedEggCount++;
      this.egg1.x = 200;
      this.egg1.y = 10;
    }

    if (isRectCollide(this.egg2, this.wolf)) {
      this.destroyedEggCount++;
      this.egg2.x = 500;
      this.egg2.y = 10;
    }
  };
  // TODO: Подумать как заканчивать игру
  public stop = () => {
    this.isCountReport = false;
  };
}
