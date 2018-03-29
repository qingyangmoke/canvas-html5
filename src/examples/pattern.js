
import examples from './example';
class pattern extends examples {
  init() {
    const img = new Image();
    img.onload = () => {
      this.texture = img;
      this.draw();
    };
    img.src = './assets/box.jpeg';
  }

  draw(scale = 0.1) {
    super.draw();
    if (this.texture) {
      // repeat repeat-x repeat-y no-repeat
      this.context.save();
      this.roundRect(10, 10, 100, 100, 30);
      this.context.clip();
      this.context.scale(scale, scale);
      const texturePattern = this.context.createPattern(this.texture, 'repeat');
      this.context.fillStyle = texturePattern;
      this.context.fillRect(0, 0, Math.round(this.canvas.width / scale), Math.round(this.canvas.height / scale));
      this.context.restore();
    }
  }

  test() {
    let scale = 0.1;
    let yoyo = false;
    const timer = setInterval(() => {
      this.draw(scale);
      if (!yoyo && scale >= 2) {
        yoyo = true;
        scale = 2;
      } else if (yoyo && scale <= 0) {
        yoyo = false;
        scale = 0;
      }
      scale += yoyo ? -0.01 : 0.01;
    }, 1000 / 60);
  }
}

export default pattern;

