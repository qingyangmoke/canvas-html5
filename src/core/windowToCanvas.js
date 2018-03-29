/**
 * window 坐标转换成 canvas内坐标
 * @param {HTMLCanvasElement} canvas
 * @param {*} x
 * @param {*} y
 */
function windowToCanvas(canvas, x, y) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (x - rect.left) * (canvas.width / rect.width),
    y: (y - rect.top) * (canvas.height / rect.height)
  };
}

export default windowToCanvas;
