import { Egg } from './Egg';
import { Wolf } from './Wolf';

const initialPositionX = 10;
const initialPositionY = 10;

export class Engine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private initialEggSpeed = 100;
  private shootInterval = 500;
  private destroyedEggCount = 0;
  private eggs: Egg[] | null;
  private wolf: Wolf | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    if (!this.ctx) {
      throw new Error('Unable to get 2D rendering context');
    }
    // const initialEggX = this.canvas.width / 2 - 20;
    // const initialEggY = this.canvas.height - 20;
    // this.egg = new Egg({ x: initialPositionX, y: initialPositionY });
    this.wolf = new Wolf({ x: initialPositionX, y: initialPositionY });
    this.eggs = [];
    this.createEgg();
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
    this.createEgg();
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

  private createEgg = () => {
    for (let i = 0; i < 9; i++) {
      const egg = new Egg({
        x: 100 + i * 100,
        y: 100,
        width: 50,
        height: 50,
        speed: this.initialEggSpeed,
      });
      this.eggs!.push(egg);
    }
    const verticalSpacing = 20;
    const horizontalOffset = 60;

    for (let i = 0; i < 8; i++) {
      const egg = new Egg({
        x: 90 + i * 100 + horizontalOffset,
        y: 150 + verticalSpacing,
        width: 50,
        height: 50,
        speed: this.initialEggSpeed,
      });
      this.eggs!.push(egg);
    }
  };

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
    this.eggs!.forEach((egg) => egg.draw(this.ctx));
  };

  private clearCanvas = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  private updateEggs = () => {
    this.eggs!.forEach((egg) => egg.update());
    this.eggs = this.eggs!.filter((egg) => !egg.isOutOfBounds());
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
  private checkEggIntersection = () => {
    this.eggs!.forEach((egg) => {
      if (
        egg.x == this.wolf!.x + this.wolf!.width &&
        egg.x + egg.width >= this.wolf!.x &&
        egg.y == this.wolf!.y + this.wolf!.height &&
        egg.y + egg.height >= this.wolf!.y
      ) {
        this.eggs = this.eggs!.filter((e) => e !== egg);

        this.destroyedEggCount++;

        if (this.eggs.length === 0) {
          this.initialEggSpeed += 5;

          this.createEgg();
        }
      }
    });
  };
}
