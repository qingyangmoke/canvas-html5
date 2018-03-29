
import examples from './example';
class text extends examples {
  triangle(v1, v2, v3, context, wireframe) {
    context.beginPath();
    context.moveTo(v1[0], v1[1]);
    context.lineTo(v2[0], v2[1]);
    context.lineTo(v3[0], v3[1]);
    context.lineTo(v1[0], v1[1]);
    context.closePath();
    context.fillStyle = '#333';
    context.fill();
  }

  draw() {
    super.draw();
    this.context.font = '38px Arial';
    this.context.fillStyle = 'blue';
    this.context.strokeStyle = 'black';
    this.context.textBaseline = 'top';
    this.context.textAlign = 'left';
    this.context.save();
    // this.context.rect(this.canvas.width / 2 - 150, this.canvas.height / 2 - 15, 60, 38);
    // this.context.clip();
    this.context.fillText('hello canvas', this.canvas.width / 2 - 150, this.canvas.height / 2 - 15);
    this.context.restore();
    this.context.strokeText('hello canvas', this.canvas.width / 2 - 150, this.canvas.height / 2 + 45);

    // this.context.fillStyle = '#333';

    // // this.context.beginPath();
    // // this.context.moveTo(100, 100);
    // // this.context.lineTo(200, 50);
    // // this.context.lineTo(150, 200);
    // // this.context.lineTo(100, 100);
    // // this.context.fill();

    // // this.context.beginPath();
    // // this.context.moveTo(200, 50);
    // // this.context.lineTo(150, 200);
    // // this.context.lineTo(300, 100);
    // // this.context.lineTo(200, 50);
    // // this.context.fill();

    // this.drawDashedLine(200, 50, 150, 200, '#ff0000', 5);
    // this.drawDashedLine(150, 200, 300, 100, '#ff0000', 5);
    // this.drawDashedLine(300, 100, 200, 50, '#ff0000', 5);

    // // vertices
    // // var v1 = [40, 20];
    // // var v2 = [125, 35];
    // // var v3 = [165, 105];
    // // var v4 = [35, 95];
    // // this.triangle(v1, v2, v3, this.context, true);
    // // this.triangle(v3, v4, v1, this.context, true);
  }
}

export default text;

