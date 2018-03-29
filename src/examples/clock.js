
import examples from './example';
class clock extends examples {
  init() {
    this.RADIUS = 50;
    this.FONT_HEIGHT = 16;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
  }

  drawCenter() {
    this.context.fillStyle = 'red';
    this.context.beginPath();
    this.context.arc(this.centerX, this.centerY, 4, 0, Math.PI * 2, true);
    this.context.fill();
  }

  drawCircle() {
    this.context.beginPath();
    this.context.arc(this.centerX, this.centerY, this.RADIUS, 0, Math.PI * 2, true);
    this.context.stroke();
  }

  drawNumberals() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.context.save();
    numbers.forEach((num) => {
      const angle = Math.PI / 6 * (num - 3);
      const numWidth = this.context.measureText(num.toString()).width;
      let x1 = this.centerX + Math.cos(angle) * (this.RADIUS);
      let y1 = this.centerY + Math.sin(angle) * (this.RADIUS);
      // 半径向外扩展10像素 画数字
      let x = this.centerX + Math.cos(angle) * (this.RADIUS + 10);
      let y = this.centerY + Math.sin(angle) * (this.RADIUS + 10);
      this.context.fillStyle = '#000';
      this.context.beginPath();
      this.context.arc(x1, y1, num % 3 === 0 ? 2 : 1, 0, Math.PI * 2, true);
      this.context.fill();
      this.context.fillStyle = 'blue';
      // 垂直+横向 居中
      this.context.textBaseline = 'middle';
      this.context.textAlign = 'center';
      this.context.fillText(num.toString(), x, y);
    });
    this.context.restore();
  }

  drawHour() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hour = date.getHours() % 12;
    const angle = Math.PI / 6 * (hour - 3) + Math.PI / 6 * minutes / 60;
    const x = this.centerX + Math.cos(angle) * this.RADIUS / 2;
    const y = this.centerY + Math.sin(angle) * this.RADIUS / 2;
    this.context.save();
    this.context.strokeStyle = 'blcak';
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.moveTo(this.centerX, this.centerY);
    this.context.lineTo(x, y);
    console.log(this.centerX, this.centerY, x, y, angle);
    this.context.stroke();
    this.context.restore();
  }

  drawMinute() {
    const date = new Date();
    const minutes = date.getMinutes();
    const angle = Math.PI * (minutes - 15) / 60 * 2;
    let x = this.centerX + Math.cos(angle) * this.RADIUS * 2 / 3;
    let y = this.centerY + Math.sin(angle) * this.RADIUS * 2 / 3;
    this.context.save();
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.moveTo(this.centerX, this.centerY);
    this.context.lineTo(x, y);
    console.log(this.centerX, this.centerY, x, y, angle);
    this.context.stroke();
    this.context.restore();
  }

  drawSecond() {
    const date = new Date();
    const seconds = date.getSeconds();
    const angle = Math.PI * (seconds - 15) / 60 * 2;
    const x = this.centerX + Math.cos(angle) * this.RADIUS * 4 / 5;
    const y = this.centerY + Math.sin(angle) * this.RADIUS * 4 / 5;
    this.context.save();
    this.context.strokeStyle = 'red';
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.moveTo(this.centerX, this.centerY);
    this.context.lineTo(x, y);
    console.log(this.centerX, this.centerY, x, y, angle);
    this.context.stroke();
    this.context.restore();
  }

  draw() {
    super.draw();
    this.context.font = `${this.FONT_HEIGHT}px Arial`;
    this.drawCircle();
    this.drawNumberals();
    this.drawHour();
    this.drawMinute();
    this.drawSecond();
    this.drawCenter();
  }

  test() {
    setInterval(() => {
      this.draw();
    }, 500);
  }
}

export default clock;

