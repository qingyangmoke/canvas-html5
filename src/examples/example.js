
class examples {
  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas, options = {}) {
    const { transparent = false, imageSmoothingEnabled = false } = options;
    this.canvas = canvas;
    this.context = canvas.getContext('2d', { alpha: transparent });
    this.contextSmoothProperty = 'imageSmoothingEnabled';
    if (!this.context.imageSmoothingEnabled) {
      ['webkit', 'moz', 'o', 'ms'].forEach((e) => {
        const prefixSmoothProperty = `${e}ImageSmoothingEnabled`;
        if (prefixSmoothProperty in this.context) {
          this.contextSmoothProperty = prefixSmoothProperty;
        }
      });
    }
    if (imageSmoothingEnabled) {
      this.context[this.contextSmoothProperty] = true;
    }
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.init();
  }
  init() {

  }

  drawDashedLine(x1, y1, x2, y2, strokeStyle = '#000', dashLength = 5) {
    this.context.beginPath();
    this.context.strokeStyle = strokeStyle;
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const numDashes = Math.floor(Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) / dashLength);
    for (let i = 0; i < numDashes; ++i) {
      this.context[i % 2 === 0 ? 'moveTo' : 'lineTo'](x1 + (deltaX / numDashes) * i, y1 + (deltaY / numDashes) * i);
    }
    this.context.closePath();
    this.context.stroke();
  }

  /**
   *
   * @param {number} x - x 坐标
   * @param {number} y - y 坐标
   * @param {number} w - 宽度
   * @param {number} h - 高度
   * @param {number} r - 圆角半径
   */
  roundRect(x, y, w, h, r) {
    r = Math.min(r, Math.min(w, h) / 2);
    this.context.beginPath();
    this.context.moveTo(x + r, y);
    this.context.arcTo(x + w, y, x + w, y + h, r);
    this.context.arcTo(x + w, y + h, x, y + h, r);
    this.context.arcTo(x, y + h, x, y, r);
    this.context.arcTo(x, y, x + w, y, r);
    this.context.closePath();
    return this;
  }

  draw() {
    this.context.fillStyle = '#ffffff';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  test() {
    this.draw();
  }
}

export default examples;

