export class InputHandler {
  keys: KeyboardEvent['key'][];

  constructor() {
    this.keys = [];
    window.addEventListener('keydown', (e) => {
      if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}
