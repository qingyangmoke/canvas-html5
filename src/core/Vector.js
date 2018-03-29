/**
 * 向量
 */
class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * 向量大小
   * @return {Number} - 向量大小
   */
  magnitude() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  /**
   * 计算向量点积  两个向量的点积大于0 表示这两个向量大概处在同一个方向上
   * @param {Vector} vector - 目标向量
   */
  dotProduct(vector) {
    return this.x * vector.x + this.y * vector.y;
  }

  /**
   * 单位向量
   * @return {Vector} - 一个新的对象
   */
  toUnitVector() {
    const magnitude = this.magnitude();
    const unitVector = new Vector(this.x / magnitude, this.y / magnitude);
    return unitVector;
  }

  /**
   * 当前向量减去目标向量
   * @param {Vector} vector
   */
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  /**
   * 当前向量加上目标向量
   * @param {Vector} vector
   */
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  /**
   * 克隆
   * @return {Vector} - 一个新的向量
   */
  copy() {
    return new Vector(this.x, this.y);
  }
}

export default Vector;
