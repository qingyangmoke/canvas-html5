/**
 * canvas 导出成image对象
 * @param {HTMLCanvasElement} canvas
 * @param {String} type - 图片类型 png,jpg,jpeg
 */
export function toImage(canvas, type = 'png') {
  const img = new Image();
  img.src = toBase64(canvas, type);
  return img;
}

/**
 * canvas 导出成base64对象
 * @param {HTMLCanvasElement} canvas
 * @param {String} type - 图片类型 png,jpg,jpeg
 */
export function toBase64(canvas, type = 'png') {
  return canvas.toDataURL(`image/${type}`);
}
