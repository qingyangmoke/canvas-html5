/**
 * 设置canvas
 * @param {HTMLCanvasElement} canvas
 * @return {HTMLCanvasElement}
 */
function setupCanvas(canvas) {
  canvas.style.padding = '0';
  /**
     * The canvas property used to set the canvas smoothing property.
     *
     * @member {string}
     */
  this.smoothProperty = 'imageSmoothingEnabled';

  if (!this.rootContext.imageSmoothingEnabled) {
    if (this.rootContext.webkitImageSmoothingEnabled) {
      this.smoothProperty = 'webkitImageSmoothingEnabled';
    } else if (this.rootContext.mozImageSmoothingEnabled) {
      this.smoothProperty = 'mozImageSmoothingEnabled';
    } else if (this.rootContext.oImageSmoothingEnabled) {
      this.smoothProperty = 'oImageSmoothingEnabled';
    } else if (this.rootContext.msImageSmoothingEnabled) {
      this.smoothProperty = 'msImageSmoothingEnabled';
    }
  }
  if (this.smoothProperty) {
    this.rootContext[this.smoothProperty] = true;
  }
  return canvas;
}

export default setupCanvas;
