
import examples from './example';
import windowToCanvas from '../core/windowToCanvas';
class paint extends examples {
  init() {
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.lastX = 0;
    this.lastY = 0;
    this.mousedown = false;
    this.canvas.addEventListener('mousedown', ({ clientX, clientY }) => {
      const { x, y } = windowToCanvas(this.canvas, clientX, clientY);
      this.lastX = x;
      this.lastY = y;
      this.mousedown = true;
    });
    this.canvas.addEventListener('mousemove', ({ clientX, clientY }) => {
      if (!this.mousedown) return;
      const { x, y } = windowToCanvas(this.canvas, clientX, clientY);
      this.context.beginPath();
      this.context.moveTo(this.lastX, this.lastY);
      this.context.lineTo(x, y);
      this.lastX = x;
      this.lastY = y;
      this.context.stroke();
    });
    this.canvas.addEventListener('mouseup', (e) => {
      this.mousedown = false;
    });
  }
  draw() {
    super.draw();
  }
}

export default paint;

