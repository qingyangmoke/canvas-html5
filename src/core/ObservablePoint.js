/**
 * 点 提供监控功能 当坐标发生变化的时候通知监听者
 */
export default class ObservablePoint {
  /**
   * @param {number} [x=0] - x坐标
   * @param {number} [y=0] - y 坐标
   * @param {Function} callback - 当属性发生变化回调
   * @param {any} callbackContext - 回调函数上下文
   */
  constructor(x = 0, y = 0, callback, callbackContext) {
    this._x = x;
    this._y = y;
    this._callback = callback;
    this._callbackContext = callbackContext || this;
  }

  /**
   * 设置新坐标
   *
   * @param {number} [x=0] - x坐标
   * @param {number} [y=0] - y坐标 如果为空则y=x
   */
  set(x, y) {
    const _x = x || 0;
    const _y = y || ((y !== 0) ? _x : 0);

    if (this._x !== _x || this._y !== _y) {
      this._x = _x;
      this._y = _y;
      this._callback.call(this._callbackContext);
    }
  }

  /**
   * 从一个点拷贝坐标
   * @param {Point} point - 要复制的坐标点
   */
  copy(point) {
    if (this._x !== point.x || this._y !== point.y) {
      this._x = point.x;
      this._y = point.y;
      this._callback.call(this._callbackContext);
    }
  }

  /**
   * x坐标
   * @type {number}
   */
  get x() {
    return this._x;
  }

  set x(value) {
    if (this._x !== value) {
      this._x = value;
      this._callback.call(this._callbackContext);
    }
  }

  /**
   * y 坐标
   * @type {number}
   */
  get y() {
    return this._y;
  }

  set y(value) {
    if (this._y !== value) {
      this._y = value;
      this._callback.call(this._callbackContext);
    }
  }
}
