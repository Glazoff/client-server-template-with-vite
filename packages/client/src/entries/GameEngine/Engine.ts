import { Egg } from './Egg';
import { isRectCollide } from './Intersection';
import { Wolf } from './Wolf';

export class Engine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private initialEggSpeed = 0.5;
  private isEndReport = false;
  private destroyedEggCount = 0;
  private catchEggCount = 0;
  private eggs: Egg[];
  private wolf: Wolf;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    const initialPositionX = this.canvas.width / 2 - 25;
    const initialPositionY = this.canvas.height - 50;

    if (!this.ctx) {
      throw new Error('Unable to get 2D rendering context');
    }
    this.wolf = new Wolf({ x: initialPositionX, y: initialPositionY });
    this.eggs = [];
    this.createEgg();
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  public start() {
    this.gameLoop();
  }
  public getCatchEggCount() {
    return this.catchEggCount;
  }

  private gameLoop = () => {
    this.updateGame();
    this.drawGame();
    requestAnimationFrame(this.gameLoop);
  };

  private updateGame = () => {
    this.moveWolf();
    this.updateEggs();
    this.checkEggIntersection();
    this.checkEggIntesectionIsBound();
  };

  private drawGame() {
    this.clearCanvas();

    const counterText = `${this.catchEggCount}`;
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
  }

  private createEgg = () => {
    if (this.isEndReport === false) {
      for (let i = 1; i <= 2; i++) {
        const egg = new Egg({
          x: 200 * i,
          y: 10,
          speed: this.initialEggSpeed,
        });
        this.eggs.push(egg);
      }
    }
  };

  private moveWolf() {
    if (this.wolf) {
      // TODO: Сделать 2 разные картинки Волка
      this.wolf.update(this.canvas.width);
    }
  }

  private drawWolf() {
    if (this.wolf) {
      this.wolf.draw(this.ctx, this.canvas.height);
    }
  }

  private drawEggs() {
    this.eggs.forEach((egg) => egg.draw(this.ctx));
  }

  private clearCanvas = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  private updateEggs() {
    this.eggs.forEach((egg) => egg.update());
  }

  private handleKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      this.wolf.stopMoving();
    }
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();

    if (event.code === 'ArrowLeft') {
      this.wolf.moveLeft();
    } else if (event.code === 'ArrowRight') {
      this.wolf.moveRight();
    }
  };
  // TODO: Подумать над проверкой выхода за границ холста.
  private checkEggIntersection() {
    this.eggs.forEach((egg) => {
      if (isRectCollide(egg, this.wolf)) {
        this.catchEggCount++;
        this.eggs = this.eggs.filter((currentEgg) => currentEgg !== egg);

        if (this.eggs.length === 0) {
          this.initialEggSpeed += 10;
          this.createEgg();
        }
      }
    });
  }

  private checkEggIntesectionIsBound() {
    this.eggs.forEach((egg) => {
      if (egg.isOutOfBounds(this.canvas.height)) {
        this.destroyedEggCount++;
        this.eggs = this.eggs.filter((currentEgg) => currentEgg !== egg);
      }
    });
    if (this.destroyedEggCount === 6) {
      this.stop();
    }

    if (this.eggs.length === 0) {
      this.initialEggSpeed += 10;
      this.createEgg();
    }
  }
  // TODO: Подумать как заканчивать игру
  public stop() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    this.isEndReport = true;
  }
}
