class Vec {
  /**
   * 创建一个二维向量
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * 向量加法
   * @param {Vec} other
   * @returns {Vec}
   */
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  /**
   * 向量减法
   * @param {Vec} other
   * @returns {Vec}
   */
  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  /**
   * 向量长度（模）
   * √(x² + y²)
   */
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

