
import examples from './example';
class shadow extends examples {
  draw() {
    super.draw();
    this.context.save();
    this.context.fillStyle = '#0000ff';
    this.context.shadowColor = 'rgba(0,0,0,0.7)';
    this.context.shadowOffsetX = 8;
    this.context.shadowOffsetY = 8;
    this.context.shadowBlur = 16;
    this.context.fillRect(this.centerX, this.centerY, 100, 50);
    this.context.restore();
  }
}

export default shadow;

